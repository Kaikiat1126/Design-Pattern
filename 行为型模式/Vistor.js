/*
    1. 为什么用？
        ：对数据的操作和数据结构分离，将对数据中各元素的操作封装成独立的类，使其在不改变数据结构的情况下拓展对数据新的操作
        ：元素的执行算法可以随着访问者改变而改变
    
    2. 使用场景：
        ：对象结构相对稳定，但其操作算法经常变化（对象需要提供多种不同且不相关的操作）
        
    3.优点：
        ：拓展性好，可以在不修改代码的情况下添加新访问者
        ：复用性好，通过访问者可以定义整个对象的通用功能，从而实现复用

    4. 缺点：
        ：增加新的元素类很困难。每增加一个新的元素类，都要在每一个具体访问者类中增加相应的具体操作
        ：访问者模式中具体元素对访问者公布细节，破坏了对象的封装性
*/

//抽象访问者
class Company{
    create(){}
}

//具体访问者
class BusinessCompany extends Company{
    create(ele){
        if(ele instanceof Plan){
            return "提供合作资金";
        }else if(ele instanceof Money){
            return "提供方案";
        }
    }
}

class ITCompany extends Company{
    create(ele){
        if(ele instanceof Plan){
            return "设计系统";
        }else if(ele instanceof Money){
            return "提供技术";
        }
    }
}

//抽象元素
class Material{
    accept(visitor){
    }
}

class Plan extends Material{
    accept(visitor){
        return visitor.create(this);
    }
}

class Money extends Material{
    accept(visitor){
        return visitor.create(this);
    }
}

//ObjectStruture对象结构
class SetMaterial{
    constructor(){
        this.list = [];
    }

    add(ele){
        this.list.push(ele);
    }

    accept(visitor){
        let str = "";
        this.list.forEach(element => {
            str += element.accept(visitor) + "\n";
        });
        return str;
    }

    remove(ele){
        this.list.filter((item) => item === ele)
    }
}

let initMaterial = new SetMaterial();
initMaterial.add(new Plan());
initMaterial.add(new Money());
let partner1 = initMaterial.accept(new BusinessCompany());
let partner2 = initMaterial.accept(new ITCompany());
console.log(partner1);
console.log('-------');
console.log(partner2);


// class Visitor{
//     constructor(visitType){
//         this.visitType = visitType;
//     }

//     visit(person){
//         if(person.name){
//             person.name = ' visitor change'
//         }
//         else{
//             person.name = ' visitor add'
//         }
//     }
// }

// //Element类
// class Element{
//     accept(){
//     }
// }

// class PersonA extends Element{
//     constructor(){
//         super();
//         this.name = 'person A';
//     }

//     accept(visitor){
//         visitor.visit(this);
//     }
// }

// class PersonB extends Element{
//     accept(visitor){
//         visitor.visit(this);
//     }
// }

// //ObjectStruture对象结构
// class Collection{
//     constructor(){
//         this.list = [];
//     }

//     add(person){
//         this.list.push(person);
//     }

//     accept(visitor){
//         this.list.forEach(element => {
//             element.accept(visitor)
//         });
//     }
// }

// let personA = new PersonA()
// let personB = new PersonB()
// let visitors = new Collection()
// visitors.add(personA)
// visitors.add(personB)
// visitors.accept(new Visitor())
// console.log(personA,personB);
