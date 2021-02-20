const Contact = require('../models/contactSchema');



const AllContacts = (req, res) => {
    Contact.find(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        });
    });
}


const AddContact = (req, res) => {
    var contact = new Contact();
    contact.Name = req.body.Name ? req.body.Name : contact.Name;
    contact.Gender = req.body.Gender;
    contact.Email = req.body.Email;
    contact.Phone = req.body.Phone;
    // save the contact and check for errors
    contact.save(function (err) {
        res.json({
            message: 'New contact created!',
            data: contact
        });
    });
}


const GetOneContact = (req, res) => {
    Contact.findById(req.params.id, (err, contact) => {
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
}


const UpdatedContact =(req, res) => {
    Contact.findByIdAndUpdate(req.params.user_id, {
        Name: req.body.Name,
        Phone: req.body.Phone,
        Email: req.body.Email,
        Gender: req.body.Gender
    }, (err, docs) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json({
                message: 'Contact Info updated',
                data: docs
            })
        }
    });
}

const deleteContact = (req, res) => {
    Contact.deleteOne({_id:req.params.id}, (err,contact)=>{
        res.json({
            message:'deleted Document'
        })
    })
}



module.exports = {
    AllContacts,
    AddContact,
    GetOneContact,
    UpdatedContact,
    deleteContact
}

