const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/contactController');


router.get('/contacts',  ContactController.AllContacts)

router.post('/contacts', ContactController.AddContact);

router.get('/contacts/:id', ContactController.GetOneContact);


router.put('/contacts/:user_id', ContactController.UpdatedContact);


router.delete('/contacts/:id',  ContactController.deleteContact)

module.exports = router;