
const fields = [
    { txt: 1, col: 1, row: 4 },
    { txt: 2, col: 2, row: 4 },
    { txt: 3, col: 3, row: 4 },
    { txt: 4, col: 1, row: 3 },
    { txt: 5, col: 2, row: 3 },
    { txt: 6, col: 3, row: 3 },
    { txt: 7, col: 1, row: 2 },
    { txt: 8, col: 2, row: 2 },
    { txt: 9, col: 3, row: 2 },
    { txt: 0, col: '1/3', row: 5 },
    { txt: 'C', col: 4, row: 2 },
    { txt: '+', col: 4, row: 3 },
    { txt: '-', col: 4, row: 4 },
    { txt: '=', col: 4, row: 5 },
    { txt: '.', col: 3, row: 5 },
    { txt: 'Display', col: '1/5', row: 1 }
];




class Calc {
    constructor() {
        this.clearFlag = false;
        this.memory = 0;
        this.op = 0;
        this.container = document.createElement('div');
        this.container.id = 'container';
        this.display = null;
        this.createButtons();

    }
    createButtons() {
        fields.forEach(el => {
            const button = document.createElement('div');
            button.textContent = el.txt;
            button.style.gridColumn = el.col;
            button.style.gridRow = el.row;
            if (el.txt === 'Display') {
                this.display=button;
                button.textContent = 0;
            } else {
                button.addEventListener('click', ev => this.handleClick(ev));
            }
            this.container.appendChild(button);
        });
    }
    init() {
        document.body.appendChild(this.container);
    }
    set disp(val) {
        this.display.textContent = val;
    }
    get disp(){
        return  parseFloat(this.display.textContent);
    }
    handleClick(ev) {
        const key = ev.target.textContent;
        switch (key) {
            case 'C':
                this.clearFlag = false;
                this.disp = 0;
                this.memory = 0;
                this.op = 0;

                break;
            case '+':
            case '-':
                if (this.op === 0) {
                    this.memory = this.disp;
                } else {
                    this.memory += this.op * this.disp;
                }
                this.op = key === '+' ? 1 : -1;
                this.clearFlag = true;
                break;
            case '=':
                if (this.op === 0) {
                    this.memory = this.disp;
                } else {
                    this.memory += this.op * this.disp;
                }
                this.op = 0;
                this.disp = this.memory;
                break;
            default:
                if (key === '0' && this.disp === 0) return;
                if (key === '.' && disp.textContent.includes('.') || this.clearFlag) return;
                if ((key !== '.' && this.disp === 0) || this.clearFlag) {
                    this.disp = key;
                    this.clearFlag = false;
                } else {
                    this.disp += key;
                }


        }
    }
}
const calc = new Calc();

window.addEventListener('DOMContentLoaded', () => calc.init());