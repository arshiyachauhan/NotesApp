require('dotenv').config();
require('./db');

const cors = require('cors');
// const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());

const authRouter = require('./routers/auth.router');
const userRouter = require('./routers/users.router');
const noteRouter = require('./routers/notes.router');

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/notes', noteRouter);

app.get('/', (req, res)=>{
    res.send('Hello cipherschools');
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
