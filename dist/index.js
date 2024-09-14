"use strict";
function addAll(...nums) {
    let result = 0;
    nums.forEach((num) => result += num);
    return result;
}
console.log(addAll(10, 20, 30, 100, 10.5, +true));
//# sourceMappingURL=index.js.map