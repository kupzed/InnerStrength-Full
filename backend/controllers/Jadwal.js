import {
  getAllJadwalss,
  getAllJadwalsByUserIds,
  getJadwalByIds,
  createJadwals,
  deleteJadwals,
} from '../models/JadwalModel.js'

// Get all jadwals for a specific doctor
export const getAllJadwals = async (req, res) => {
  const { doctor_id } = req.params
  try {
    const jadwals = await getAllJadwalss(doctor_id)
    res.status(200).json(jadwals)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Get all jadwals for a specific user (with doctor details)
export const getAllJadwalsByUser = async (req, res) => {
  const { user_id } = req.params
  try {
    const jadwals = await getAllJadwalsByUserIds(user_id)
    res.status(200).json(jadwals)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Get jadwal by id
export const getJadwalById = async (req, res) => {
  const { id } = req.params
  try {
    const jadwal = await getJadwalByIds(id)
    if (!jadwal) {
      return res.status(404).json({ msg: 'Jadwal tidak ditemukan' })
    }
    res.status(200).json(jadwal)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Create new jadwal
export const createJadwal = async (req, res) => {
  const { doctor_id, tanggal, sesi, waktu } = req.body
  try {
    const jadwalId = await createJadwals(doctor_id, tanggal, sesi, waktu)
    res.status(201).json({ msg: 'Jadwal berhasil dibuat', jadwalId })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Delete jadwal
export const deleteJadwal = async (req, res) => {
  const { id } = req.params
  try {
    const affectedRows = await deleteJadwals(id)
    if (affectedRows === 0) {
      return res.status(404).json({ msg: 'Jadwal tidak ditemukan' })
    }
    res.status(200).json({ msg: 'Jadwal berhasil dihapus' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}
