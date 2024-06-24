// models/SavedPostModel.js

import pool from '../config/Database.js' // Assuming you have configured your MySQL connection in Database.js

const createSavedPostTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS saved_post (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        community_data_id INT,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (community_data_id) REFERENCES community_data(id)
      )
    `)
    console.log('SavedPost table created or already exists')
  } catch (error) {
    console.error('Error creating SavedPost table:', error.message)
  }
}

createSavedPostTable()

const getAllSavedPostss = async () => {
  try {
    const [savedPosts] = await pool.query('SELECT * FROM saved_post')
    return savedPosts
  } catch (error) {
    throw error
  }
}

const getSavedPostByIds = async (postId) => {
  try {
    const [
      savedPost,
    ] = await pool.query('SELECT * FROM saved_post WHERE id = ?', [postId])
    return savedPost[0]
  } catch (error) {
    throw error
  }
}

const getSavedPostsByUserIds = async (userId) => {
  try {
    const [savedPosts] = await pool.query(
      `
      SELECT sp.*, u.username, c.*
      FROM saved_post sp
      JOIN users u ON sp.user_id = u.id
      JOIN community_data c ON sp.community_data_id = c.id
      WHERE sp.user_id = ?
    `,
      [userId],
    )

    return savedPosts
  } catch (error) {
    throw error
  }
}

const createSavedPosts = async (userId, communityDataId) => {
  try {
    const [
      result,
    ] = await pool.query(
      'INSERT INTO saved_post (user_id, community_data_id) VALUES (?, ?)',
      [userId, communityDataId],
    )
    return result.insertId
  } catch (error) {
    throw error
  }
}

const updateSavedPosts = async (postId, userId, communityDataId) => {
  try {
    const [
      result,
    ] = await pool.query(
      'UPDATE saved_post SET user_id = ?, community_data_id = ? WHERE id = ?',
      [userId, communityDataId, postId],
    )
    return result.affectedRows
  } catch (error) {
    throw error
  }
}

const deleteSavedPosts = async (postId) => {
  try {
    const [result] = await pool.query('DELETE FROM saved_post WHERE id = ?', [
      postId,
    ])
    return result.affectedRows
  } catch (error) {
    throw error
  }
}

export {
  getAllSavedPostss,
  getSavedPostByIds,
  getSavedPostsByUserIds,
  createSavedPosts,
  updateSavedPosts,
  deleteSavedPosts,
}
