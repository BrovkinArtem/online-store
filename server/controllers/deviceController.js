import models from '../models/models.js'
import ApiError from "../error/ApiError.js";
import {request} from "express";
import sequelize from "../db.js";
import { v4 as uuidv4 } from 'uuid';
import path, {dirname} from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

class DeviceController {
  async create(req, res, next) {
    try {
      const {name, price, brandId, typeId, info} = req.body
      const {img} = req.files
      let fileName = uuidv4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
      const device = await models.Device.create({name, price, brandId, typeId, img: fileName})

      if (info) {
        const parsedInfo = JSON.parse(info)
        parsedInfo.forEach(i =>
          models.DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id
          })
        )
      }

      return res.json(device)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    let {brandId, typeId, limit, page} = req.query
    page = page || 1
    limit = limit || 9
    let offset = page * limit - limit
    let devices
    if (!brandId && !typeId) {
      devices = await models.Device.findAndCountAll({limit, offset})
    }
    if (brandId && !typeId) {
      devices = await models.Device.findAndCountAll({where:{brandId}, limit, offset})
    }
    if (!brandId && typeId) {
      devices = await models.Device.findAndCountAll({where:{typeId}, limit, offset})
    }
    if (brandId && typeId) {
      devices = await models.Device.findAndCountAll({where:{typeId, brandId}, limit, offset})
    }
    return res.json(devices)
  }

  async getOne(req, res) {
    const {id} = req.params
    const device = await models.Device.findOne(
      {
        where: {id},
        include: [{model: models.DeviceInfo, as : 'info'}]
      }
    )
    return res.json(device)
  }
}

export default new DeviceController()