const { read, write } = require("../services/fs.service.js");

class UserRepository {
    async getAll() {
        return read();
    }

    async create(user) {
        const users = await read();
        const newUser = {
            id: users.length ? users[users.length - 1].id + 1 : 1,
            name: user.name,
            surname: user.surname,
            age: user.age
        };
        users.push(newUser);
        await write(users);
        return newUser;
    }
    async getById(id) {
        const users = await read();
        console.log(typeof id, '!!!!!!!!!');
        const index = users.findIndex(user => user.id === Number(id));
        console.log(index, '(((((((((((');
        return users[index];
    }
}

module.exports = new UserRepository();
