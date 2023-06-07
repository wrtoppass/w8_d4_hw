import { v4 as uuidv4 } from 'uuid'
import Item from './Item'

class User {
  private id: string
  private name: string
  private age: number
  private cart: Item[]

  constructor(name: string, age: number) {
    this.id = uuidv4()
    this.name = name
    this.age = age
    this.cart = []
  }

  public getId(): string {
    return this.id
  }

  public getName(): string {
    return this.name
  }

  public getAge(): number {
    return this.age
  }

  public addToCart(item: Item): void {
    this.cart.push(item)
  }

  public removeFromCart(item: Item): void {
    this.cart = this.cart.filter((cartItem) => cartItem.getId() !== item.getId())
  }

  public removeQuantityFromCart(item: Item, quantity: number): void {
    let remainingQuantity = quantity
    this.cart = this.cart.filter((cartItem) => {
      if (cartItem.getId() === item.getId()) {
        if (remainingQuantity >= 0) {
          remainingQuantity--
          return false
        }
      }
      return true
    });
  }

  public cartTotal(): number {
    return this.cart.reduce((total, item) => total + item.getPrice(), 0)
  }

  public printCart(): void {
    console.log(`User: ${this.getName()}`)
    console.log('Cart Items:')
    this.cart.forEach((item) => {
      console.log(`- Name: ${item.getName()}, Price: ${item.getPrice()}`)
    })
  }
}

export default User;
