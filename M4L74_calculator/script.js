function createCalculator() {
    return {

        result: 0,
        input: document.querySelector('.display'),

        start() {

            document.addEventListener('click', (event) => {

                if (event.target.classList.contains('btn-num'))
                    this.input.value += event.target.innerText;

                else if (event.target.classList.contains('btn-clear'))
                    this.input.value = '';

                else if (event.target.classList.contains('btn-erase'))
                    this.input.value = this.input.value.slice(0, -1);

                else {
                    if(this.validateInput(this.input.value))
                        this.input.value = eval(this.input.value);
                }
            })
        },

        validateInput(input) {

            const buttons = document.querySelectorAll('.btn');
            let validTypes = [];

            buttons.forEach(button => {
                validTypes.push(button.innerText);
            });
            
            for (let i = 0; i < input.length; i++) {
                if (validTypes.indexOf(input[i]) == -1) {
                    return false;
                }
            }
            return true;
        }

    };
}

const calc = createCalculator();
calc.start();


