// 给client一个选择，让他们可以回到某对象之前的某个状态
// 内存占用过大

class Memo {
    constructor(state) {
        this.state = state
    }

    getState() {
        return this.state
    }
}

class CurrentMemoState {
    constructor() {
        this.state = null
    }

    setState(state) {
        this.state = state
    }

    getState() {
        return this.state;
    }

    saveStateToMemo() {
        return new Memo(this.state)
    }

    getStateFromMemo(memo) {
        this.state = memo.getState()
    }
}


class MemoStorer {
    constructor() {
        this.memos = []
    }

    addMemo(memo) {
        this.memos.push(memo)
    }

    getMemo(index) {
        return this.memos[index]
    }
}

let memoStorer = new MemoStorer()
let currentMemoState = new CurrentMemoState()

currentMemoState.setState("State #1");
memoStorer.addMemo(currentMemoState.saveStateToMemo())

currentMemoState.setState("State #2");
memoStorer.addMemo(currentMemoState.saveStateToMemo())

currentMemoState.setState("State #3");
memoStorer.addMemo(currentMemoState.saveStateToMemo())

currentMemoState.getStateFromMemo(memoStorer.getMemo(1))
console.log(currentMemoState.getState());