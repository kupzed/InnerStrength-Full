import Depression from '../models/DepressionModel.js'

// Get all depressions
export const getAllDepressions = async (req, res) => {
  try {
    const depressions = await Depression.findAll()
    res.status(200).json(depressions)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Get depression by id
export const getDepressionById = async (req, res) => {
  try {
    const depression = await Depression.findOne(req.params.id)
    if (!depression) {
      return res.status(404).json({ msg: 'Depression tidak ditemukan' })
    }
    res.status(200).json(depression)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Create new depression
export const createDepression = async (req, res) => {
  const {
    video_url,
    title,
    description,
    signs,
    causes,
    impact,
    treatment,
    support,
    conclusion,
  } = req.body

  try {
    const depressionId = await Depression.create({
      video_url,
      title,
      description,
      signs,
      causes,
      impact,
      treatment,
      support,
      conclusion,
    })
    res.status(201).json({ msg: 'Depression berhasil dibuat', depressionId })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Update depression
export const updateDepression = async (req, res) => {
  const {
    video_url,
    title,
    description,
    signs,
    causes,
    impact,
    treatment,
    support,
    conclusion,
  } = req.body

  try {
    const success = await Depression.update(req.params.id, {
      video_url,
      title,
      description,
      signs,
      causes,
      impact,
      treatment,
      support,
      conclusion,
    })
    if (!success) {
      return res.status(404).json({ msg: 'Depression tidak ditemukan' })
    }
    res.status(200).json({ msg: 'Depression berhasil diupdate' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Delete depression
export const deleteDepression = async (req, res) => {
  try {
    const success = await Depression.delete(req.params.id)
    if (!success) {
      return res.status(404).json({ msg: 'Depression tidak ditemukan' })
    }
    res.status(200).json({ msg: 'Depression berhasil dihapus' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}
