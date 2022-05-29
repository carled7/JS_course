let persons = [];

function createPerson(name, lastName, weight, height) {
    return { name, lastName, weight, height }
}

function addPerson() {
    persons.push(createPerson(document.querySelector('#name').value, document.querySelector('#lastname').value,
        document.querySelector('#weigth').value, document.querySelector('#heigth').value))
    printPersons();
}

function printPersons() {

    for(let i = document.querySelector('#output').children.length; i < persons.length; ++i){

        const output = document.createElement("p");
        const text = document.createTextNode
        
        (`${persons[i].name} ${persons[i].lastName} ${persons[i].weight} ${persons[i].height}`);

        output.appendChild(text);

        document.querySelector('#output').appendChild(output);
    }
}