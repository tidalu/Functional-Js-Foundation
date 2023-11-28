// function composition is so powerfull but every function needs to behave the same way 

// takke one input and one output

// whatif i have a function i want to use that expects two inputs - this is 'arity mismatch'

// - we need to decoraate out function to prefill one of its inputs

// this means creating a new function that calls out multi-argument function with he argument and the multi-argument function stored conveniently in the backpack



const multiply = (a, b) => a * b

function prefillFunction (fn, prefilledValue) {
    const inner = (liveInput) => {
        const output = fn (liveInput, prefilledValue)
        return output
    }

    return inner
}


const multiplyBy2 =prefillFunction(multiply, 2)


const result = multiplyBy2(5) 

console.log(result)