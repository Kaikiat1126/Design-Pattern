// 适用于类的接口不一样，用来转接

//问题：适配完不知道到底是用的哪个接口了


class IBritishStandard {
    get250V() {
        //pass
    }

    useBritishPlug() {
        //pass
    }
}

class IChinaStandard {
    get220V() {
        //pass
    }

    useChinaPlug() {
        //pass
    }
}

class Mlaptop extends IBritishStandard {
    get250V() {
        console.log("getting 250v");
    }

    useBritishPlug() {
        console.log("uesing British plug");
    }
}

// class Claptop extends IChinaStandard {
//     get220V() {
//         console.log("getting 220v");
//     }

//     useChinaPlug() {
//         console.log("uesing China plug");
//     }
// }

class Adapter extends IChinaStandard {
    get220V() {
        new Mlaptop().get250V();
    }

    useChinaPlug() {
        new Mlaptop().useBritishPlug();
    }
}

class ClaptopPlus extends IChinaStandard {
    get220V() {
        new Adapter().get220V()
    }

    useChinaPlug() {
        new Adapter().useChinaPlug()
    }
}

let myLaptop = new ClaptopPlus();
myLaptop.get220V()
myLaptop.useChinaPlug()