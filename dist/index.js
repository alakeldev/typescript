"use strict";
class User {
    static getCount() {
        console.log(`${this.created} Objects Created`);
    }
    constructor(username) {
        this.username = username;
        User.created++;
    }
}
User.created = 0;
let u1 = new User("Alakel");
let u2 = new User("Abode");
let u3 = new User("Abd");
let u4 = new User("Mama");
User.getCount();
//# sourceMappingURL=index.js.map