const Json2csvParser = require('json2csv').Parser;
const _ = require('lodash');
var Chance = require('chance');
const fs = require('fs');

var chance = new Chance();

const createContact = () => ({
    first_name: chance.first(),
    last_name: chance.last(),
    opt_in_email: 1,
    opt_in_sms: 1,
    email: chance.email({ domain: 'gefen.online' }),
    mobile: chance.phone(),
    address: chance.address(),
    zip: chance.zip(),
    city: chance.city(),
    country: chance.country(),
    tag: 'tag',
    opt_in_email: 1,
    opt_in_sms: 1,
    bu_id: '111',
    job_title: 'job_title',
    company_name: chance.company(),
});
const fields = _.keys(createContact());

const NUM_OF_CONTACTS = 500000;

const json2csvParser = new Json2csvParser({ fields });
const allContacts = _.times(NUM_OF_CONTACTS, createContact);
console.log('allContacts created.');

const csv = json2csvParser.parse(allContacts);
console.log('csv parsed.');

const output = fs.writeFileSync(`${Date.now()}_${NUM_OF_CONTACTS}_contacts.csv`, csv, { encoding: 'utf8' });
console.log(`file with ${NUM_OF_CONTACTS} was writin.`);
