import Doctor from '../models/DoctorModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import path from 'path'
import fs from 'fs'

// Get all doctors
export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.getAllDoctors()
    res.status(200).json(doctors)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Login doctor
export const LoginDoctor = async (req, res) => {
  const { email, password } = req.body

  try {
    const doctor = await Doctor.findDoctorByEmail(email)

    if (!doctor) {
      return res.status(404).json({ msg: 'Doctor not found' })
    }

    const match = await bcrypt.compare(password, doctor.password)
    if (!match) {
      return res.status(400).json({ msg: 'Incorrect password' })
    }

    const accessToken = jwt.sign(
      {
        doctorId: doctor.id,
        name: doctor.name,
        email: doctor.email,
        // Add other necessary fields here
      },
      process.env.ACCESS_TOKEN_SECRET || 'default_secret',
      { expiresIn: '1d' },
    )

    await Doctor.updateRefreshToken(doctor.id, accessToken)

    res.json({ accessToken, doctorId: doctor.id })
  } catch (error) {
    console.error(error.message)
    res.status(401).json({ msg: 'Unauthorized' })
  }
}

// Get doctor by id
export const getDoctorById = async (req, res) => {
  const { id } = req.params
  try {
    const doctor = await Doctor.getDoctorById(id)

    if (!doctor) {
      return res.status(404).json({ msg: 'Doctor not found' })
    }

    res.status(200).json(doctor)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ msg: error.message })
  }
}

// Register doctor
export const RegisterDoctor = async (req, res) => {
  const doctorData = req.body

  try {
    const result = await Doctor.registerDoctor(doctorData)
    res.json(result)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ msg: error.message })
  }
}

// Create new doctor
export const createDoctor = async (req, res) => {
  const doctorData = req.body
  const file = req.files && req.files.image

  try {
    const result = await Doctor.createDoctor(doctorData, file)
    res.status(201).json(result)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ msg: error.message })
  }
}

// Update doctor
export const updateDoctor = async (req, res) => {
  const { id } = req.params
  const doctorData = req.body
  const file = req.files && req.files.image

  try {
    const result = await Doctor.updateDoctor(id, doctorData, file)
    res.status(200).json(result)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ msg: error.message })
  }
}

// Delete doctor
export const deleteDoctor = async (req, res) => {
  const { id } = req.params
  try {
    const result = await Doctor.deleteDoctor(id)
    res.status(200).json(result)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({ msg: error.message })
  }
}
