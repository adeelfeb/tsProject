import express, {Request, Response, NextFunction} from "express"
import todoRoutes from "./routes/todo"
import bodyParser from "body-parser"

const app = express()
const PORT = 3000


app.use(bodyParser.json())
app.use("/todos", todoRoutes)

//middleware just like the above one for error handling
app.use((err: Error, request: Request, response: Response, next: NextFunction)=>{
    response.status(500).json({message: err.message})
})

app.listen(PORT, ()=>{
    console.log("server listening on:", PORT)
})