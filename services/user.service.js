const userRepository = require("../repositories/user.repository");

class UserService {
    async getAll() {
        return userRepository.getAll();
    }

    async create(user) {
        return userRepository.create(user);
    }
    async getById(id) {
        return userRepository.getById(id);
    }
}

module.exports = new UserService();
