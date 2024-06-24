// models/Doctor.js

import pool from '../config/Database.js'
import bcrypt from 'bcrypt'
import fs from 'fs'
import path from 'path'

const saltRounds = 10
const allowedImageTypes = ['.png', '.jpg', '.jpeg']
const maxImageSize = 5000000 // 5MB

class Doctor {
  async getAllDoctors() {
    try {
      const [doctors] = await pool.query(`
        SELECT * FROM doctor
      `)
      return doctors
    } catch (error) {
      throw error
    }
  }

  async findDoctorByEmail(email) {
    try {
      const [dokter] = await pool.query(
        'SELECT * FROM doctor WHERE email = ?',
        [email],
      )
      return dokter[0]
    } catch (error) {
      throw error
    }
  }

  // async getDoctorById(id) {
  //   try {
  //     const [doctor] = await pool.query(
  //       `
  //       SELECT d.*, u.full_name as user_full_name
  //       FROM doctor d
  //       LEFT JOIN users u ON d.user_id = u.id
  //       WHERE d.id = ?
  //     `,
  //       [id],
  //     )

  //     if (doctor.length === 0) {
  //       return null
  //     }

  //     return doctor[0]
  //   } catch (error) {
  //     throw error
  //   }
  // }
  async getDoctorById(id) {
    try {
      const [doctor] = await pool.query(
        `
        SELECT * FROM doctor
        WHERE id= ?
      `,
        [id],
      )

      if (doctor.length === 0) {
        return null
      }

      return doctor[0]
    } catch (error) {
      throw error
    }
  }

  async registerDoctor(doctorData) {
    const {
      name,
      gender,
      birth_place,
      birth_date,
      email,
      phone_number,
      password,
    } = doctorData

    try {
      const [
        existingDoctor,
      ] = await pool.query('SELECT * FROM doctor WHERE email = ?', [email])

      if (existingDoctor.length > 0) {
        throw new Error('Email already exists')
      }

      const hashPassword = await bcrypt.hash(password, saltRounds)

      await pool.query(
        'INSERT INTO doctor (name, gender, birth_place, birth_date, email, phone_number, password) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [
          name,
          gender,
          birth_place,
          birth_date,
          email,
          phone_number,
          hashPassword,
        ],
      )

      return { msg: 'Registration successful' }
    } catch (error) {
      throw error
    }
  }

  async createDoctor(doctorData, file) {
    const {
      name,
      email,
      password,
      price,
      address,
      online,
      offline,
      likes_count,
      experience,
      about_me,
      professional_experience,
      focus_areas,
      certificate_title,
      reviews,
    } = doctorData

    let fileName = ''

    try {
      if (file) {
        fileName = await this.uploadImageFile(file)
      }

      const hashPassword = await bcrypt.hash(password, saltRounds)
      const url = fileName ? `${process.env.BASE_URL}/images/${fileName}` : null

      await pool.query(
        `
        INSERT INTO doctor (name, email, password, image, url, price, address, online, offline, likes_count, experience, about_me, professional_experience, focus_areas, certificate_title, reviews)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
        [
          name,
          email,
          hashPassword,
          fileName,
          url,
          price,
          address,
          online,
          offline,
          likes_count,
          experience,
          about_me,
          professional_experience,
          focus_areas,
          certificate_title,
          reviews,
        ],
      )

      return { msg: 'Doctor created successfully' }
    } catch (error) {
      if (fileName) {
        await this.deleteImageFile(fileName)
      }
      throw error
    }
  }

  async updateDoctor(id, doctorData, file) {
    const {
      name,
      price,
      address,
      online,
      offline,
      likes_count,
      experience,
      about_me,
      professional_experience,
      focus_areas,
      certificate_title,
      reviews,
    } = doctorData

    let fileName = ''

    try {
      const existingDoctor = await this.getDoctorById(id)
      if (!existingDoctor) {
        throw new Error('Doctor not found')
      }

      fileName = existingDoctor.image

      if (file) {
        fileName = await this.uploadImageFile(file)
        await this.deleteImageFile(existingDoctor.image)
      }

      const url = fileName
        ? `${process.env.BASE_URL}/images/${fileName}`
        : existingDoctor.url

      await pool.query(
        `
        UPDATE doctor SET
          name = ?,
          image = ?,
          url = ?,
          price = ?,
          address = ?,
          online = ?,
          offline = ?,
          likes_count = ?,
          experience = ?,
          about_me = ?,
          professional_experience = ?,
          focus_areas = ?,
          certificate_title = ?,
          reviews = ?
        WHERE id = ?
      `,
        [
          name,
          fileName || existingDoctor.image,
          url || existingDoctor.url,
          price,
          address,
          online,
          offline,
          likes_count,
          experience,
          about_me,
          professional_experience,
          focus_areas,
          certificate_title,
          reviews,
          id,
        ],
      )

      return { msg: 'Doctor updated successfully' }
    } catch (error) {
      if (fileName && file) {
        await this.deleteImageFile(fileName)
      }
      throw error
    }
  }

  async updateRefreshToken(doctorId, refreshToken) {
    try {
      await pool.query('UPDATE doctor SET refresh_token = ? WHERE id = ?', [
        refreshToken,
        doctorId,
      ])
    } catch (error) {
      throw error
    }
  }

  async deleteDoctor(id) {
    try {
      const existingDoctor = await this.getDoctorById(id)
      if (!existingDoctor) {
        throw new Error('Doctor not found')
      }

      await this.deleteImageFile(existingDoctor.image)

      await pool.query('DELETE FROM doctor WHERE id = ?', [id])

      return { msg: 'Doctor deleted successfully' }
    } catch (error) {
      throw error
    }
  }

  async uploadImageFile(file) {
    const ext = path.extname(file.name)
    const fileName = file.md5 + ext
    const filePath = `./public/images/${fileName}`

    if (!allowedImageTypes.includes(ext.toLowerCase())) {
      throw new Error('Invalid image type')
    }

    if (file.size > maxImageSize) {
      throw new Error('Max image size is 5MB')
    }

    await file.mv(filePath)
    return fileName
  }

  async deleteImageFile(fileName) {
    const filePath = `./public/images/${fileName}`
    try {
      await fs.promises.unlink(filePath)
    } catch (error) {
      console.error(`Error deleting image file: ${error.message}`)
      throw error
    }
  }
}

export default new Doctor()
