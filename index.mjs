import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
app.use((req, res) => {
    console.log(req.body)
    res.json({ done: true })
})
app.listen(9000, () => {
    console.log("Server running on port 9000")
}) 