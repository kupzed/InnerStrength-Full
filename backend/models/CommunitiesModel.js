// models/Community.js

import pool from '../config/Database.js'
import fs from 'fs'
import path from 'path'

const allowedFileTypes = ['.png', '.jpg', '.jpeg']
const maxFileSize = 5000000

class Community {
  async getAllCommunities() {
    try {
      const [communities] = await pool.query('SELECT * FROM community')
      return communities
    } catch (error) {
      throw error
    }
  }

  async getCommunityById(id) {
    try {
      const [
        community,
      ] = await pool.query('SELECT * FROM community WHERE id = ?', [id])
      return community[0] || null
    } catch (error) {
      throw error
    }
  }

  async createCommunity(data, file) {
    let fileName = ''
    try {
      if (file) {
        fileName = await this.uploadImageFile(file)
      }

      const url = `${process.env.BASE_URL}/images/${fileName}`
      const { title, members_count, slogan } = data
      const [
        result,
      ] = await pool.query(
        'INSERT INTO community (image, url, title, members_count, slogan) VALUES (?, ?, ?, ?, ?)',
        [fileName, url, title, members_count, slogan],
      )
      return { communityId: result.insertId }
    } catch (error) {
      if (fileName) {
        await this.deleteImageFile(fileName)
      }
      throw error
    }
  }

  async updateCommunity(id, data, file) {
    let fileName = ''
    try {
      const existingCommunity = await this.getCommunityById(id)
      if (!existingCommunity) {
        throw new Error('Community not found')
      }

      fileName = existingCommunity.image
      if (file) {
        fileName = await this.uploadImageFile(file)
        await this.deleteImageFile(existingCommunity.image)
      }

      const url = `${process.env.BASE_URL}/images/${fileName}`
      const { title, members_count, slogan } = data
      const [
        result,
      ] = await pool.query(
        'UPDATE community SET image = ?, url = ?, title = ?, members_count = ?, slogan = ? WHERE id = ?',
        [fileName, url, title, members_count, slogan, id],
      )
      if (result.affectedRows === 0) {
        throw new Error('Community update failed')
      }
    } catch (error) {
      if (fileName && file) {
        await this.deleteImageFile(fileName)
      }
      throw error
    }
  }

  async deleteCommunity(id) {
    try {
      const community = await this.getCommunityById(id)
      if (!community) {
        throw new Error('Community not found')
      }

      await this.deleteImageFile(community.image)

      const [result] = await pool.query('DELETE FROM community WHERE id = ?', [
        id,
      ])
      if (result.affectedRows === 0) {
        throw new Error('Community delete failed')
      }
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

export default new Community()
