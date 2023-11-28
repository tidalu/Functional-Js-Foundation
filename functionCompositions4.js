const multiplyBy2 = x => x*2
const add3 = x => x + 3
const divideBy5 = x => x /5 

const initialResult = multiplyBy2(11)
const nextStep = add3(initialResult)
const  finalStep = divideBy5(nextStep)


// second step
c = divideBy5(add3(multiplyBy2(11)))

console.log(c)

const reduce = (array, howToCombine, buildUp) => {
    for (let i = 0; i < arr; i++ ) {
        buildUp = howToCombine(buildUp, array[i])

    }
    return buildUp
}

const runFunctionOnInput = (input , fn) => {
    return fn(input)
}

const output = reduce([
    multiplyBy2,
    add3 ,
    divideBy5],
    runFunctionOnInput,
    11
)

// function composition with reduce

// ramda library learn this library 


