const { v4 } = require('uuid');

let contacs = [
  {
    id: v4(),
    name: 'Gabriel',
    email: 'gabriel@gmail.com',
    phone: '123456789',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Mateus',
    email: 'Mateus@gmail.com',
    phone: '123456789',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacs);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacs.find((contac) => contac.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacs = contacs.filter((contac) => contac.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
