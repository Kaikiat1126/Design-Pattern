// 间接访问，权限控制

//需要中转，消耗系统性能

class IFile {
    open() {
        //pass
    }
}
class File extends IFile {
    constructor(fileName) {
        super()
        this.fileName = fileName
    }

    open() {
        console.log(`open ${this.fileName}`);
    }

    update() {
        console.log(`update ${this.fileName}`);
    }

    delete() {
        console.log(`delete ${this.fileName}`);
    }
}

class Shortcut extends IFile {
    constructor(fileName) {
        super()
        this.fileName = fileName
        this.file = new File(fileName)
    }

    open() {
        this.file.open()
    }
}

// let f = new Shortcut("js_demo.js")
// f.delete()
// f.open()

class ShortcutPlus extends IFile {
    constructor(role, fileName) {
        super()
        this.fileName = fileName
        this.role = role
        this.file = new File(fileName)
    }

    open() {
        this.file.open()
    }

    delete() {
        if (this.role == "admin") {
            this.file.delete()
        } else {
            console.log("you don't have the right to delete");
        }

    }
}

let ff = new ShortcutPlus("vistor", "demo.js")
ff.open()
ff.delete()
console.log("-------------");
let fff = new ShortcutPlus("admin", "demo.js")
fff.open()
fff.delete()