// controllers/CommunityDataController.js

import CommunityData from '../models/CommunityData.js'

// Get all community data
export const getAllCommunityData = async (req, res) => {
  try {
    const communityData = await CommunityData.getAllCommunityData()
    res.status(200).json(communityData)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Get community data by community id
export const getCommunityDataByCommunityId = async (req, res) => {
  const { community_id } = req.params
  try {
    const communityData = await CommunityData.getCommunityDataByCommunityId(
      community_id,
    )
    if (communityData.length === 0) {
      return res
        .status(404)
        .json({ msg: 'No community data found for this community ID' })
    }
    res.status(200).json(communityData)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Get community data by id
export const getCommunityDataById = async (req, res) => {
  try {
    const communityData = await CommunityData.getCommunityDataById(
      req.params.id,
    )
    if (!communityData) {
      return res.status(404).json({ msg: 'Community data tidak ditemukan' })
    }
    res.status(200).json(communityData)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Create new community data
export const createCommunityData = async (req, res) => {
  const { community_id, title, description } = req.body
  const file = req.files && req.files.image
  try {
    const result = await CommunityData.createCommunityData(
      { community_id, title, description },
      file,
    )
    res
      .status(201)
      .json({
        msg: 'Community data berhasil dibuat',
        communityDataId: result.communityDataId,
      })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Update community data
export const updateCommunityData = async (req, res) => {
  const { community_id, title, description, likes_count } = req.body
  const file = req.files && req.files.image
  try {
    await CommunityData.updateCommunityData(
      req.params.id,
      { community_id, title, description, likes_count },
      file,
    )
    res.status(200).json({ msg: 'Community data berhasil diupdate' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Delete community data
export const deleteCommunityData = async (req, res) => {
  try {
    await CommunityData.deleteCommunityData(req.params.id)
    res.status(200).json({ msg: 'Community data berhasil dihapus' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}
