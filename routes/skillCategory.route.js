
// import packages
const express = require('express');
let Model = require('../models/skillCategory.model');
const onlyAdmin = require('./../util/userPrivilege.util').onlyAdmin;
const JWTAuthentication = require('./../util/jwt.util').JWTAuthentication;

// router
const router = express.Router();

// restful API - target all
router
    .route('/')

    .get((req, res) => { // get all
        Model.find()
            .then( results => res.json(results))
            .catch( err => res.status(400).json(err));
    })
    
    .post(JWTAuthentication, onlyAdmin, (req, res) => { // add one
        new Model(req.body)
            .save()
            .then( () => res.json('Skill category added succesfuly'))
            .catch( err => res.status(400).json(err));
    });

// Target Spesific 
router
    .route('/:id')
    
    .get((req, res) => { // get one
        Model.findById(req.params.id)
            .then( result => res.json(result))
            .catch( err => res.status(400).json(err));
    })
    
    .put(JWTAuthentication, onlyAdmin, (req, res) => { // update one (overwtire)
        Model.update({ _id:req.params.id }, req.body, { overwrite: true })
            .then( () => res.json('Skill category overwritten succesfuly'))
            .catch( err => res.status(400).json(err));
    })

    .patch(JWTAuthentication, onlyAdmin, (req, res) => { // update one spesific items
        Model.update({ _id:req.params.id }, { $set: req.body })
            .then( () => res.json('Skill category updated succesfuly'))
            .catch( err => res.status(400).json(err));
    })
    
    .delete(JWTAuthentication, onlyAdmin, (req, res) => { // delete one 
        Model.findByIdAndDelete(req.params.id)
            .then(() => res.json('Skill category deleted succesfuly'))
            .catch( err => res.status(400).json(err));
    });

// export router
module.exports = router;