# pr-database

pr-database is a simple and lightweight Node.js package for interacting with a database. It provides methods for creating, reading, updating, and deleting data from a database collection.

## Installation

You can install pr-database using npm:

```bash
npm install pr-database
```

## Usage

To use pr-database, require it in your Node.js application:

```javascript
const database = require('pr-database');
```

### Creating a Database Collection

To create a database collection, use the `createdb` method:

```javascript
database.createdb('users', ["username", "password"])
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Inserting Data

To insert data into a collection, use the `create` method:

```javascript
database.create('users', {
  username: 'prabej@gmail.com',
  password: '12345678'
})
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Reading Data

To read all data from a collection, use the `read` method:

```javascript
database.read('users')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Reading Filtered Data

To read filtered data from a collection, use the `readQuery` method:

```javascript
database.readQuery('users', 'username', 'prabej@gmail.com')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Updating Data

To update a row in a collection, use the `update` method:

```javascript
database.update('users', 'username', 'prabej@gmail.com', 'username', 'hussain@gmail.com')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Deleting Data

To delete a row from a collection, use the `deleteRow` method:

```javascript
database.deleteRow('users', 'username', 'prabej@gmail.com')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Dropping a Collection

To drop a collection, use the `dropDatabase` method:

```javascript
database.dropDatabase('users')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize the README as needed and add more details or examples if required.