class Chat {
    // todo add other user model attributes
    constructor({ id, message, senderId }) {
        this.id = id;
        this.message = message;
        this.senderId=senderId;
    }
  }
  
  module.exports = Chat;