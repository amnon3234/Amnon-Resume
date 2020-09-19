
// import packages 
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// import routes
const experienceRouter = require ('./routes/experience.route');
const infoRouter = require ('./routes/info.route');
const noteRouter = require ('./routes/note.route');
const projectRouter = require ('./routes/project.route');
const skillRouter = require ('./routes/skillCategory.route');
const userRouter = require ('./routes/user.route');

// consts
PORT = process.env.PORT || 3001;
DB_URL = process.env.DB_URL;

// app
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/experience',experienceRouter);
app.use('/api/info',infoRouter);
app.use('/api/notes',noteRouter);
app.use('/api/projects',projectRouter);
app.use('/api/skills',skillRouter);
app.use('/api/users',userRouter);

// mongoose connection
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => console.log('MongoDB db connection successfully established'));

// add build folder and set the defualt routes on refresh when on production
if (process.env.NODE_ENV === 'production') {
    app.use(static('client/build'));
    app.get('/*',(req, res) => res.redirect('/'));
}else console.log('development mode');

// server listen
app.listen(PORT, () => console.log('Server is runing on port: ' + PORT));