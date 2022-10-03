// 不管你系统里有多少东西，有多复杂，只暴漏给外面统一的接口（只暴露出一个类解决所有的事情）

//不符合开闭，修改困难
class IfeatureObj {
    doSomething() {
        //pass
    }
}

class VCalidate extends IfeatureObj {
    doSomething() {
        console.log("check if account exist");
    }
}

class Login extends IfeatureObj {
    doSomething() {
        console.log("logining");
    }
}

class WriteToFile extends IfeatureObj {
    doSomething() {
        console.log("wrting to file");
    }
}

// 对外接口
class Tools {
    static ifAccExist() {
        new VCalidate().doSomething()
    }

    static login() {
        new Login().doSomething()
    }

    static writeToFile() {
        new WriteToFile().doSomething()
    }
}


Tools.ifAccExist()
Tools.login()
Tools.writeToFile()
