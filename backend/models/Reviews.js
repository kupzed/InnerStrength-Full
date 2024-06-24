import pool from '../config/Database.js'

const createReviewTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS reviews (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        doctor_id INT,
        rating TINYINT,
        review_text TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (doctor_id) REFERENCES doctor(id)
      )
    `)
    console.log('Review table created or already exists')
  } catch (error) {
    console.error('Error creating review table:', error.message)
  }
}

createReviewTable()

const getAllReviewss = async () => {
  try {
    const [reviews] = await pool.query('SELECT * FROM reviews')
    return reviews
  } catch (error) {
    throw error
  }
}

const getReviewByIds = async (reviewId) => {
  try {
    const [review] = await pool.query('SELECT * FROM reviews WHERE id = ?', [
      reviewId,
    ])
    return review[0]
  } catch (error) {
    throw error
  }
}

const getReviewsByDoctorIds = async (doctorId) => {
  try {
    const [
      reviews,
    ] = await pool.query('SELECT * FROM reviews WHERE doctor_id = ?', [
      doctorId,
    ])
    return reviews
  } catch (error) {
    throw error
  }
}

const getReviewsByUserIds = async (userId) => {
  try {
    const [
      reviews,
    ] = await pool.query('SELECT * FROM reviews WHERE user_id = ?', [userId])
    return reviews
  } catch (error) {
    throw error
  }
}

const getReviewsByUserIdDoctorIds = async (userId, doctorId) => {
  try {
    const [
      reviews,
    ] = await pool.query(
      'SELECT * FROM reviews WHERE user_id = ? AND doctor_id = ?',
      [userId, doctorId],
    )
    return reviews
  } catch (error) {
    throw error
  }
}

const createReviews = async (userId, doctorId, rating, reviewText) => {
  try {
    const [
      result,
    ] = await pool.query(
      'INSERT INTO reviews (user_id, doctor_id, rating, review_text) VALUES (?, ?, ?, ?)',
      [userId, doctorId, rating, reviewText],
    )
    return result.insertId
  } catch (error) {
    throw error
  }
}

const updateReviews = async (
  reviewId,
  userId,
  doctorId,
  rating,
  reviewText,
) => {
  try {
    const [
      result,
    ] = await pool.query(
      'UPDATE reviews SET user_id = ?, doctor_id = ?, rating = ?, review_text = ? WHERE id = ?',
      [userId, doctorId, rating, reviewText, reviewId],
    )
    return result.affectedRows
  } catch (error) {
    throw error
  }
}

const deleteReviews = async (reviewId) => {
  try {
    const [result] = await pool.query('DELETE FROM reviews WHERE id = ?', [
      reviewId,
    ])
    return result.affectedRows
  } catch (error) {
    throw error
  }
}

export {
  getAllReviewss,
  getReviewByIds,
  getReviewsByDoctorIds,
  getReviewsByUserIds,
  getReviewsByUserIdDoctorIds,
  createReviews,
  updateReviews,
  deleteReviews,
}
