const { uuid } = require('uuidv4');

const contacs = [
  {
    id: uuid(),
    name: 'Gabriel',
    email: 'gabriel@gmail.com',
    phone: '123456789',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacs);
    });
  }
}

module.exports = new ContactsRepository();
