class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => {
      return a-b;
    })
    this.length ++
  }

  get(pos) {
    if(!this.items[pos]) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if(!this.length) {
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }

  min() {
    if(!this.length) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
  }

  sum() {
    if(!this.length) {
      return 0;
    }
    const sumItems = this.items.reduce((acc, val) => {
      return acc + val;
    }, 0);
    return sumItems;
  }

  avg() {
    if(!this.length) {
      throw new Error('EmptySortedList');
    }
    const sumItems = this.items.reduce((acc, val) => {
      return acc + val;
    }, 0);
    return sumItems / this.length;
  } //*tried to reuse the sum() method here, but kept getting error :(
}

module.exports = SortedList;
