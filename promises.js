let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    topping: ["chocolate", "peanuts"]
};
let is_shop_open = true;
let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject(console.log("our shop is closed "));
        }
    });
};
order(2000, () => console.log(`${stocks.Fruits[0]} was selected `))
    .then(() => {
        return order(0000, () => console.log(`Production has started`));
    })
    .then(() => {
        return order(2000, () => console.log(`the jus has been chopped`));
    })
    .then(() => {
        return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`));
    })
    .then(() => {
        return order(1000, () => console.log("the machine has started"))
    })
    .then(() => {
        return order(2000, () => console.log(`${stocks.holder[0]} has been selected `))
    })
    .then(() => {
        return order(3000, () => console.log(`${stocks.topping[0]} was added as topping `))
    })
    .then(() => {
        return order(4000, () => console.log("ice crearm is ready to go "))
    })
    .catch(() => {
        console.log("customer left")
    })
    .finally(() => {
        console.log("day ended ")
    })