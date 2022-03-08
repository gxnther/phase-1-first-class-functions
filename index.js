function Spy() {
    return "Is this what you wanted?"
}

function receivesAFunction(Spy) {
    Spy();
}

function anotherFunction() {
    return "I am god"
}

function returnsANamedFunction() {
    return anotherFunction;
}

function returnsAnAnonymousFunction() {
    return function(){
        return "hello"
    }
}

