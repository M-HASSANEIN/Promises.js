let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    topping: ["chocolate", "peanuts"]
};

let is_shop_open = true;
function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log("shop is closed"));
        }
    });
}
async function kitchen() {
    try {
        await time(2000);
        console.log(`${stocks.Fruits[0]} was selected `);
        await time(0000);
        console.log(`Production has started`);
        await time(2000);
        console.log(`the jus has been chopped`);
        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        await time(1000);
        console.log("the machine has started");
        await time(2000);
        console.log(`${stocks.holder[0]} has been selected `);
        await time(3000);
        console.log(`${stocks.topping[0]} was added as topping `);
        await time(4000);
        console.log("ice crearm is ready to go ");
    } catch (error) {
        console.log("customer left", error);
    } finally {
        await time(5000);
        console.log("day ended , shop is closed");
    }
}
kitchen();
