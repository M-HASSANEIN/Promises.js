let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    topping: ["chocolate", "peanuts"]
};
let is_shop_open = true;
let topping_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("which topping would you love ?"));
        }, 3000);
    });
};
async function kitchen() {
    console.log("A");
    console.log("B");
    console.log("C");
    await topping_choice();
    console.log("D");
    console.log("E");
}
kitchen();

console.log("cleaning the dishes");
console.log("cleaning the tables");
console.log("taking others orders");
