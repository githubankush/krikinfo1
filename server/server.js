require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors")
const port = process.env.PORT || 1000;
const router = require('./router/auth-route');
const connectDB = require('./utils/db');

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200
}

app.use(cors(corsOptions));


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/auth',router);


connectDB().then(() => {
  app.listen(port, () => { 
    console.log(`Server listening at http://localhost:${port}`);
  } 
)
}
);
  



module.exports = app;