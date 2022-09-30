/*
    1. 什么时候用单例模式？
        ：当我们需要频繁访问一个对象的时候可以使用，并且避免创建太多垃圾，占内存
        ：需要定义大量的静态常量和静态方法（如工具类）的环境

    2. 优点：
        ：保证系统中一个类只有一个实例而且该实例和外界通信，减少内存的占用，且容易维护

    3. 缺点：
        ：难扩展，违背单一职责，开闭原则
        ：https://sunra.top/2022/07/08/why-singletons-are-controversial/

    4. 补充：
        ：https://www.cnblogs.com/xiaohanxixi/p/13197362.html（线程安全）

*/

class SingleDog{
    show(){
        console.log('I am single dog');
    }

    static getInstance(){
        if(!SingleDog.instance){
            SingleDog.instance = new SingleDog();
        }

        return SingleDog.instance;
    }
};

let dog1 = SingleDog.getInstance();
let dog2 = SingleDog.getInstance();

console.log(dog1 == dog2);



class Singelton {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}

//闭包写法
Singelton.getInstance = (function(name){
    let instance = null;
    return function(name){
        if(!this.instance){
            this.instance = new Singelton(name)
        }
        return this.instance;
    }
})();

let Myvi = Singelton.getInstance('Myvi');
let Audi = Singelton.getInstance('Audi');

console.log(Myvi == Audi);
console.log(Myvi.getName());
console.log(Audi.getName());