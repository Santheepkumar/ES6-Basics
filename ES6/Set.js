// Set will only store Unique Value 

let marvel = new Set(['Ironman','Hulk','Ironman']);
marvel.add('Captain')
console.log(marvel)

for (m of marvel){
    console.log(m)
}


console.log(marvel.has('Hulk')) 