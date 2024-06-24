import BipolarModel from '../models/BipolarModel.js'

// Get all bipolars
export const getAllBipolars = async (req, res) => {
  try {
    const bipolars = await BipolarModel.getAllBipolars()
    res.status(200).json(bipolars)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Get bipolar by id
export const getBipolarById = async (req, res) => {
  const { id } = req.params
  try {
    const bipolar = await BipolarModel.getBipolarById(id)
    res.status(200).json(bipolar)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Create new bipolar
export const createBipolar = async (req, res) => {
  const bipolarData = req.body
  try {
    const insertedId = await BipolarModel.createBipolar(bipolarData)
    res.status(201).json({ msg: 'Bipolar berhasil dibuat', id: insertedId })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Update bipolar
export const updateBipolar = async (req, res) => {
  const { id } = req.params
  const bipolarData = req.body
  try {
    await BipolarModel.updateBipolar(id, bipolarData)
    res.status(200).json({ msg: 'Bipolar berhasil diupdate' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Delete bipolar
export const deleteBipolar = async (req, res) => {
  const { id } = req.params
  try {
    await BipolarModel.deleteBipolar(id)
    res.status(200).json({ msg: 'Bipolar berhasil dihapus' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}
