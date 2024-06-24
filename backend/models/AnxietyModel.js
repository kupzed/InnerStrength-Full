import db from '../config/Database.js'

const AnxietyModel = {
  getAllAnxieties: async () => {
    try {
      const [rows] = await db.query('SELECT * FROM anxiety')
      return rows
    } catch (error) {
      throw new Error(`Error while fetching anxieties: ${error.message}`)
    }
  },

  getAnxietyById: async (id) => {
    try {
      const [rows] = await db.query('SELECT * FROM anxiety WHERE id = ?', [id])
      if (rows.length === 0) {
        throw new Error('Anxiety not found')
      }
      return rows[0]
    } catch (error) {
      throw new Error(`Error while fetching anxiety: ${error.message}`)
    }
  },

  createAnxiety: async (anxietyData) => {
    const {
      video_url,
      title,
      description,
      causes,
      symptoms,
      impact,
      treatment,
      awareness,
      conclusion,
    } = anxietyData

    try {
      const [
        result,
      ] = await db.query(
        'INSERT INTO anxiety (video_url, title, description, causes, symptoms, impact, treatment, awareness, conclusion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          video_url,
          title,
          description,
          causes,
          symptoms,
          impact,
          treatment,
          awareness,
          conclusion,
        ],
      )
      return result.insertId
    } catch (error) {
      throw new Error(`Error while creating anxiety: ${error.message}`)
    }
  },

  updateAnxiety: async (id, anxietyData) => {
    const {
      video_url,
      title,
      description,
      causes,
      symptoms,
      impact,
      treatment,
      awareness,
      conclusion,
    } = anxietyData

    try {
      const [
        result,
      ] = await db.query(
        'UPDATE anxiety SET video_url = ?, title = ?, description = ?, causes = ?, symptoms = ?, impact = ?, treatment = ?, awareness = ?, conclusion = ? WHERE id = ?',
        [
          video_url,
          title,
          description,
          causes,
          symptoms,
          impact,
          treatment,
          awareness,
          conclusion,
          id,
        ],
      )

      if (result.affectedRows === 0) {
        throw new Error('Anxiety not found')
      }
    } catch (error) {
      throw new Error(`Error while updating anxiety: ${error.message}`)
    }
  },

  deleteAnxiety: async (id) => {
    try {
      const [result] = await db.query('DELETE FROM anxiety WHERE id = ?', [id])

      if (result.affectedRows === 0) {
        throw new Error('Anxiety not found')
      }
    } catch (error) {
      throw new Error(`Error while deleting anxiety: ${error.message}`)
    }
  },
}

export default AnxietyModel
