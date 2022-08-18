const people = ['JoHn', 'ChrISTiana', 'anThoNY', 'MARia', 'jaMeS', 'MIChaEl', 'jeNNIFeR'];

function refactor(people) {
    let newPeople = [];
    for (let i=0; i < people.length; i++) {
        let name = people[i].charAt(0).toUpperCase() + people[i].slice(1).toLowerCase();
        newPeople.push(name);
    }
    return newPeople;
}

function tidyArray(array, callback) {
    return callback(array);
}

console.log(tidyArray(people, refactor));