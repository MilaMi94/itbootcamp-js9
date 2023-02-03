export class ChatUI {
  constructor(l) {
    this.list = l;
  }

  //seter and geter
  set list(l) {
    this._list = l;
  }
  get list() {
    return this._list;
  }

  //method for formating date in message
  formatMessageDate(date) {
    let currentDate = new Date();
    if (date.toDateString() === currentDate.toDateString()) {
      let h = String(date.getHours()).padStart(2, "0");
      let min = String(date.getMinutes()).padStart(2, "0");
      let formatDate = "Today - " + h + ":" + min;
      return formatDate;  
    } else {
      let d = String(date.getDate()).padStart(2, "0");
      let m = String(date.getMonth() + 1).padStart(2, "0");
      let y = String(date.getFullYear()).slice(-2);
      let h = String(date.getHours()).padStart(2, "0");
      let min = String(date.getMinutes()).padStart(2, "0");
      let formatDate = d + "." + m + "." + y + ". - " + h + ":" + min;
      return formatDate;
    }
  }

  //template for every message
  templateLI(data, clas) {
    let date = data.created_at.toDate();
    let formatDate = this.formatMessageDate(date);
    let li = `
    <li class=${clas}>
        <span class="username">${data.username}: </span>
        <span class="message">${data.message}</span><br>
        <span class="date">${formatDate}</span>
    </li>
    `;
    this.list.innerHTML += li;
  }
  clearUL(){
    this.list.innerHTML = "";
  }
}
