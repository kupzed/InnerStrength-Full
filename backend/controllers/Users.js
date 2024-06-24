// controllers/userController.js

import {
  findAllUsers,
  findUserById,
  findUserByEmail,
  createUser,
  updateUser,
  deleteUser,
} from '../models/UserModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import path from 'path'
import fs from 'fs'

const SECRET_KEY =
  process.env.ACCESS_TOKEN_SECRET || 'qwerttyuio12345asdfghjkl67890zxcvbnm'

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await findAllUsers()
    res.json(users)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ msg: 'Internal Server Error' })
  }
}

// Register new user
export const Register = async (req, res) => {
  const {
    username,
    full_name,
    gender,
    birth_place,
    birth_date,
    email,
    phone_number,
    password,
    role,
    community_id,
    doctor_id,
  } = req.body

  const existingUser = await findUserByEmail(email)
  if (existingUser) {
    return res
      .status(404)
      .json({ msg: 'Email sudah terdaftar, silakan gunakan email lain' })
  }

  const salt = await bcrypt.genSalt()
  const hashPassword = await bcrypt.hash(password, salt)
  try {
    await createUser({
      username,
      full_name,
      gender,
      birth_place,
      birth_date,
      email,
      phone_number,
      password: hashPassword,
      role: 'user',
      community_id,
      doctor_id,
    })
    res.json({ msg: 'Registrasi berhasil' })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ msg: 'Internal Server Error' })
  }
}

// Login user
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await findUserByEmail(email)

    if (!user) {
      return res.status(404).json({ msg: 'Pengguna tidak ditemukan' })
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      return res.status(400).json({ msg: 'Password salah' })
    }

    const {
      id,
      username,
      full_name,
      gender,
      birth_place,
      birth_date,
      phone_number,
      role,
      community_id,
      doctor_id,
    } = user

    const accessToken = jwt.sign(
      {
        userId: id,
        username,
        full_name,
        gender,
        birth_place,
        birth_date,
        email,
        phone_number,
        role,
        community_id,
        doctor_id,
      },
      SECRET_KEY,
      {
        expiresIn: '1d',
      },
    )

    await updateUser(id, { refresh_token: accessToken })

    res.json({ accessToken, role, id })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ msg: 'Internal Server Error' })
  }
}

// Get current user profile
export const Me = async (req, res) => {
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return res.status(401).json({ msg: 'Unauthorized' })

    const decoded = jwt.verify(token, SECRET_KEY)

    const user = await findUserById(decoded.userId)

    if (!user || user.refresh_token !== token) {
      return res.status(401).json({ msg: 'Unauthorized' })
    }

    res.json(user)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ msg: 'Internal Server Error' })
  }
}

// Get user by id
export const getUSerById = async (req, res) => {
  try {
    const userId = req.params.id
    const user = await findUserById(userId)

    if (!user) {
      return res.status(404).json({ msg: 'Pengguna tidak ditemukan' })
    }

    res.status(200).json(user)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ msg: 'Internal Server Error' })
  }
}

// Update user profile
export const updateUsers = async (req, res) => {
  try {
    const userId = req.params.id
    const {
      username,
      full_name,
      gender,
      birth_place,
      birth_date,
      email,
      phone_number,
      role,
      community_id,
      doctor_id,
    } = req.body
    const user = await findUserById(userId)

    if (!user) {
      return res.status(404).json({ msg: 'Pengguna tidak ditemukan' })
    }

    let fileName = user.image || 'default.png'
    if (req.files && req.files.image) {
      const file = req.files.image
      const fileSize = file.size
      const ext = path.extname(file.name)
      fileName = file.md5 + ext

      const allowedType = ['.png', '.jpg', '.jpeg']
      if (!allowedType.includes(ext.toLowerCase())) {
        return res.status(422).json({ msg: 'Tipe gambar tidak valid' })
      }
      if (fileSize > 5000000) {
        return res
          .status(422)
          .json({ msg: 'Ukuran gambar maksimal adalah 5MB' })
      }

      file.mv(`./public/images/${fileName}`, (err) => {
        if (err) {
          console.log('Error moving file:', err.message)
          return res.status(500).json({ msg: err.message })
        }
        console.log('File uploaded successfully')
      })
    } else {
      console.log('No file upload detected')
    }

    const url = `${req.protocol}://${req.get('host')}/images/${fileName}`

    await updateUser(userId, {
      username,
      full_name,
      gender,
      birth_place,
      birth_date,
      email,
      phone_number,
      role,
      community_id,
      doctor_id,
      image: fileName,
      url,
    })

    res.status(200).json({ msg: 'Profil pengguna berhasil diperbarui' })
  } catch (error) {
    console.log('Error updating user:', error.message)
    res.status(500).json({ msg: 'Internal Server Error' })
  }
}

// Delete user
export const deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id
    const user = await findUserById(userId)

    if (!user) {
      return res.status(404).json({ msg: 'Pengguna tidak ditemukan' })
    }

    // Optionally remove the user's image
    if (user.image && user.image !== 'default.png') {
      const filePath = `./public/images/${user.image}`
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log('Gagal menghapus gambar:', err)
        }
      })
    }

    await deleteUser(userId)

    res.status(200).json({ msg: 'Pengguna berhasil dihapus' })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ msg: 'Internal Server Error' })
  }
}

// Forgot Password
export const nePassword = async (req, res) => {
  const { email, password } = req.body

  const user = await findUserByEmail(email)
  if (!user) {
    return res.status(404).json({ msg: 'Email tidak ditemukan' })
  }

  const salt = await bcrypt.genSalt()
  const hashPassword = await bcrypt.hash(password, salt)
  try {
    await updateUser(user.id, { password: hashPassword })
    res.json({ msg: 'Update Password Berhasil' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Internal Server Error' })
  }
}

// Reset Password (sending email)
export const resetPassword = async (req, res) => {
  try {
    const { email } = req.body

    const user = await findUserByEmail(email)
    if (!user) {
      return res.status(404).json({ msg: 'Email tidak ditemukan' })
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: 'kiravelnote@gmail.com',
      to: email,
      subject: 'Reset Password',
      text:
        'Klik link ini untuk reset password: http://localhost:5173/reset-password',
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error:', error)
        res.status(500).json({ msg: 'Gagal mengirim email reset password' })
      } else {
        console.log('Email reset password terkirim:', info.response)
        res.status(200).json({ msg: 'Email reset password berhasil dikirim' })
      }
    })
  } catch (error) {
    console.error('Error:', error)
    res
      .status(500)
      .json({ msg: 'Terjadi kesalahan dalam proses reset password' })
  }
}
