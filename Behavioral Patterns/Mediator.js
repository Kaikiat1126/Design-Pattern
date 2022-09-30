/*
    1. 为什么用？
        ：用一个中介对象来封装一系列的对象交互，担任沟通的桥梁。
        ：中介者使各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互

    2. 使用场景：
        ：对象之间的复杂耦合导致调用和维护出现困难,就可以考虑用中介者模式来重构代码

    3. 优点：
        ：各个对象之间解耦，它们只需关注自身功能的实现，对象之间的交互关系交给了中介者对象来实现和维护

    4. 缺点：
        ：系统每次新增一个中介者对象会让复杂性提高，中介者对象的维护变得不易
*/

//抽象店铺类
class Shop{
    constructor(name){
        this.name = name;
    }

    action(){
    }

    getName(){
        return this.name;
    }
}

//具体店铺类
class ShopA extends Shop{
    constructor(name){
        super();
        super.name = name;
    }

    action(foodname){
        console.log(`${this.name} get order: ${foodname}`);
    }
}

class ShopB extends Shop{
    constructor(name){
        super();
        super.name = name;
    }

    action(foodname){
        console.log(`${this.name} get order: ${foodname}`);
    }
}

//抽象中介类
class Mediator{
    constructor(){
        this.shops = [];
    }

    add(shop){
        this.shops.push(shop);
    }

    notice(name,foodname){
        for (let i = 0; i < this.shops.length; i++) {
            const item = this.shops[i];
            if(item.getName() === name){
                item.action(foodname);
                return;
            }
        }
        console.log(`Shop Name: ${name} not found!`);
    }
}

//具体中介类
class FoodPanda extends Mediator{
    add(shop){
        super.add(shop);
    }

    notice(name,foodname){
        super.notice(name,foodname);
    }
}

let foodpanda = new FoodPanda();
foodpanda.add(new ShopA("MCD"));
foodpanda.add(new ShopB("KFC"));
foodpanda.notice("MCD", "Burger");
console.log('----------');
foodpanda.notice("KFC", "Fried Chicken");
console.log('----------');
foodpanda.notice("PizzaHut", "Pizza");