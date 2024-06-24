import db from '../config/Database.js'

const BipolarModel = {
  getAllBipolars: async () => {
    try {
      const [bipolars] = await db.query('SELECT * FROM bipolars')
      return bipolars
    } catch (error) {
      throw new Error(`Error while fetching bipolars: ${error.message}`)
    }
  },

  getBipolarById: async (id) => {
    try {
      const [bipolars] = await db.query('SELECT * FROM bipolars WHERE id = ?', [
        id,
      ])
      if (bipolars.length === 0) {
        throw new Error('Bipolar not found')
      }
      return bipolars[0]
    } catch (error) {
      throw new Error(`Error while fetching bipolar: ${error.message}`)
    }
  },

  createBipolar: async (bipolarData) => {
    const {
      video_url,
      title,
      description,
      symptoms,
      manic_episode,
      treatment_options,
    } = bipolarData
    try {
      const [
        result,
      ] = await db.query(
        'INSERT INTO bipolars (video_url, title, description, symptoms, manic_episode, treatment_options) VALUES (?, ?, ?, ?, ?, ?)',
        [
          video_url,
          title,
          description,
          symptoms,
          manic_episode,
          treatment_options,
        ],
      )
      return result.insertId
    } catch (error) {
      throw new Error(`Error while creating bipolar: ${error.message}`)
    }
  },

  updateBipolar: async (id, bipolarData) => {
    const {
      video_url,
      title,
      description,
      symptoms,
      manic_episode,
      treatment_options,
    } = bipolarData
    try {
      const [
        result,
      ] = await db.query(
        'UPDATE bipolars SET video_url = ?, title = ?, description = ?, symptoms = ?, manic_episode = ?, treatment_options = ? WHERE id = ?',
        [
          video_url,
          title,
          description,
          symptoms,
          manic_episode,
          treatment_options,
          id,
        ],
      )

      if (result.affectedRows === 0) {
        throw new Error('Bipolar not found')
      }
    } catch (error) {
      throw new Error(`Error while updating bipolar: ${error.message}`)
    }
  },

  deleteBipolar: async (id) => {
    try {
      const [result] = await db.query('DELETE FROM bipolars WHERE id = ?', [id])

      if (result.affectedRows === 0) {
        throw new Error('Bipolar not found')
      }
    } catch (error) {
      throw new Error(`Error while deleting bipolar: ${error.message}`)
    }
  },
}

export default BipolarModel
