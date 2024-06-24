import Community from '../models/CommunitiesModel.js'

// Get all communities
export const getAllCommunities = async (req, res) => {
  try {
    const communities = await Community.getAllCommunities()
    res.status(200).json(communities)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Get community by id
export const getCommunityById = async (req, res) => {
  const { id } = req.params
  try {
    const community = await Community.getCommunityById(id)
    if (!community) {
      return res.status(404).json({ msg: 'Community tidak ditemukan' })
    }
    res.status(200).json(community)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Create new community
export const createCommunity = async (req, res) => {
  const { title, members_count, slogan } = req.body
  const file = req.files && req.files.image
  try {
    const result = await Community.createCommunity(
      { title, members_count, slogan },
      file,
    )
    res.status(201).json({
      msg: 'Community berhasil dibuat',
      communityId: result.communityId,
    })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Update community
export const updateCommunity = async (req, res) => {
  const { id } = req.params
  const { title, members_count, slogan } = req.body
  const file = req.files && req.files.image
  try {
    await Community.updateCommunity(id, { title, members_count, slogan }, file)
    res.status(200).json({ msg: 'Community berhasil diupdate' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Delete community
export const deleteCommunity = async (req, res) => {
  const { id } = req.params
  try {
    await Community.deleteCommunity(id)
    res.status(200).json({ msg: 'Community berhasil dihapus' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}
