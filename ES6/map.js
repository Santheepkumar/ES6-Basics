let pikachu = {
    name: 'Iam pikachu',
    power: 'I can electrify'
}

let clifary = {
    name: "clifary",
    power: "I am cute"
}

let charmander = {
    name: "charmander",
    power: 'I throw fire'
}

let pokemon = new Map();
pokemon.set('pika', pikachu);
pokemon.set('cli', clifary);
pokemon.set('char', charmander);

console.log(pokemon.get('char'))

console.log(pokemon.keys())

for (val of pokemon) {
    console.log(val)
}
