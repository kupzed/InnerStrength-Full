import pool from '../config/Database.js'

class Depression {
  static async findAll() {
    try {
      const [depressions] = await pool.query('SELECT * FROM depression')
      return depressions
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async findOne(id) {
    try {
      const [
        depression,
      ] = await pool.query('SELECT * FROM depression WHERE id = ?', [id])
      if (depression.length === 0) {
        return null
      }
      return depression[0]
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async create(data) {
    const {
      video_url,
      title,
      description,
      signs,
      causes,
      impact,
      treatment,
      support,
      conclusion,
    } = data

    try {
      const [
        result,
      ] = await pool.query(
        'INSERT INTO depression (video_url, title, description, signs, causes, impact, treatment, support, conclusion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          video_url,
          title,
          description,
          signs,
          causes,
          impact,
          treatment,
          support,
          conclusion,
        ],
      )
      return result.insertId
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async update(id, data) {
    const {
      video_url,
      title,
      description,
      signs,
      causes,
      impact,
      treatment,
      support,
      conclusion,
    } = data

    try {
      const [
        depression,
      ] = await pool.query('SELECT * FROM depression WHERE id = ?', [id])
      if (depression.length === 0) {
        return false // Not found
      }

      await pool.query(
        'UPDATE depression SET video_url = ?, title = ?, description = ?, signs = ?, causes = ?, impact = ?, treatment = ?, support = ?, conclusion = ? WHERE id = ?',
        [
          video_url,
          title,
          description,
          signs,
          causes,
          impact,
          treatment,
          support,
          conclusion,
          id,
        ],
      )
      return true
    } catch (error) {
      throw new Error(error.message)
    }
  }

  static async delete(id) {
    try {
      const [
        depression,
      ] = await pool.query('SELECT * FROM depression WHERE id = ?', [id])
      if (depression.length === 0) {
        return false // Not found
      }

      await pool.query('DELETE FROM depression WHERE id = ?', [id])
      return true
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default Depression
