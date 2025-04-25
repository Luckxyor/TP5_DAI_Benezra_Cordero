import express from 'express';
import { ObtenerHoraActual, ObtenerFechaCompleta } from './time.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor');
});

app.get('/hora', (req, res) => {
    let horaActual=ObtenerHoraActual();
    res.status(200).send(horaActual);
});

app.get('/fecha-completa', (req, res) => {
    let fechaCompletaActual=ObtenerFechaCompleta();
    res.status(200).send(fechaCompletaActual);
});

app.use((req,res)=>{
    res.status(404).send("Ruta no encontrada");
});

export default app;