/*
    1. 为什么要用桥接模式？
        ：桥接模式使用组合关系代替继承，他很好地将抽象部分与实现部分做到分离，使得子类扩展性提升，也能独自进行变化

    2. 应用场景：
        ：一个类存在两个或以上独立变化的维度（类要扩展）
        ：多层次的继承关系导致子类增加
        ：抽象类与具体类之间需要更多的灵活性

    3. 优点：
        ：功能扩展能力强，系统更灵活
        ：细节透明化

    4. 缺点：
        ：增加了系统的理解与设计难度
        ：需要清晰了解系统中两个独立变化的维度

    5. 资料：
        ：https://www.jianshu.com/p/ceb82afe828d

*/

//抽象化角色
class HappyMeal{
    constructor(burger){
        this.burger = burger;
    }

    getLunchSet(){

    }
}

//扩展产品一 薯条
class LunchSetOne extends HappyMeal{
    constructor(burger){
        super(burger);
    }

    getLunchSet(){
        return this.burger.getBurger() + '& French Fries'
    }
}

//扩展产品二 鸡肉块
class LunchSetTwo extends HappyMeal{
    constructor(burger){
        super(burger);
    }

    getLunchSet(){
        return this.burger.getBurger() + ' & Nuggets'
    }
}

//实现化角色
class Burger{
    getBurger(){

    }
}

//具体实现化角色 鸡肉汉堡
class ChickenBurger extends Burger{
    getBurger(){
        return 'Chicken Burger '
    }
}

//具体实现化角色 牛肉汉堡
class BeefBurger extends Burger{
    getBurger(){
        return 'Beef Burger '
    }
}

class PrepareOrder{
    static main(){
        let chickenBurger = new ChickenBurger();
        let lunchSetOne = new LunchSetOne(chickenBurger);
        let mySet = lunchSetOne.getLunchSet();
        console.log(mySet);
    }
}

PrepareOrder.main();