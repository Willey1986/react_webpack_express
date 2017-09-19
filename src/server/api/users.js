const express = require('express');
const router = express.Router();

const users = [
    {id: 1, name: 'Willem Almstedttttrrrrr'},
    {id: 2, name: 'Philipp Schlöpoposser'},
    {id: 3, name: 'Lars Mühlenstädtttt'},
    {id: 4, name: 'Lars Mühlenstädt'},
]

router.get('/', (req, res) => {
    res.json(users);
})

module.exports = router;