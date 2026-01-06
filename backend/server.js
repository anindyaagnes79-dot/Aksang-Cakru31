import express from 'express'
import cors from "cors"
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import reservationRoute from './routes/reservationRoute.js'
import jwt from 'jsonwebtoken'

const app = express()

const port = process.env.PORT || 4000

console.log("JWT_SECRET:", process.env.JWT_SECRET);

connectDB()
connectCloudinary()

app.use(cors())
app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/reservation', reservationRoute)


app.get('/api/admin/token', (req,res)=> {
    const token = jwt.sign(
        process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD,
        process.env.JWT_SECRET
    );
  res.json({ token });
})

app.listen(port, ()=> console.log('Server started on port' + port))