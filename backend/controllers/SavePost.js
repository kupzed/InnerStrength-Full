import {
  getAllSavedPostss,
  getSavedPostByIds,
  getSavedPostsByUserIds,
  createSavedPosts,
  updateSavedPosts,
  deleteSavedPosts,
} from '../models/SavedPost.js'

// Get all saved posts
export const getAllSavedPosts = async (req, res) => {
  try {
    const savedPosts = await getAllSavedPostss()
    res.status(200).json(savedPosts)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Get saved post by id
export const getSavedPostById = async (req, res) => {
  const { id } = req.params
  try {
    const savedPost = await getSavedPostByIds(id)
    if (!savedPost) {
      return res.status(404).json({ msg: 'Saved post tidak ditemukan' })
    }
    res.status(200).json(savedPost)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Get saved posts by user_id
export const getAllSavedPostsByusers = async (req, res) => {
  const { user_id } = req.params
  try {
    const savedPosts = await getSavedPostsByUserIds(user_id)
    if (savedPosts.length === 0) {
      return res
        .status(404)
        .json({ msg: 'Tidak ada saved post untuk pengguna ini' })
    }
    res.status(200).json(savedPosts)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Create new saved post
export const createSavedPost = async (req, res) => {
  const { user_id, community_data_id } = req.body
  try {
    const savedPostId = await createSavedPosts(user_id, community_data_id)
    res.status(201).json({ msg: 'Saved post berhasil dibuat', savedPostId })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Update saved post
export const updateSavedPost = async (req, res) => {
  const { user_id, community_data_id } = req.body
  const { id } = req.params
  try {
    const affectedRows = await updateSavedPosts(id, user_id, community_data_id)
    if (affectedRows === 0) {
      return res.status(404).json({ msg: 'Saved post tidak ditemukan' })
    }
    res.status(200).json({
      msg: 'Saved post berhasil diupdate',
      savedPost: { id, user_id, community_data_id },
    })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Delete saved post
export const deleteSavedPost = async (req, res) => {
  const { id } = req.params
  try {
    const affectedRows = await deleteSavedPosts(id)
    if (affectedRows === 0) {
      return res.status(404).json({ msg: 'Saved post tidak ditemukan' })
    }
    res.status(200).json({ msg: 'Saved post berhasil dihapus' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}
