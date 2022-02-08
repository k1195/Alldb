const express = require("express")
const {getProperty,getMin} = require("../controller/search.js")
const postProperty = require("../controller/post.js")

const routes = express.Router();

routes.route("/find").get(getProperty)
routes.route("/post").post(postProperty)
routes.route("/min").get(getMin)

module.exports = routes;