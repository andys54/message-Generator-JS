const generateMessage = () => {
    const parts = [
        ["Porsche", "Audi", "BMW", "Mercedes"],
        [200, 300, 400, 800],
        [1970, 1980, 1990, 2000]
    ]

    const numGen = () => {
        return Math.floor(Math.random() * 4)
    }

    let sentence = [];

    for (let part in parts) {
        sentence.push(parts[part][numGen()])
    }
    let final = `Your future car is gonna be a ${sentence[0]} with ${sentence[1]} HP from ${sentence[2]}.`
    console.log(final);

}

generateMessage();
console.log("That was my message generator")

