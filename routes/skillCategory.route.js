
// import packages
const express = require('express');
const { onlyAdmin, attachUser } = require('./../util/userPrivilege.util');
const { JWTAuthentication } = require('./../util/jwt.util');
let Model = require('../models/skillCategory.model');

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
    
    .post(JWTAuthentication, attachUser, onlyAdmin, (req, res) => { // add one
        new Model(req.body)
            .save()
            .then( () => res.json('Skill category added successfully'))
            .catch( err => res.status(400).json(err));
    });

// Target Specific 
router
    .route('/:id')
    
    .get((req, res) => { // get one
        Model.findById(req.params.id)
            .then( result => res.json(result))
            .catch( err => res.status(400).json(err));
    })
    
    .put(JWTAuthentication, attachUser, onlyAdmin, (req, res) => { // update one (overwrite)
        Model.update({ _id:req.params.id }, req.body, { overwrite: true })
            .then( () => res.json('Skill category overwritten successfully'))
            .catch( err => res.status(400).json(err));
    })

    .patch(JWTAuthentication, attachUser, onlyAdmin, (req, res) => { // update one specific items
        Model.update({ _id:req.params.id }, { $set: req.body })
            .then( () => res.json('Skill category updated successfully'))
            .catch( err => res.status(400).json(err));
    })
    
    .delete(JWTAuthentication, attachUser, onlyAdmin, (req, res) => { // delete one 
        Model.findByIdAndDelete(req.params.id)
            .then(() => res.json('Skill category deleted successfully'))
            .catch( err => res.status(400).json(err));
    });

// export router
module.exports = router;