import pool from '../config/Database.js' // Assuming you have configured your MySQL connection in Database.js

const createUserTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) UNIQUE,
        full_name VARCHAR(100),
        gender VARCHAR(100),
        birth_place VARCHAR(100),
        birth_date DATE,
        email VARCHAR(100) UNIQUE,
        phone_number VARCHAR(15),
        role VARCHAR(100),
        password VARCHAR(255),
        community_id INT,
        doctor_id INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        refresh_token TEXT
      )
    `)
    console.log('User table created or already exists')
  } catch (error) {
    console.error('Error creating User table:', error.message)
  }
}

createUserTable()

const findAllUsers = async () => {
  try {
    const [users] = await pool.query(
      'SELECT id, username, full_name, gender, birth_place, birth_date, email, phone_number, role, community_id, doctor_id, created_at, updated_at FROM users',
    )
    return users
  } catch (error) {
    throw error
  }
}

const findUserById = async (userId) => {
  try {
    const [
      user,
    ] = await pool.query(
      'SELECT id, username, full_name, gender, birth_place, birth_date, email, phone_number, role, community_id, doctor_id, created_at, updated_at FROM users WHERE id = ?',
      [userId],
    )
    return user[0]
  } catch (error) {
    throw error
  }
}

const findUserByEmail = async (email) => {
  try {
    const [
      user,
    ] = await pool.query(
      'SELECT id, username, full_name, gender, birth_place, birth_date, email, phone_number, role, community_id, doctor_id, password, created_at, updated_at FROM users WHERE email = ?',
      [email],
    )
    return user[0]
  } catch (error) {
    throw error
  }
}

const createUser = async ({
  username,
  full_name,
  gender,
  birth_place,
  birth_date,
  email,
  phone_number,
  role,
  password,
  community_id,
  doctor_id,
}) => {
  try {
    const [
      result,
    ] = await pool.query(
      'INSERT INTO users (username, full_name, gender, birth_place, birth_date, email, phone_number, role, password, community_id, doctor_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        username,
        full_name,
        gender,
        birth_place,
        birth_date,
        email,
        phone_number,
        role,
        password,
        community_id,
        doctor_id,
      ],
    )
    return result.insertId
  } catch (error) {
    throw error
  }
}

const updateUser = async (
  userId,
  {
    username,
    full_name,
    gender,
    birth_place,
    birth_date,
    email,
    phone_number,
    role,
    community_id,
    doctor_id,
  },
) => {
  try {
    const [
      result,
    ] = await pool.query(
      'UPDATE users SET username = ?, full_name = ?, gender = ?, birth_place = ?, birth_date = ?, email = ?, phone_number = ?, role = ?, community_id = ?, doctor_id = ? WHERE id = ?',
      [
        username,
        full_name,
        gender,
        birth_place,
        birth_date,
        email,
        phone_number,
        role,
        community_id,
        doctor_id,
        userId,
      ],
    )
    return result.affectedRows
  } catch (error) {
    throw error
  }
}

const deleteUser = async (userId) => {
  try {
    const [result] = await pool.query('DELETE FROM users WHERE id = ?', [
      userId,
    ])
    return result.affectedRows
  } catch (error) {
    throw error
  }
}

export {
  findAllUsers,
  findUserById,
  findUserByEmail,
  createUser,
  updateUser,
  deleteUser,
}
