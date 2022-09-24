/*
    1. 为什么要用？
        ：他能在不改变现有的对象结构（代码）的情况下，让对象动态添加一些新的职责（功能）
        ：就像我们带手表这样，不会影响我们什么，但是赋予我们看时间的能力
        ：即是在不改变核心功能的基础上去新增一些新的功能
    
    2. 应用场景：
        ：想要不使用继承来扩展功能

    3. 优点：
        ：类间低耦合，装饰类和被装饰类都可以独立发展，不会相互影响。
        ：装饰器模式是继承的一种替代方式，通过组合的方式完成继承的功能，但却避免了继承的侵入性。

    4. 缺点：
        ：多层装饰比较复杂
        ：使用装饰模式进行系统设计时将产生很多小对象，过度使用装饰器模式会导致类的数量变得庞大
*/

//被装饰者
class Person{
    constructor(name){
        this.name = name;
    }

    sayName(){
        console.log(`I am ${this.name}`);
    }

    sport(){
        console.log('I am running');
    }
}

class Shoes extends Person{
    constructor(name){
        super(name);
        //person.wear = this.wear;
    }

    wear(){}
}

//装饰器一 Nike运动鞋
class NikeShoes extends Shoes{
    constructor(name){
        super(name);
        //person.wear = this.wear;
    }

    wear(){
        console.log('I wear Nike shoes');
    }
}

//装饰器二 Puma运动鞋
class PumaShoes extends Shoes{
    constructor(name){
        super(name);
        //person.wear = this.wear;
    }

    wear(){
        console.log('I wear Puma shoes');
    }
}

class Client{
    static main(){
        let person = new Person('Au')
        person.sayName();
        person.sport();
        let wearNike = new NikeShoes(person);
        wearNike.wear();
    }
}

Client.main();