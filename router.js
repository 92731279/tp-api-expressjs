const express = require("express")
const bodyParser = require("body-parser")
const router = express.Router();
const persons = [
    {id:0, name:'Jhon'},
    {id:1, name:'Jane'}
];

router.use(bodyParser.json())

router.get('/persons',(req,res) => {
    rep.json(persons)

})

// chercher des personnes par id (utilisant get)
router.get('/persons/:id',(req,res) => {
   const person=persons.find(p=>p.id === parseInt (req.params.id));
    if(!person) 
        return res.status(404).json({error : 'person not found'});
    res.json(person);
})

// ajouter une personne 
router.post('/persons',(req,res)=>{
    const newperson = {
        id:persons.length,
        
    }
})

module.exports = router;