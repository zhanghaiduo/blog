const PostsModel = require('../models/PostsModel')
class Controller {
  static async list(cxt) {
    try {
      const reqData = JSON.parse(JSON.stringify(cxt.query))
      console.log('00000', reqData)
      const data = await PostsModel.list(reqData)
      cxt.body = data
    } catch (error) {
      console.log('error', error)
      cxt.body = error
    }
  }
}
module.exports = Controller
