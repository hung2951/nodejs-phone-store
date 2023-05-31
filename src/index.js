import express from "express"
import mongoose from "mongoose"
import UserRoute from './routes/user'
import CategoriesRoute from './routes/categories'
import ProductsRoute from './routes/products'
import ColorsRoute from './routes/color-prd'
import VersionsRoute from './routes/version-prd'

const app = express()

app.use(express.json());

// route api
app.use('/api',UserRoute)
app.use('/api',CategoriesRoute)
app.use('/api',ProductsRoute)
app.use('/api',ColorsRoute)
app.use('/api',VersionsRoute)

// connect mongo db
mongoose.connect('mongodb://127.0.0.1:27017/phoneStore')
  .then(() => console.log('Connected db phoneStore'))
  .catch(err => console.log('Error',err))
// port run
const port = 8080
app.listen(port,()=>{
    console.log(`Running on port ${port}`);
})