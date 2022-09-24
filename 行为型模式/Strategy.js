/*
    1. 为什么用？
        ：策略模式可以对算法进行封装，使算法责任与算法实现分离，并分配给不同的对象进行管理，当然也可以相互替换
          并且不影响算法使用者

    2. 使用场景：
        ：只要业务规则指向目标一致，就可用于封装业务规则，业务算法（折扣活动）

    3. 优点：
        ：利用组合，委托等技术和思想，避免很多if else条件语句

    4. 缺点：
        ：使用者必须清楚知道所有的策略类并且自行决定要使用哪个，理解算法区别

    5. 补充：
        ：https://juejin.cn/post/6844903504109109262 （策略模式表单效验）
*/


//策略类
class Strategy{
    calculate(){

    }
}

class Member extends Strategy{
    calculate(amount){
        return amount * 0.1;
    }
}

class VIP extends Strategy{
    calculate(amount){
        return amount * 0.2;
    }
}

class VVIP extends Strategy{
    calculate(amount){
        return amount * 0.3;
    }
}

//Context类
class Context{
    constructor(){
        this.amount = null;
        this.strategy = null;   //会员等级应对
    }

    setAmount(amount){   //消费金额
        this.amount = amount;
    }

    setStrategy(strategy){
        this.strategy = strategy;
    }

    getDiscount(){
        return this.strategy.calculate(this.amount);
    }
}

let discount = new Context();
discount.setAmount(2000);
discount.setStrategy(new VIP());
console.log(discount.getDiscount());