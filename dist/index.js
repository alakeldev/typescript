"use strict";
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
let itemOne = new Collection();
itemOne.add({ itemType: "Book", title: "Atmomic", isbn: 111111222 });
itemOne.add({ itemType: "Book", title: "Follow me", isbn: 454544000 });
console.log(itemOne);
let itemTwo = new Collection();
itemTwo.add({ itemType: "Game", title: "Call of duty", style: "Action", price: 100 });
console.log(itemTwo);
//# sourceMappingURL=index.js.map