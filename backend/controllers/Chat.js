import pool from '../config/Database.js'

// Get all chats
export const getAllChats = async (req, res) => {
  try {
    const [chats] = await pool.query('SELECT * FROM chat')
    res.status(200).json(chats)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Get chat by id
export const getChatById = async (req, res) => {
  try {
    const [chat] = await pool.query('SELECT * FROM chat WHERE id = ?', [
      req.params.id,
    ])
    if (chat.length === 0) {
      return res.status(404).json({ msg: 'Chat tidak ditemukan' })
    }
    res.status(200).json(chat[0])
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export const getChatsByUserIdDoctorId = async (req, res) => {
  try {
    const [
      chats,
    ] = await pool.query(
      'SELECT * FROM chat WHERE user_id = ? AND doctor_id = ?',
      [req.params.user_id, req.params.doctor_id],
    )
    if (chats.length === 0) {
      return res
        .status(404)
        .json({
          msg: 'Tidak ada pesan untuk kombinasi pengguna dan dokter ini',
        })
    }
    res.status(200).json(chats)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Create new chat
export const createChatSenderDoctor = async (req, res) => {
  const { doctor_id, user_id, message } = req.body
  try {
    const [
      result,
    ] = await pool.query(
      'INSERT INTO chat (doctor_id, user_id, message, sender_doctor, sender_user) VALUES (?, ?, ?, true, false)',
      [doctor_id, user_id, message],
    )
    res
      .status(201)
      .json({ msg: 'Chat berhasil dibuat', chatId: result.insertId })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

export const createChatSenderUser = async (req, res) => {
  const { doctor_id, user_id, message } = req.body
  try {
    const [
      result,
    ] = await pool.query(
      'INSERT INTO chat (doctor_id, user_id, message, sender_user, sender_doctor) VALUES (?, ?, ?, true, false)',
      [doctor_id, user_id, message],
    )
    res
      .status(201)
      .json({ msg: 'Chat berhasil dibuat', chatId: result.insertId })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Update chat
export const updateChat = async (req, res) => {
  const { doctor_id, user_id, message } = req.body
  try {
    const [
      result,
    ] = await pool.query(
      'UPDATE chat SET doctor_id = ?, user_id = ?, message = ? WHERE id = ?',
      [doctor_id, user_id, message, req.params.id],
    )
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: 'Chat tidak ditemukan' })
    }
    res.status(200).json({ msg: 'Chat berhasil diupdate' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

// Delete chat
export const deleteChat = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM chat WHERE id = ?', [
      req.params.id,
    ])
    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: 'Chat tidak ditemukan' })
    }
    res.status(200).json({ msg: 'Chat berhasil dihapus' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}
