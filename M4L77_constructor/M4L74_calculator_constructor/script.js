function Calculator() {

    this.input = document.querySelector('.display');

    this.start = () => {

        this.virtualKeysInterface();
        this.keyboardInterface();

    };

    writeDisplay = (btn) => {
        this.input.value += btn.innerText;
        this.input.focus();
    }

    clearDisplay = () => this.input.value = '';

    deleteDisplay = () => this.input.value = this.input.value.slice(0, -1);

    this.virtualKeysInterface = () => {
        document.addEventListener('click', (event) => {

            if (event.target.classList.contains('btn-num'))
                writeDisplay(event.target);

            else if (event.target.classList.contains('btn-clear'))
                clearDisplay();

            else if (event.target.classList.contains('btn-erase'))
                deleteDisplay();

            else if (event.target.classList.contains('btn-eq'))
                this.executeExpression();

        })
    }

    this.keyboardInterface = () => {
        this.input.addEventListener('keyup', (event) => {

            if (event.keyCode === 13) {
                this.executeExpression();
            } else {

                if (!this.validateExpression())
                    deleteDisplay();

            }
        })
    }

    this.validateExpression = () => {

        const expression = this.input.value;
        
        const buttons = document.querySelectorAll('.btn');
        let validTypes = [];

        buttons.forEach(button => {
            validTypes.push(button.innerText);
        });
        for (let i = 0; i < expression.length; i++) {
            if (validTypes.indexOf(expression[i]) == -1)
                return false;

        }
        return true;
    };

    this.executeExpression = () => {

        const expression = this.input.value;

        if (this.validateExpression(expression) && expression != ''){
            try {
                this.input.value = eval(expression);                
            } catch (error) {
                alert('Expressão Inválida!');
            }

        }
        else
            alert('Expressão Inválida!');

    };

}

const calc = new Calculator();
calc.start();


