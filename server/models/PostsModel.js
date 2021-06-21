const { DataTypes } = require('sequelize')
// mysql数据库的db.js文件
const Sequelize = require('../config/db')
// 数据表模型文件
const model = require('../schema/posts')(Sequelize, DataTypes)
model.sync({ force: false })
class PostsModel {
  static async list(data = {}) {
    return await model.findAndCountAll({
      where: data
    })
  }
}
module.exports = PostsModel
