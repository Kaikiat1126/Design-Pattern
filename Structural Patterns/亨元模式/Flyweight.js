/*
    1. 为什么用？
        ：避免大量相似的类造成严重内存开销

    2. 应用场景：
        ：系统中有大量的相似对象
        ：细粒度的对象都具备较接近的外部状态，而且内部状态与环境无关

    3. 优点：
        ：通过共享来减少需要实例化的类的数量

    4. 缺点：
        ：为了使对象能够共享，需要将一些不能共享的状态外部化，这将增加程序的复杂化

    5. 补充：
        ：http://static.kancloud.cn/kancloud/learn-js-design-patterns/56468（享元模式与DOM, 冒泡...）
*/

//before
class bModel{
    constructor(name,gender,clothes){
        this.name = name;
        this.gender = gender;
        this.clothes = clothes;
    }

    takePhoto(){
        console.log(`${this.gender}模特${this.name}穿${this.clothes}打卡`);
    }
}

for(let i = 0; i<11; i++){
    let femaleM = new bModel(i,'男',`服装${i}`)
    femaleM.takePhoto();
}

for(let i = 11; i<21; i++){
    let maleM = new bModel(i,'女',`服装${i}`)
    maleM.takePhoto();
}


//after
//享元对象 模特
class Model{
    constructor(id,gender){
        this.gender = gender;
        this.name = ` - ${gender}${id}号`;
    }
}

//工厂
class ModelFactory{
    static create(id,gender){
        if(this[gender]){
            return this[gender];
        }
        return this[gender] = new Model(id,gender);
    }
}

//管理外部状态
class WearClothesManager{
    static wearClothes(id,gender,clothes){
        let model = ModelFactory.create(id,gender);
        this[id] = {clothes,model}
    }

    static takePhoto(id){
        let obj = this[id];
        console.log(`${obj.model.gender}模特${obj.model.name}穿${obj.clothes}打卡`);
    }
}

console.log('---------------');
let manage = new WearClothesManager();
for(let i = 0; i<11; i++){
    WearClothesManager.wearClothes(i,'男',`服装${i}`)
    WearClothesManager.takePhoto(i);
}

for(let i = 11; i<21; i++){
    WearClothesManager.wearClothes(i,'女',`服装${i}`)
    WearClothesManager.takePhoto(i);
}