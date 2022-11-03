var express = require('express');
var contactRouter = express.Router();

var contacts = require('./contact-model');
var contact = new Contacts();

contactRouter.get('/',(req,res) => {
    contact.getAll((err, result)=> {
        if(err) {
            res.status(500).send(err.message);
            return;
        }
        res.status(200).jsom(result);
    });
});

contactRouter.get('/:contactId',(req,res) => {
    var contactId = parseInt(req.params.contactId);
    contact.get(contactId, (err, result) => {
        if(err) {
            if(err.status === 404) {
                res.status(404).send(err.message);
            } else {
                res.status(500).send(err.message);
            }
            return;
        }
    })
    res.status(200).json(result);
})

contactRouter.get('/',(req,res) => {
    var contactId = parseInt(req.params.contactId);
    contact.get(contactId, (err, result) => {
        if(err && err.status !== 404) {
            res.status(500).send(err.message);
            return;
        }

        if(result !== undefined && result.contactId === contactId) {
            res.status(409).json({message: 'Record already exists'});
            return
        }
        contact.append(req.body,(err) => {
            if(err ) {
                res.status(500).send(err.message);
                return;
            }
            res.status(201).json({message: 'Record appended!'});
        })
    })
})

contactRouter.put('/:contactId',(req,res) => {
    var contactId = parseInt(req.params.contactId);
    contact.get(contactId, (err, result) => {
        if(err) {
            if(err.status === 404) {
                res.status(404).send(err.message);
            } else {
                res.status(500).send(err.message);
            }
            return;
        }

        contact.save(req.body,(err) => {
            if(err) {
                res.status(500).send(err.message);
                return;
            }
            res.status(201).json({message: 'Record appended!'});
        })
    })
})