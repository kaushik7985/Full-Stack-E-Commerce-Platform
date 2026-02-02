import express from 'express'
import 'dotenv/config'
import connectDB from './database/db.js'
import userRoute from './routes/userRoute.js'
import cors from 'cors'
import productRoute from './routes/productRoute.js'
import cartRoute from './routes/cartRoute.js'
import orderRoute from './routes/orderRoute.js'
import path from 'path'

const app=express()
const PORT=process.env.PORT||3000

//middleware
app.use(express.json())
app.use(cors({
    origin:'https://full-stack-e-commerce-platform-hy20.onrender.com',
    credentials:true
}))

const _dirname = path.resolve()

app.use('/api/v1/user',userRoute)
app.use('/api/v1/product',productRoute)
app.use('/api/v1/cart',cartRoute)
app.use('/api/v1/orders', orderRoute)

//https://full-stack-e-commerce-platform-hy20.onrender.com/api/v1/user/register

app.use(express.static(path.join(_dirname, "frontend/dist")));
app.get(/^(?!\/api).*/, (_, res)=>{
    res.sendFile(path.resolve(_dirname, "frontend","dist", "index.html"))
})

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server is listening at port:${PORT}`);
})