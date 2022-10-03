// 想转换对象的内部状态，直接传参进去就行，非常方便

// 违反开闭，增加复杂性

class IState {
    doReaction() {
        //pass
    }
}



class FightState extends IState {
    doReaction(environment) {
        console.log("Going to fighting");
        environment.setState(this)
    }

    toString() {
        return "fighting";
    }
}

class RelaxState extends IState {
    doReaction(environment) {
        console.log("Going to relaxing");
        environment.setState(this)
    }

    toString() {
        return "relaxing";
    }
}

class Environment {
    constructor() {
        this.state = null
    }

    setState(state) {
        this.state = state
    }

    getState() {
        return this.state
    }

}


let env = new Environment()

let fightState = new FightState()
fightState.doReaction(env)

console.log(env.getState().toString());

let relaxState = new RelaxState()
relaxState.doReaction(env)

console.log(env.getState().toString());

