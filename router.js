const express = require("express");
const router = express.Router();

const persons = [
    { id: 0, name: 'Jhon' },
    { id: 1, name: 'Jane' }
];

// Récupérer la liste des personnes
router.get('/', (req, res) => {
    res.json(persons);
});

// Chercher une personne par ID
router.get('/:id', (req, res) => {
    const person = persons.find(p => p.id === parseInt(req.params.id));
    if (!person) 
        return res.status(404).json({ error: 'Person not found' });
    res.json(person);
});

// Ajouter une nouvelle personne
router.post('/', (req, res) => {
    const newPerson = {
        id: Date.now(), // Générer un ID unique
        name: req.body.name
    };
    persons.push(newPerson);
    res.status(201).json(newPerson);
});

module.exports = router;
