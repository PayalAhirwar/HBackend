const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
const dbConfig = require("./config/dbConfig");
app.use(express.json());
const userRoute = require("./routes/userRoutes");
const adminRoute = require("./routes/adminRoute");
const doctorRoute = require("./routes/doctorRoute");


app.use(cors({
    origin: 'https://668306f0c085f887d7172df1--lustrous-nougat-9500ce.netlify.app/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use('/api/user', userRoute);
app.use('/api/admin', adminRoute);
app.use('/api/doctor', doctorRoute);

const port = process.env.PORT || 5000;



app.listen(port, () => console.log(`Node Server Started at port ${port}`));