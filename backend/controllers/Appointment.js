import AppointmentModel from '../models/Appointments.js'

// Get all appointments for a user
export const getAllAppointments = async (req, res) => {
  const { user_id } = req.params
  try {
    const appointments = await AppointmentModel.getAllappointmentForUser(
      user_id,
    )
    res.status(200).json(appointments)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Get all appointments for a doctor
export const getAllAppointmentsdoctor = async (req, res) => {
  const { doctor_id } = req.params
  try {
    const appointments = await AppointmentModel.getAllappointmentForDoctor(
      doctor_id,
    )
    res.status(200).json(appointments)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Get appointment by id
export const getAppointmentById = async (req, res) => {
  try {
    const appointment = await AppointmentModel.getAppointmentById(req.params.id)
    res.status(200).json(appointment)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Create new appointment
export const createAppointment = async (req, res) => {
  const appointmentData = req.body
  try {
    const insertedId = await AppointmentModel.createAppointment(appointmentData)
    res.status(201).json({ msg: 'Appointment berhasil dibuat', id: insertedId })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Update appointment
export const updateAppointment = async (req, res) => {
  const { id } = req.params
  const appointmentData = req.body
  try {
    await AppointmentModel.updateAppointment(id, appointmentData)
    res.status(200).json({ msg: 'Appointment berhasil diupdate' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Update appointment type
export const updateTypeAppointment = async (req, res) => {
  const { type } = req.body
  const { id } = req.params
  try {
    await AppointmentModel.updateAppointmentType(id, type)
    res.status(200).json({ msg: 'Appointment type berhasil diupdate' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Update appointment status
export const updateStatusAppointment = async (req, res) => {
  const { status } = req.body
  const { id } = req.params
  try {
    await AppointmentModel.updateAppointmentStatus(id, status)
    res.status(200).json({ msg: 'Appointment status berhasil diupdate' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Delete appointment
export const deleteAppointment = async (req, res) => {
  const { id } = req.params
  try {
    await AppointmentModel.deleteAppointment(id)
    res.status(200).json({ msg: 'Appointment berhasil dihapus' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}
