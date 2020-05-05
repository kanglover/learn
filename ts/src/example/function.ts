function add(x: number, y: number): number {
    return x + y;
}

// 完整定义
let myAdd: (x: number, y: number) => number 
    = function(x: number, y: number): number {
        return x + y;
    }

// 默认值和可选
function buildName(firstName?: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);

// 回调函数中的 this
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
    info: string = '';
    onClickBad(this: Handler, e: ErrorEvent) {
        // oops, used this here. using this callback would crash at runtime
        this.info = e.message;
    }
}
let h = new Handler();
let uiElement: UIElement = {
    addClickListener(onclick: (this: void, e: Event) => void): void {

    }
};
// uiElement.addClickListener(h.onClickBad); // error!