/*
    1. 使用场景：
        ：如果一种特定类型的问题，被提问的频率够高，那么它就可能值得将这个问题的个个实例表述为一个简单语言中的句子。
          这样就可以构建一个解释器，该解释器可以通过解释这些句子来解决提出的问题
    
    2. 优点：
        ：易于改变和扩展文法
        ：在解释器模式中使用类来表示语言的文法规则，所以可以通过继承等机制来改变或扩展文法

    3. 缺点：
        ：对于复杂的文法比较难维护
        ：执行效率较低，因为在解释器模式中使用了大量的循环和递归，因此在解释较为复杂的句子时其速度慢

*/

class AbstractExpression{
    interpret(context){}
}

class TerminalExpression extends AbstractExpression{
    interpret(context){
        console.log("This is Terminal Expression");
    }
}

class NonTerminalExpression extends AbstractExpression{
    interpret(context){
        console.log("This is non Terminal Expression");
    }
}

class Context{
    constructor(input,output){
        this.input = input;
        this.output = output;
    }
}

let context = new Context();
let list = [];
list.push(new TerminalExpression());
list.push(new NonTerminalExpression());
list.push(new TerminalExpression());
list.forEach(item => {
    item.interpret(context)
}); 