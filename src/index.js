import express from "express"
import mongoose from "mongoose"
import UserRoute from './routes/user'
import CategoriesRoute from './routes/categories'

const app = express()

app.use(express.json());

// route api
app.use('/api',UserRoute)
app.use('/api',CategoriesRoute)

// connect mongo db
mongoose.connect('mongodb://127.0.0.1:27017/phoneStore')
  .then(() => console.log('Connected db phoneStore'))
  .catch(err => console.log('Error',err))
// port run
const port = 8080
app.listen(port,()=>{
    console.log(`Running on port ${port}`);
})