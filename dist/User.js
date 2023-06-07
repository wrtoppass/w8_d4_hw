"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class User {
    constructor(name, age) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.age = age;
        this.cart = [];
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    addToCart(item) {
        this.cart.push(item);
    }
    removeFromCart(item) {
        this.cart = this.cart.filter((cartItem) => cartItem.getId() !== item.getId());
    }
    removeQuantityFromCart(item, quantity) {
        let remainingQuantity = quantity;
        this.cart = this.cart.filter((cartItem) => {
            if (cartItem.getId() === item.getId()) {
                if (remainingQuantity >= 0) {
                    remainingQuantity--;
                    return false;
                }
            }
            return true;
        });
    }
    cartTotal() {
        return this.cart.reduce((total, item) => total + item.getPrice(), 0);
    }
    printCart() {
        console.log(`User: ${this.getName()}`);
        console.log('Cart Items:');
        this.cart.forEach((item) => {
            console.log(`- Name: ${item.getName()}, Price: ${item.getPrice()}`);
        });
    }
}
exports.default = User;
