class User {
    // todo add other user model attributes
    constructor({ id, password }) {
        this.id = id;
        this.password = password;
    }
}

module.exports = User;