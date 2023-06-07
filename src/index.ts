import Item from './Item'
import User from './User'
import Shop from './Shop'


const shop = new Shop()

const user = new User('William', 26)

const items = shop.getItems()
user.addToCart(items[0])
user.addToCart(items[1])

user.printCart()

user.removeFromCart(items[0])

user.addToCart(items[2])
user.addToCart(items[2])
user.addToCart(items[2])
user.addToCart(items[2])
user.removeQuantityFromCart(items[2], 2)

user.printCart()

const totalPrice = user.cartTotal()
console.log(`Cart Total: $${totalPrice}`)
