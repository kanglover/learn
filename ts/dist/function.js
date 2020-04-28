"use strict";
function add(x, y) {
    return x + y;
}
// 完整定义
var myAdd = function (x, y) {
    return x + y;
};
// 默认值和可选
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
var Handler = /** @class */ (function () {
    function Handler() {
        this.info = '';
    }
    Handler.prototype.onClickBad = function (e) {
        // oops, used this here. using this callback would crash at runtime
        this.info = e.message;
    };
    return Handler;
}());
var h = new Handler();
var uiElement = {
    addClickListener: function (onclick) {
    }
};
// uiElement.addClickListener(h.onClickBad); // error!
