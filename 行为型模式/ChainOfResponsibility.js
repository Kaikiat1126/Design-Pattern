/*
    1. 为什么用？
        ：

    2. 使用场景：
        ：

    3. 优点：
        ：

    4. 缺点：
        ：

*/
class handle{
    setNextNode(nextNode){
        this.nextNode = nextNode
    }

    doactionOrPassToNext(){

    }
}

class order500 extends handle {
    doactionOrPassToNext(orderType, payment, stock){
        if(orderType === 1 && payment === true){
            console.log("满五百扣二百");
        } else if(this.nextNode!=null) {
            this.nextNode.doactionOrPassToNext(orderType, payment, stock)
        }else{
            console.log("node 500 can find solver");
        }
    }
}

class order200 extends handle{
    doactionOrPassToNext(orderType, payment, stock){
        if(orderType === 2 && payment === true){
            console.log("满二百扣五十");
        } else if(this.nextNode!=null) {
            this.nextNode.doactionOrPassToNext(orderType, payment, stock)
        }else{
            console.log("node 200 can find solver");
        }
    }
}

class orderNormal extends handle{
    doactionOrPassToNext(orderType, payment, stock){
        if(stock > 0){
            console.log("normal");
        } else if(stock <= 0) {
            console.log("out of stock");
        }else if(this.nextNode!=null) {
            this.nextNode.doactionOrPassToNext(orderType, payment, stock)
        }else{
            console.log("node normal can find solver");
        }
    }
}

const n500 = new order500()
const n200 = new order200()
const n00 = new orderNormal()

n500.setNextNode(n200)
n200.setNextNode(n00)


// chainOrder500.passRequest(1, true, 500);
// chainOrder500.passRequest(2, true, 500); 
// chainOrder500.passRequest(3, true, 500);
// chainOrder500.passRequest(1, false, 0); 
n500.doactionOrPassToNext(1, true, 500);
n500.doactionOrPassToNext(2, true, 500); 
n500.doactionOrPassToNext(3, true, 500);
n500.doactionOrPassToNext(1, false, 0); 
n500.doactionOrPassToNext(1112, false,111); 


// function order500(orderType, payment, stock){
//     if(orderType === 1 && payment === true){
//         console.log("满五百扣二百");
//     } else {
//         return 'nextSuccessor';
//     }
// }
  
// function order200(orderType, payment, stock){
//     if(orderType === 2 && payment === true){
//         console.log("满二百扣五十");
//     } else {
//         return 'nextSuccessor';
//     }
// }

// function orderNormal(orderType, payment, stock){
//     if(stock > 0){
//         console.log("无折扣");
//     }else{
//         console.log("Out of stock!");
//     }
// }


// class Chain {
//     construct(fn){
//         this.fn = fn;
//         this.successor = null;
//     }

//     setNextSuccessor(successor){
//         return this.successor = successor;
//     }

//     passRequest(){
//         var res = this.fn.apply(this, arguments)

//         if(res === 'nextSuccessor'){
//             return this.successor && this.successor.passRequest.apply(this.successor, arguments);
//         }
//         return res;
//     }
// }


// const chainOrder500 = new Chain(order500);
// const chainOrder200 = new Chain(order200);
// const chainOrderNormal = new Chain(orderNormal);

// chainOrder500.setNextSuccessor(chainOrder200);
// chainOrder200.setNextSuccessor(chainOrderNormal);

// chainOrder500.passRequest(1, true, 500);
// chainOrder500.passRequest(2, true, 500); 
// chainOrder500.passRequest(3, true, 500);
// chainOrder500.passRequest(1, false, 0); 
