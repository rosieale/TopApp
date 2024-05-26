const express = require("express")
const app = express()
const petRoutes = require("./petRoutes")

app.use("/pets", petRoutes)

module.exports = app