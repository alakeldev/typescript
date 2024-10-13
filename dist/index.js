"use strict";
function getEasySeconds() {
    return 3;
}
var Kids;
(function (Kids) {
    Kids[Kids["Five"] = 25] = "Five";
    Kids[Kids["Seven"] = 20] = "Seven";
    Kids[Kids["Ten"] = 15] = "Ten";
})(Kids || (Kids = {}));
var Level;
(function (Level) {
    Level[Level["Kid"] = 15] = "Kid";
    Level[Level["Easy"] = getEasySeconds()] = "Easy";
    Level[Level["Medium"] = Level.Easy] = "Medium";
    Level[Level["Hard"] = Level.Medium + 5] = "Hard";
})(Level || (Level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`The Level is ${lvl} and Number of Seconds is ${Level.Easy}`);
}
//# sourceMappingURL=index.js.map