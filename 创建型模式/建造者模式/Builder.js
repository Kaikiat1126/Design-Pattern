/*
    1. 为什么要用？
        ：对用户而言他们无需知道/关心产品组装的细节，也不会单独使用到某个组件，而是整个完整的产品。
        ：把产品设计细节和复杂的产品组装过程分开，分布制造出并返回一个完整的产品给用户使用

    2. 优点
        ：建造代码与表现代码分离，但如果要改变产品内部表示就需要再定义一个具体的建造者
        ：封装性好，对象本身与构建过程解耦
    
    3. 缺点
        : 每个产品都需要有共同点
        : 如果内部复杂的话就需要很多具体建造类
        ：如果产品内部结构发生变化，建造者也要相应修改

    4. 什么时候用？
        ：需要生成的对象有复杂的内部结构，且内部属性本身相互依赖，创建对象需要很多步骤的时候
*/

//产品类
class Car {
    constructor() {
        this.name = '';
        this.number = '';
        this.wheel = '';
        this.seat = '';
    }
}

//建造者类
function MyviCarBuilder(){
    this.nameBuilder = function(){
        this.name = 'Myvi Car'
    },
    this.numberBuilder = function(){
        this.number = '666'
    },
    this.wheelBuilder = function(){
        this.wheel = '4 wheels'
    },
    this.seatBuilder = function(){
        this.seat = '4 seats'
    },
    this.getCar = function(){
        var car = new Car();
        car.name = this.name;
        car.number = this.number;
        car.wheel = this.wheel;
        car.seat = this.seat;
        return car;
    }
}

function AudiCarBuilder(){
    this.nameBuilder = function(){
        this.name = 'Audi Car'
    },
    this.numberBuilder = function(){
        this.number = '888'
    },
    this.wheelBuilder = function(){
        this.wheel = '4 wheels'
    },
    this.seatBuilder = function(){
        this.seat = '5 seats'
    },
    this.getCar = function(){
        var car = new Car();
        car.name = this.name;
        car.number = this.number;
        car.wheel = this.wheel;
        car.seat = this.seat;
        return car;
    }
}

//指挥者
function Director(){
    this.action = function(builder){
        builder.nameBuilder();
        builder.numberBuilder();
        builder.wheelBuilder();
        builder.seatBuilder();

        return builder.getCar();
    }
}

var director = new Director();
var buildMyvi = new MyviCarBuilder();
var buildAudi = new AudiCarBuilder();
director.action(buildMyvi);
director.action(buildAudi);
var myviCar = buildMyvi.getCar();
var audiCar = buildAudi.getCar();
console.log(myviCar);
console.log(audiCar);