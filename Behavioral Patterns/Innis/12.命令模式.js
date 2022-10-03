/*请求以命令的形式包裹在对象中，并传给调用对象。调用对象寻找可以处理该命令的合适的对象，
并把该命令传给相应的对象，该对象执行命令。 */

// 1. 可以批量处理命令，而且可以自定义顺序
// 2. 可以无视命令的发送者和接收者（只编排命令即可，无需关注谁执行，谁被执行），实现请求和处理的解耦
// 降低耦合度，提高可扩展性，可以任意添加命令
// 会导致系统中存在过多的命令类，增加系统复杂度


class ICommand {
    excute() {
        //pass
    }
}

class Kunkun {
    sing() {
        console.log("ji ni tai mei~");
    }

    dance() {
        console.log("kunkun is dancing");
    }

    rap() {
        console.log("kunkun is rapping");
    }
}
J
class TeacherLiu {
    thanks() {
        console.log("shuan Q");
    }
}

class SingCommand extends ICommand {
    constructor(Kunkun) {
        super();
        this.Kunkun = Kunkun;
    }

    excute() {
        this.Kunkun.sing();
    }
}

class DanceCommand extends ICommand {
    constructor(Kunkun) {
        super();
        this.Kunkun = Kunkun;
    }

    excute() {
        this.Kunkun.dance();
    }
}

class RapCommand extends ICommand {
    constructor(Kunkun) {
        super();
        this.Kunkun = Kunkun;
    }

    excute() {
        this.Kunkun.rap();
    }
}

class ThanksCommand extends ICommand {
    constructor(TeacherLiu) {
        super();
        this.TeacherLiu = TeacherLiu;
    }

    excute() {
        this.TeacherLiu.thanks();
    }
}

class Invoker {
    constructor() {
        this.commands = [];
    }

    addCommand(command) {
        this.commands.push(command);
    }

    execute() {
        this.commands.forEach(command => {
            command.excute();
        });
    }
}


let kunkun = new Kunkun();
let teacherLiu = new TeacherLiu();

let singCommand = new SingCommand(kunkun);
let danceCommand = new DanceCommand(kunkun);
let rapCommand = new RapCommand(kunkun);
let thanksCommand = new ThanksCommand(teacherLiu);

let invoker = new Invoker();
invoker.addCommand(singCommand);
invoker.addCommand(thanksCommand);
invoker.addCommand(danceCommand);
invoker.addCommand(thanksCommand);
invoker.addCommand(rapCommand);

invoker.execute();

