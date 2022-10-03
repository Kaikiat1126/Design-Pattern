//迭代器模式(Iterator)：提供一种方法顺序一个聚合对象中各个元素，而又不暴露该对象内部表示。
// 允许迭代，但是不允许访问和修改
// 为了保护迭代的对象，需要增加迭代器对象，增加复杂度

class Iterator {
    constructor(container) {
        this.list = container.list;
        this.index = 0;
    }

    next() {
        if (this.hasNext()) {
            return this.list[this.index++];
        }
        return null;
    }

    hasNext() {
        if (this.index >= this.list.length) {
            return false;
        }
        return true;
    }
}

class Container {
    constructor(list) {
        this.list = list;
    }

    getIterator() {
        return new Iterator(this);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let container = new Container(arr);
let iterator = container.getIterator();
while (iterator.hasNext()) {
    console.log(iterator.next());
}