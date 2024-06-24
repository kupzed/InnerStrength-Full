import {
  getAllReviewss,
  getReviewByIds,
  getReviewsByDoctorIds,
  getReviewsByUserIds,
  getReviewsByUserIdDoctorIds,
  createReviews,
  updateReviews,
  deleteReviews,
} from '../models/Reviews.js'

// Get all reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await getAllReviewss()
    res.status(200).json(reviews)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Get review by id
export const getReviewById = async (req, res) => {
  const { id } = req.params
  try {
    const review = await getReviewByIds(id)
    if (!review) {
      return res.status(404).json({ msg: 'Review tidak ditemukan' })
    }
    res.status(200).json(review)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Get reviews by doctor_id
export const getReviewsByDoctorId = async (req, res) => {
  const { doctor_id } = req.params
  try {
    const reviews = await getReviewsByDoctorIds(doctor_id)
    if (reviews.length === 0) {
      return res.status(404).json({ msg: 'Tidak ada review untuk dokter ini' })
    }
    res.status(200).json(reviews)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Get reviews by user_id
export const getReviewsByUserId = async (req, res) => {
  const { user_id } = req.params
  try {
    const reviews = await getReviewsByUserIds(user_id)
    if (reviews.length === 0) {
      return res.status(404).json({ msg: 'Tidak ada review dari pengguna ini' })
    }
    res.status(200).json(reviews)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Get reviews by user_id and doctor_id
export const getReviewsByUserIdDoctorId = async (req, res) => {
  const { user_id, doctor_id } = req.params
  try {
    const reviews = await getReviewsByUserIdDoctorIds(user_id, doctor_id)
    if (reviews.length === 0) {
      return res.status(404).json({
        msg: 'Tidak ada review untuk kombinasi pengguna dan dokter ini',
      })
    }
    res.status(200).json(reviews)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Create new review
export const createReview = async (req, res) => {
  const { user_id, doctor_id, rating, review_text } = req.body
  try {
    const reviewId = await createReviews(
      user_id,
      doctor_id,
      rating,
      review_text,
    )
    res.status(201).json({ msg: 'Review berhasil dibuat', reviewId })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Update review
export const updateReview = async (req, res) => {
  const { user_id, doctor_id, rating, review_text } = req.body
  const { id } = req.params
  try {
    const affectedRows = await updateReviews(
      id,
      user_id,
      doctor_id,
      rating,
      review_text,
    )
    if (affectedRows === 0) {
      return res.status(404).json({ msg: 'Review tidak ditemukan' })
    }
    res.status(200).json({
      msg: 'Review berhasil diupdate',
      review: { id, user_id, doctor_id, rating, review_text },
    })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Delete review
export const deleteReview = async (req, res) => {
  const { id } = req.params
  try {
    const affectedRows = await deleteReviews(id)
    if (affectedRows === 0) {
      return res.status(404).json({ msg: 'Review tidak ditemukan' })
    }
    res.status(200).json({ msg: 'Review berhasil dihapus' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}
