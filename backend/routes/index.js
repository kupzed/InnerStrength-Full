import express from 'express'
import {
  getAllAnxieties,
  getAnxietyById,
  createAnxiety,
  updateAnxiety,
  deleteAnxiety,
} from '../controllers/Anxiety.js'
import {
  createBipolar,
  deleteBipolar,
  getAllBipolars,
  getBipolarById,
  updateBipolar,
} from '../controllers/Bipolar.js'
import {
  createDepression,
  deleteDepression,
  getAllDepressions,
  getDepressionById,
  updateDepression,
} from '../controllers/Depression.js'
import {
  createCommunity,
  deleteCommunity,
  getAllCommunities,
  getCommunityById,
  updateCommunity,
} from '../controllers/Community.js'
import {
  createCommunityData,
  deleteCommunityData,
  getAllCommunityData,
  getCommunityDataByCommunityId,
  getCommunityDataById,
  updateCommunityData,
} from '../controllers/CommunityData.js'
import {
  createSavedPost,
  deleteSavedPost,
  getAllSavedPosts,
  getAllSavedPostsByusers,
  getSavedPostById,
  updateSavedPost,
} from '../controllers/SavePost.js'
import {
  createChatSenderDoctor,
  createChatSenderUser,
  deleteChat,
  getAllChats,
  getChatById,
  getChatsByUserIdDoctorId,
  updateChat,
} from '../controllers/Chat.js'
import {
  createAppointment,
  deleteAppointment,
  getAllAppointments,
  getAllAppointmentsdoctor,
  getAppointmentById,
  updateAppointment,
  updateStatusAppointment,
} from '../controllers/Appointment.js'
import {
  createReview,
  deleteReview,
  getAllReviews,
  getReviewById,
  getReviewsByDoctorId,
  getReviewsByUserId,
  getReviewsByUserIdDoctorId,
  updateReview,
} from '../controllers/Review.js'
import {
  LoginDoctor,
  RegisterDoctor,
  createDoctor,
  deleteDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
} from '../controllers/Doctor.js'
import {
  Login,
  Me,
  Register,
  getUSerById,
  getUsers,
  nePassword,
  updateUsers,
} from '../controllers/Users.js'
import {
  createJadwal,
  deleteJadwal,
  getAllJadwals,
  getJadwalById,
} from '../controllers/Jadwal.js'

const router = express.Router()

// done
router.get('/anxieties', getAllAnxieties)
router.get('/anxieties/:id', getAnxietyById)
router.post('/anxieties', createAnxiety)
router.put('/anxieties/:id', updateAnxiety)
router.delete('/anxieties/:id', deleteAnxiety)

// done
router.get('/bipolars', getAllBipolars)
router.get('/bipolars/:id', getBipolarById)
router.post('/bipolars', createBipolar)
router.put('/bipolars/:id', updateBipolar)
router.delete('/bipolars/:id', deleteBipolar)

// done
router.get('/depressions', getAllDepressions)
router.get('/depressions/:id', getDepressionById)
router.post('/depressions', createDepression)
router.put('/depressions/:id', updateDepression)
router.delete('/depressions/:id', deleteDepression)

// done
router.get('/communities', getAllCommunities)
router.get('/communities/:id', getCommunityById)
router.post('/communities', createCommunity)
router.put('/communities/:id', updateCommunity)
router.delete('/communities/:id', deleteCommunity)

// done
router.get('/communitydataall/:id', getAllCommunityData)
router.get('/communitydata/:id', getCommunityDataById)
router.post('/communitydata', createCommunityData)
router.put('/communitydata/:id', updateCommunityData)
router.delete('/communitydata/:id', deleteCommunityData)

router.get(
  '/communitydata/community/:community_id',
  getCommunityDataByCommunityId,
)

// done
router.get('/savedposts', getAllSavedPosts)
router.get('/savedpostsall/:user_id', getAllSavedPostsByusers)
router.get('/savedposts/:id', getSavedPostById)
router.post('/savedposts', createSavedPost)
router.put('/savedposts/:id', updateSavedPost)
router.delete('/savedposts/:user_id/:community_data_id', deleteSavedPost)

router.get('/chats', getAllChats)
router.get('/chats/:id', getChatById)
router.post('/chatsUsers', createChatSenderUser)
router.post('/chatsDoctor', createChatSenderDoctor)
router.put('/chats/:id', updateChat)
router.delete('/chats/:id', deleteChat)
router.get('/chats/:doctor_id/:user_id', getChatsByUserIdDoctorId)

// done
router.get('/appointmentsalls/:user_id', getAllAppointments)
router.get('/appointmentsallsdoctor/:doctor_id', getAllAppointmentsdoctor)
router.get('/appointments/:id', getAppointmentById)
router.post('/appointments', createAppointment)
router.put('/appointments/:id', updateAppointment)
router.put('/appointmentsstatus/:id', updateStatusAppointment)
router.delete('/appointments/:id', deleteAppointment)

// done
router.get('/reviews', getAllReviews)
router.get('/reviews/:id', getReviewById)
router.get('/reviewsdokter/:doctor_id', getReviewsByDoctorId)
router.get('/reviewsusers/:user_id', getReviewsByUserId)
router.get('/reviews/:doctor_id/:user_id', getReviewsByUserIdDoctorId)
router.post('/reviews', createReview)
router.put('/reviews/:id', updateReview)
router.delete('/reviews/:id', deleteReview)

// done
router.get('/doctors', getAllDoctors)
router.get('/doctors/:id', getDoctorById)
router.post('/doctors', createDoctor)
router.post('/doctorsregis', RegisterDoctor)
router.put('/doctors/:id', updateDoctor)
router.delete('/doctors/:id', deleteDoctor)

// done
router.get('/users', getUsers)
router.get('/users/:id', getUSerById)
router.post('/users', Register)
router.put('/users/:id', updateUsers)
// router.delete('/users/:id', deleteUser)

router.post('/login', Login)
router.post('/logindoctor', LoginDoctor)
router.get('/me', Me) // done
router.put('/newpassword/:id', nePassword)

router.get('/jadwal/:doctor_id', getAllJadwals)
// router.get('/jadwal/:id', getJadwalById)
router.post('/jadwal', createJadwal)
router.delete('/jadwal/:id', deleteJadwal)

export default router
