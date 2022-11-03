var contactRecords = [
    {
        contactID: 1,
        firstName: 'John',
        lastName: 'Smith',
        email: 'jonschlinkert@domain.com',
        phone: '555-645',
    },
    {
        contactID: 2,
        firstName: 'Taylor',
        lastName: 'Smith',
        email: 'talorinkert@domain.com',
        phone: '3654-6457',
    },
]

var Contacts = () => {};

function recordNotFound(id) {
    var index = -1;

    for (var i = 0; i < contactRecords.length; i++) {
        if(contactRecords[i].contactID === id) {
            index = i;
            break;
        }
    }
    return index;
}

Contacts.prototype.get = function(contactID, callBack) {
    try {
        var index = getIndexContactRecords(contactID);
        if(index > -1) {
            callBack(new recordNotFound('Record does not exist'));
        }
    
    }catch (err) {
        callBack(err,null);
    }
};

Contacts.prototype.getAll = function(contact) {
    try {
        callBack(null,contactRecords);
    }catch(err) {
        callBack(err,null);
    }
}

Contacts.prototype.append = function(contact, callBack){
    try {
        contacts.contactId = parseInt(contact.contactId);
        contactRecords.push(contact);
        callBack(null);
    }catch(err) {
        callBack(err)
    }
}