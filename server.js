const express = require("express")
const app = express ()
const personRouter = require ('./router')
app.use('/', personRouter)
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})