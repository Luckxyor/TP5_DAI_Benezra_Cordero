import express from 'express';
import time from './time.js'; 
const app = express();
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor');
});

app.get('/hora', (req, res) => {
    let horaActual=time();
    res.send(horaActual);
});

app.get('/fecha-completa', (req, res) => {
    let horaActual=time();
    res.send();
});

export default app