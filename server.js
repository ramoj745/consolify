import express from "express"
import bodyParser from "body-parser"
import axios from "axios"

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended : true }))

app.get("/", (req,res) => {
    res.render("landingPage.ejs")
})

app.post("/generate", async (req, res) => {
    const username = req.body.username
    const url = `https://api.github.com/users/${username}`;

    try {
        const response = await axios.get(url)
        const data = response.data
        res.render("generatedTerminal", {data : data})
    } catch (error) {
        res.render("generatedTerminal", 
            {data : null, 
             errorMessage : error.response.data.message, 
             errorStatus : error.response.status})
    }
})

app.listen(port, () => {
    console.log("Listening on port " + port)
})