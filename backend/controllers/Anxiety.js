import AnxietyModel from '../models/AnxietyModel.js'

// Get all anxieties
export const getAllAnxieties = async (req, res) => {
  try {
    const anxieties = await AnxietyModel.getAllAnxieties()
    res.status(200).json(anxieties)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Get anxiety by id
export const getAnxietyById = async (req, res) => {
  const { id } = req.params
  try {
    const anxiety = await AnxietyModel.getAnxietyById(id)
    res.status(200).json(anxiety)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Create new anxiety
export const createAnxiety = async (req, res) => {
  const anxietyData = req.body
  try {
    const insertedId = await AnxietyModel.createAnxiety(anxietyData)
    res.status(201).json({ msg: 'Anxiety berhasil dibuat', id: insertedId })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Update anxiety
export const updateAnxiety = async (req, res) => {
  const { id } = req.params
  const anxietyData = req.body
  try {
    await AnxietyModel.updateAnxiety(id, anxietyData)
    res.status(200).json({ msg: 'Anxiety berhasil diupdate' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Delete anxiety
export const deleteAnxiety = async (req, res) => {
  const { id } = req.params
  try {
    await AnxietyModel.deleteAnxiety(id)
    res.status(200).json({ msg: 'Anxiety berhasil dihapus' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}
