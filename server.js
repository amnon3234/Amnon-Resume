
// import packages 
require('dotenv').config();
import express, { json, static } from 'express';
import { connect, connection as _connection } from 'mongoose';
import cors from 'cors';

// import routes
import experienceRouter from './routes/experience.route';
import infoRouter from './routes/info.route';
import noteRouter from './routes/note.route';
import projectRouter from './routes/project.route';
import skillRouter from './routes/skillCategorie.route';
import userRouter from './routes/user.route';

// consts
PORT = process.env.PORT || 3001;
DB_URL = process.env.DB_URL;

// app
const app = express();
app.use(cors());
app.use(json());
app.use('/api/experience',experienceRouter);
app.use('/api/info',infoRouter);
app.use('/api/notes',notesRouter);
app.use('/api/projects',projectsRouter);
app.use('/api/skills',skillsRouter);
app.use('/api/users',usersRouter);
app.use('/api/headlines',headlinesRouter);

// mongoose connection
connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = _connection;
connection.once('open', () => console.log('MongoDB db connection successfully established'));

// add build folder and set the defualt routes on refresh when on production
if (process.env.NODE_ENV === 'production') {
    app.use(static('client/build'));
    app.get('/*',(req, res) => res.redirect('/'));
}else console.log('developer mode');

// server listen
app.listen(PORT, () => console.log('Server is runing on port: ' + PORT));