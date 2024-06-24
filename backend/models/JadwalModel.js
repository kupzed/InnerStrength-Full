import pool from '../config/Database.js'

const createJadwalTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS jadwal (
        id INT AUTO_INCREMENT PRIMARY KEY,
        tanggal DATE,
        sesi VARCHAR(100),
        waktu VARCHAR(100),
        doctor_id INT,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (doctor_id) REFERENCES doctor(id)
      )
    `)
    console.log('Jadwal table created or already exists')
  } catch (error) {
    console.error('Error creating jadwal table:', error.message)
  }
}

createJadwalTable()

const getAllJadwalss = async (doctorId) => {
  try {
    const [
      jadwals,
    ] = await pool.query('SELECT * FROM jadwal WHERE doctor_id = ?', [doctorId])
    return jadwals
  } catch (error) {
    throw error
  }
}

const getAllJadwalsByUserIds = async (userId) => {
  try {
    const [jadwals] = await pool.query(
      `
      SELECT j.*, d.name AS doctor_name
      FROM jadwal j
      INNER JOIN doctor d ON j.doctor_id = d.id
      WHERE j.user_id = ?
    `,
      [userId],
    )
    return jadwals
  } catch (error) {
    throw error
  }
}

const getJadwalByIds = async (jadwalId) => {
  try {
    const [jadwal] = await pool.query('SELECT * FROM jadwal WHERE id = ?', [
      jadwalId,
    ])
    return jadwal[0]
  } catch (error) {
    throw error
  }
}

const createJadwals = async (doctorId, tanggal, sesi, waktu) => {
  try {
    const [
      result,
    ] = await pool.query(
      'INSERT INTO jadwal (doctor_id, tanggal, sesi, waktu) VALUES (?, ?, ?, ?)',
      [doctorId, tanggal, sesi, waktu],
    )
    return result.insertId
  } catch (error) {
    throw error
  }
}

const deleteJadwals = async (jadwalId) => {
  try {
    const [result] = await pool.query('DELETE FROM jadwal WHERE id = ?', [
      jadwalId,
    ])
    return result.affectedRows
  } catch (error) {
    throw error
  }
}

export {
  getAllJadwalss,
  getAllJadwalsByUserIds,
  getJadwalByIds,
  createJadwals,
  deleteJadwals,
}
