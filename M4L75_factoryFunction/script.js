
function personFactory(name, lastName, weight, height) {
    return {
        name,
        lastName,
        get fullName(){
            return `${this.name} ${this.lastName}`;
        },
        set fullName(args){
            args = args.split(' ');
            this.name = args.shift();
            this.lastName = args.join(' ');
        },
        weight,
        height,
        get imc() {
            const i = this.weight/(this.height ** 2);
            return i.toFixed(2);
        },
        printData(){
            console.log(this.fullName.toUpperCase());
            console.log("Weight: ", this.weight, "Kg");
            console.log("Height: ", this.height, "m");
            console.log("IMC: ", this.imc);
            console.log("-----------------------");
        }
    }
}

let people = [];
let p1 = personFactory("Carlos", "de Ávila", 60, 1.7)
let p2 = personFactory("Rayane", "Nunes", 57, 1.58);
let p3 = personFactory();

people.push(p1, p2, p3);

p3.fullName = "Maria de Fátima";

for (const person of people) {
    person.printData();
}