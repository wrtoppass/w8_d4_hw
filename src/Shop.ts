import Item from './Item'

class Shop {
  private items: Item[]

  constructor() {
    this.items = []
    const item1 = new Item('Jinro Soju', 5, 'A mildly alcoholic drink');
    const item2 = new Item('PG Zaku II', 200, 'A 1:60 Scale gunpla build kit');
    const item3 = new Item('Pokemon Scarlet', 60, 'Newest Pokemon game for Nintendo Switch');
    this.items.push(item1, item2, item3)
  }

  public getItems(): Item[] {
    return this.items
  }
}

export default Shop
