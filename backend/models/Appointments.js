import db from '../config/Database.js'
import { v4 as uuidv4 } from 'uuid'

// Generate a unique medical record number
const generateMedicalRecordNo = () => `MEDIS-${uuidv4().split('-')[0]}`

const AppointmentModel = {
  getAllappointmentForUser: async (userId) => {
    try {
      const [
        appointment,
      ] = await db.query(
        `SELECT a.*, d.* FROM appointment a JOIN doctor d ON a.doctor_id = d.id WHERE a.user_id = ?`,
        [userId],
      )
      return appointment
    } catch (error) {
      throw new Error(`Error while fetching appointment: ${error.message}`)
    }
  },

  getAllappointmentForDoctor: async (doctorId) => {
    try {
      const [
        appointment,
      ] = await db.query(
        `SELECT a.*, u.* FROM appointment a JOIN users u ON a.user_id = u.id WHERE a.doctor_id = ?`,
        [doctorId],
      )
      return appointment
    } catch (error) {
      throw new Error(`Error while fetching appointment: ${error.message}`)
    }
  },

  getAppointmentById: async (id) => {
    try {
      const [
        appointment,
      ] = await db.query('SELECT * FROM appointment WHERE id = ?', [id])
      if (appointment.length === 0) {
        throw new Error('Appointment not found')
      }
      return appointment[0]
    } catch (error) {
      throw new Error(`Error while fetching appointment: ${error.message}`)
    }
  },

  createAppointment: async (appointmentData) => {
    const {
      patient_name,
      phone_number,
      registration_date,
      paket,
      complaints,
      notes,
      type,
      user_id,
      doctor_id,
    } = appointmentData
    const medical_record_no = generateMedicalRecordNo()
    try {
      const [
        result,
      ] = await db.query(
        'INSERT INTO appointment (medical_record_no, patient_name, phone_number, registration_date, paket, complaints, notes, status, type, user_id, doctor_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          medical_record_no,
          patient_name,
          phone_number,
          registration_date,
          paket,
          complaints,
          notes,
          'terjadwal',
          type,
          user_id,
          doctor_id,
        ],
      )
      return result.insertId
    } catch (error) {
      throw new Error(`Error while creating appointment: ${error.message}`)
    }
  },

  updateAppointment: async (id, appointmentData) => {
    const {
      medical_record_no,
      patient_name,
      phone_number,
      registration_date,
      paket,
      complaints,
      notes,
    } = appointmentData
    try {
      const [
        result,
      ] = await db.query(
        'UPDATE appointment SET medical_record_no = ?, patient_name = ?, phone_number = ?, registration_date = ?, paket = ?, complaints = ?, notes = ? WHERE id = ?',
        [
          medical_record_no,
          patient_name,
          phone_number,
          registration_date,
          paket,
          complaints,
          notes,
          id,
        ],
      )

      if (result.affectedRows === 0) {
        throw new Error('Appointment not found')
      }
    } catch (error) {
      throw new Error(`Error while updating appointment: ${error.message}`)
    }
  },

  updateAppointmentType: async (id, type) => {
    try {
      const [
        result,
      ] = await db.query('UPDATE appointment SET type = ? WHERE id = ?', [
        type,
        id,
      ])

      if (result.affectedRows === 0) {
        throw new Error('Appointment not found')
      }
    } catch (error) {
      throw new Error(`Error while updating appointment type: ${error.message}`)
    }
  },

  updateappointmenttatus: async (id, status) => {
    try {
      const [
        result,
      ] = await db.query('UPDATE appointment SET status = ? WHERE id = ?', [
        status,
        id,
      ])

      if (result.affectedRows === 0) {
        throw new Error('Appointment not found')
      }
    } catch (error) {
      throw new Error(
        `Error while updating appointment status: ${error.message}`,
      )
    }
  },

  deleteAppointment: async (id) => {
    try {
      const [result] = await db.query('DELETE FROM appointment WHERE id = ?', [
        id,
      ])

      if (result.affectedRows === 0) {
        throw new Error('Appointment not found')
      }
    } catch (error) {
      throw new Error(`Error while deleting appointment: ${error.message}`)
    }
  },
}

export default AppointmentModel
