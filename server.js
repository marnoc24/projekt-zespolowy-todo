const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Baza danych w pamięci podręcznej serwera
let tasks = [
    { id: 1, text: 'Zrealizować projekt na laboratorium' },
    { id: 2, text: 'Przygotować dokumentację' }
];

// Pobieranie listy zadań (GET)
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// Dodawanie zadania (POST)
app.post('/api/tasks', (req, res) => {
    const newTask = {
        id: Date.now(),
        text: req.body.text
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Usuwanie zadania (DELETE)
app.delete('/api/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== id);
    res.json({ message: 'Usunięto pomyślnie' });
});

app.listen(3000, '127.0.0.1', () => {
    console.log('Serwer działa pod adresem http://localhost:3000');
});
