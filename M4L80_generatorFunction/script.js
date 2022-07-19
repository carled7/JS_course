
function* generatorFunction() {

    yield '1';
    yield '2';
    yield '3';

}

const f1 = generatorFunction()

console.log(f1.next());
console.log(f1.next());
console.log(f1.next());
console.log(f1.next());
console.log(f1.next());

