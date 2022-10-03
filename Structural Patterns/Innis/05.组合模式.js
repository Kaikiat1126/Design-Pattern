// 对于树形结构的对象有极好的实现特性
// 可以忽略个体对象和整体对象的区别

//问题：没有面向接口实现，都是直接实现，修改的代价太大


class Car {
    constructor(model, color, seat) {
        this.model = model;
        this.color = color;
        this.seat = seat
    }

    run() {
        console.log(`this ${this.color}-${this.model}-${this.seat} is running`);
    }
}

// let car = new Car("modelx", "red", "5")
// car.run()

class vehicle {
    constructor(model, color, seat) {
        this.model = model;
        this.color = color;
        this.seat = seat;
        this.cars = []
    }

    run() {
        console.log(`this ${this.color}-${this.model}-${this.seat} is running`);
    }

    add(car) {
        this.cars.push(car)
    }

    runAllCars() {
        for (const car of this.cars) {
            console.log(`this ${car.color}-${car.model}-${car.seat} is running`);
        }
    }
}


let car1 = new vehicle("modelx", "red", "5")
// car1.run()

let car2 = new vehicle("Myvi ", "black", "5")

let car3 = new vehicle("Porsche ", "white", "5")

let cars = new vehicle("", "", "")
cars.add(car1)
cars.add(car2)
cars.add(car3)

cars.runAllCars()


