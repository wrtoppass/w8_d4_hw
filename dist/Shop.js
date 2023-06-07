"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = __importDefault(require("./Item"));
class Shop {
    constructor() {
        this.items = [];
        const item1 = new Item_1.default('Jinro Soju', 5, 'A mildly alcoholic drink');
        const item2 = new Item_1.default('PG Zaku II', 200, 'A 1:60 Scale gunpla build kit');
        const item3 = new Item_1.default('Pokemon Scarlet', 60, 'Newest Pokemon game for Nintendo Switch');
        this.items.push(item1, item2, item3);
    }
    getItems() {
        return this.items;
    }
}
exports.default = Shop;
