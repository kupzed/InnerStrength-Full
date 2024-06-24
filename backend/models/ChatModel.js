import pool from '../config/Database.js'

const ChatModel = {
  getAllChats: async () => {
    try {
      const [chats] = await pool.query('SELECT * FROM chat')
      return chats
    } catch (error) {
      throw new Error(`Error while fetching chats: ${error.message}`)
    }
  },

  getChatById: async (id) => {
    try {
      const [chat] = await pool.query('SELECT * FROM chat WHERE id = ?', [id])
      if (chat.length === 0) {
        throw new Error('Chat not found')
      }
      return chat[0]
    } catch (error) {
      throw new Error(`Error while fetching chat: ${error.message}`)
    }
  },

  getChatsByUserIdDoctorId: async (user_id, doctor_id) => {
    try {
      const [
        chats,
      ] = await pool.query(
        'SELECT * FROM chat WHERE user_id = ? AND doctor_id = ?',
        [user_id, doctor_id],
      )
      if (chats.length === 0) {
        throw new Error('No messages found for this user-doctor combination')
      }
      return chats
    } catch (error) {
      throw new Error(`Error while fetching chats: ${error.message}`)
    }
  },

  createChat: async (
    doctor_id,
    user_id,
    message,
    sender_doctor,
    sender_user,
  ) => {
    try {
      const [
        result,
      ] = await pool.query(
        'INSERT INTO chat (doctor_id, user_id, message, sender_doctor, sender_user) VALUES (?, ?, ?, ?, ?)',
        [doctor_id, user_id, message, sender_doctor, sender_user],
      )
      return result.insertId
    } catch (error) {
      throw new Error(`Error while creating chat: ${error.message}`)
    }
  },

  updateChat: async (id, doctor_id, user_id, message) => {
    try {
      const [
        result,
      ] = await pool.query(
        'UPDATE chat SET doctor_id = ?, user_id = ?, message = ? WHERE id = ?',
        [doctor_id, user_id, message, id],
      )
      if (result.affectedRows === 0) {
        throw new Error('Chat not found')
      }
    } catch (error) {
      throw new Error(`Error while updating chat: ${error.message}`)
    }
  },

  deleteChat: async (id) => {
    try {
      const [result] = await pool.query('DELETE FROM chat WHERE id = ?', [id])
      if (result.affectedRows === 0) {
        throw new Error('Chat not found')
      }
    } catch (error) {
      throw new Error(`Error while deleting chat: ${error.message}`)
    }
  },
}

export default ChatModel
