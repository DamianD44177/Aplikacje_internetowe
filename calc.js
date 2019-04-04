/*
#container > div:nth-child(1){
    grid-row: 4;
    grid-column: 1;
}

#container > div:nth-child(2){
    grid-row: 4;
    grid-column: 2;
}

#container > div:nth-child(3){
    grid-row: 4;
    grid-column: 3;
}

#container > div:nth-child(4){
    grid-row: 3;
    grid-column: 1;
}

#container > div:nth-child(5){
    grid-row: 3;
    grid-column: 2;
}

#container > div:nth-child(6){
    grid-row: 3;
    grid-column: 3;
}

#container > div:nth-child(7){
    grid-row: 2;
    grid-column: 1;
}

#container > div:nth-child(8){
    grid-row: 2;
    grid-column: 2;
}

#container > div:nth-child(9){
    grid-row: 2;
    grid-column: 3;
}

#container > div:nth-child(10){
    grid-row: 5;
    grid-column: 1/3;
}

#container > div:nth-child(11){
    grid-row: 2;
    grid-column: 4;
}

#container > div:nth-child(12){
    grid-row: 3;
    grid-column: 4;
}

#container > div:nth-child(13){
    grid-row: 4;
    grid-column: 4;
}

#container > div:nth-child(14){
    grid-row: 5;
    grid-column: 4;
}

#container > div:nth-child(15){
    grid-row: 5;
    grid-column: 3;
}

#container > div:nth-child(16){
    grid-row: 1;
    grid-column: 1/5;
}

*/



const fields = [
    { txt: 1, col: 1, row: 4},
    { txt: 2, col: 2, row: 4},
    { txt: 3, col: 3, row: 4},
    { txt: 4, col: 1, row: 3},
    { txt: 5, col: 2, row: 3},
    { txt: 6, col: 3, row: 3},
    { txt: 7, col: 1, row: 2},
    { txt: 8, col: 2, row: 2},
    { txt: 9, col: 3, row: 2},
    { txt: 0, col: '1/3', row: 5},
    { txt: 'C', col: 4, row: 2},
    { txt: '+', col: 4, row: 3},
    { txt: '-', col: 4, row: 4},
    { txt: '=', col: 4, row: 5},
    { txt: '.', col: 3, row: 5},
    { txt: 'Display', col: '1/5', row: 1}
 ];

const init = () => {
    const container = document.createElement('div');
    container.id = 'container';

    fields.forEach(el => {
        const button = document.createElement('div');
        button.textContent = el.txt;
        button.style.gridColumn = el.col;
        button.style.gridRow = el.row;
        if (el.txt === 'Display'){
            button.id = 'display';
        } else {
            button.addEventListener('click', ev => {        //EventListener wywołuje event-y
                const d = document.getElementById('display');
                d.textContent = ev.target.textContent;
            });
        }

        container.appendChild(button);
    });

    document.body.appendChild(container);

}

window.addEventListener('DOMContentLoaded', init);


