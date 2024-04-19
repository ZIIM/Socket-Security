"use strict";

class FifoQueue {
  constructor(name) {
    this.name = name;
    this.data = [];
  }

  add(value) {
    this.data.unshift(value);
    return this.data.length - 1;
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  getNext() {
    return this.data.pop();
  }
}

module.exports = FifoQueue;
