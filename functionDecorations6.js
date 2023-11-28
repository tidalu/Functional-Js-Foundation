// functional decoration

// - now we can convert functions more easily to make them suit our task 

// without writing a new function from scratch

// we can run code on their bits of code to appear to change them

const  oncify = (convertMe) => {
    let counter = 0;
    const inner = (input) => {
        if(counter === 0) {
            const output = convertMe(input)
            counter++
            return output
        }
        return "Sorry"
    } 
    return inner
}

const multiplyIt2 = num => num*2

const oncifyedMultiplyBy2 = oncify(multiplyIt2)

oncifyedMultiplyBy2(10) // 20
oncifyedMultiplyBy2(7) // "Sorry"