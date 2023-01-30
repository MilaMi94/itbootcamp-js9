class Chatroom {
  constructor(r, u) {
    this.room = r;
    this.username = u;
    this.chats = db.collection("chats");
  }
  // room
  set room(r) {
    this._room = r;
  }
  get room() {
    return this._room;
  }

  //username

  set username(u) {
    if (u.length > 2 && u.length < 10) {
      this._username = u;
    } else {
      alert(`Invalid input for username property`);
    }
  }
  get username() {
    return this._username;
  }
  // method for adding chat
  async addChat(mess) {
    let date = new Date();

    let docChat = {
      message: mess,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(date),
    };
    let response = await this.chats.add(docChat);
    return response;
  }
  // callback method which listens changes in database
  getChats(callback) {
    this.chats
      .where("room", "==", this.room)
      .orderBy("created_at")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type == "added") {
            console.log(change.doc.data());
          }
        });
      });
  }
}

// test
let chatroom1 = new Chatroom("#general", "anapetrovic");
let chatroom2 = new Chatroom("#random", "amanda");
console.log(chatroom1);
console.log(chatroom1.username);
console.log(chatroom1.room);

console.log(chatroom2);
console.log(chatroom2.room);

// adding message test
/*
chatroom2
  .addChat("testiraj metodu addChat")
  .then(() => {
    console.log(`Message added`);
  })
  .catch((err) => {
    console.log(err);
  });
*/


chatroom2.getChats();
