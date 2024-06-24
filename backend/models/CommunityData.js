import pool from '../config/Database.js'
import fs from 'fs'
import path from 'path'

const allowedFileTypes = ['.png', '.jpg', '.jpeg']
const maxFileSize = 5000000

class CommunityData {
  async getAllCommunityData() {
    try {
      const [communityData] = await pool.query('SELECT * FROM community_data')
      return communityData
    } catch (error) {
      throw error
    }
  }

  async getCommunityDataByCommunityId(community_id) {
    try {
      const [
        communityData,
      ] = await pool.query(
        'SELECT * FROM community_data WHERE community_id = ?',
        [community_id],
      )
      return communityData
    } catch (error) {
      throw error
    }
  }

  async getCommunityDataById(id) {
    try {
      const [
        communityData,
      ] = await pool.query('SELECT * FROM community_data WHERE id = ?', [id])
      return communityData[0] || null
    } catch (error) {
      throw error
    }
  }

  async createCommunityData(data, file) {
    let fileName = ''

    try {
      if (file) {
        fileName = await this.uploadImageFile(file)
      }

      const { community_id, title, description } = data
      const url = `http://localhost:3001/images/${fileName}`
      const [
        result,
      ] = await pool.query(
        'INSERT INTO community_data (community_id, title, image, url, description, likes_count) VALUES (?, ?, ?, ?, ?, 0)',
        [community_id, title, fileName, url, description],
      )
      return { communityDataId: result.insertId }
    } catch (error) {
      if (fileName) {
        await this.deleteImageFile(fileName)
      }
      throw error
    }
  }

  async updateCommunityData(id, data, file) {
    let fileName = ''

    try {
      const existingCommunityData = await this.getCommunityDataById(id)
      if (!existingCommunityData) {
        throw new Error('Community data not found')
      }

      fileName = existingCommunityData.image

      if (file) {
        fileName = await this.uploadImageFile(file)
        await this.deleteImageFile(existingCommunityData.image)
      }

      const { community_id, title, description, likes_count } = data
      const url = `${process.env.BASE_URL}/images/${fileName}`

      await pool.query(
        'UPDATE community_data SET community_id = ?, title = ?, image = ?, url = ?, description = ?, likes_count = ? WHERE id = ?',
        [community_id, title, fileName, url, description, likes_count, id],
      )
    } catch (error) {
      if (fileName && file) {
        await this.deleteImageFile(fileName)
      }
      throw error
    }
  }

  async deleteCommunityData(id) {
    try {
      const communityData = await this.getCommunityDataById(id)
      if (!communityData) {
        throw new Error('Community data not found')
      }

      await this.deleteImageFile(communityData.image)

      await pool.query('DELETE FROM community_data WHERE id = ?', [id])
    } catch (error) {
      throw error
    }
  }

  async uploadImageFile(file) {
    const ext = path.extname(file.name)
    const fileName = file.md5 + ext
    const filePath = `./public/images/${fileName}`

    if (!allowedFileTypes.includes(ext.toLowerCase())) {
      throw new Error('Invalid image type')
    }

    if (file.size > maxFileSize) {
      throw new Error('Max image size is 5MB')
    }

    await file.mv(filePath)
    return fileName
  }

  async deleteImageFile(fileName) {
    const filePath = `./public/images/${fileName}`
    try {
      await fs.promises.unlink(filePath)
    } catch (error) {
      console.error(`Error deleting image file: ${error.message}`)
      throw error
    }
  }
}

export default new CommunityData()
