/*
    1. 为什么用？
        ：Subject/被观察者和观察者分离，不是主动触发而是被动监听，两者解耦

    2. 使用场景：
        ：当一个对象的改变会同时改变其他对象的时候

    3. 优点：
        ：观察者与被观察者之间是松耦合，各自可以独立变化
        ：在观察者和被观察者之间建立了一个抽象的耦合,由于耦合是抽象的,所以可以很容易扩展观察者和被观察者

    4. 缺点：
        ：观察者之间细节依赖过多（触发机制）,会增加时间消耗（通知观察者）和程序的复杂程度

*/

//被观察者/目标者类
class Subject{
    constructor(){
        this.member = [];
    }

    add(observer){
        this.member.push(observer);
    }

    remove(observer){
        this.member.filter((item) => item === observer);
    }

    notice(){
        this.member.forEach((item) => {item.update();})
    }
}

//观察者对象
class Observer{
    constructor(name){
        this.name = name;
    }

    update(){
       console.log(`${this.name} get message!`);
    }
}

class Leader extends Subject{
    constructor(name){
        super();
        this.name = name;
    }

    notice(){
        super.notice();
    }
}

class Member extends Observer{
    constructor(name){
        super();
        this.name = name;
    }

    update(){
        super.update();
    }
}

let innis = new Leader("innis")
let kk = new Member("kk")
let lennon = new Member("lennon")
innis.add(kk)
innis.add(lennon)
innis.notice();

// let subj = new Subject();
// let person1 = new Observer("Person1");
// let person2 = new Observer("Person2");
// subj.add(person1);
// subj.add(person2);
// subj.notice();