function Calculator() {

    this.input = document.querySelector('.display');

    this.start = () => {

        document.addEventListener('click', (event) => {

            if (event.target.classList.contains('btn-num'))
                this.input.value += event.target.innerText;

            else if (event.target.classList.contains('btn-clear'))
                this.input.value = '';

            else if (event.target.classList.contains('btn-erase'))
                this.input.value = this.input.value.slice(0, -1);

            else if (event.target.classList.contains('btn-eq')) {
                if (this.validateInput(this.input.value))
                    this.executeExpression(this.input.value);
                else
                    this.input.value = '';
            }
        })

    };

    this.validateInput = (input) => {

        const buttons = document.querySelectorAll('.btn');
        let validTypes = [];

        buttons.forEach(button => {
            validTypes.push(button.innerText);
        });

        for (let i = 0; i < input.length; i++) {

            if (validTypes.indexOf(input[i]) == -1)
                return false;

        }
        return true;
    };

    this.executeExpression = (expression) => {
        try {
            this.input.value = eval(expression);
        } catch (error) {
            alert("Conta inválida");
        }
    };

}

const calc = new Calculator();
calc.start();


