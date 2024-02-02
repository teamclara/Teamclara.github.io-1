let totalCount = 0;
function handleClick(id) {
    const newValue = totalCount % 2 === 0 ? 'X' : 'O';
    const h1Element = document.getElementById(`h1_${id}`);
    
    if (newValue=='X'  ){
      h1Element.innerText = newValue;
      h1Element.style.color = 'red';
    }
    else if (newValue=='O' ){
      h1Element.innerText = newValue;
      h1Element.style.color = 'yellow';
    }
    checkWinner();
    totalCount++; 
}

function checkWinner() {
    const values = [];

    for (let i = 1; i <= 9; i++) {
        values.push(document.getElementById(`h1_${i}`).innerText);
    }
    const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    const cols = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
    const diagonals = [[0, 4, 8], [2, 4, 6]];

    for (const row of rows.concat(cols, diagonals)) {
        if (values[row[0]] && values[row[0]] === values[row[1]] && values[row[0]] === values[row[2]]) {
            alert(`Winner! ${values[row[0]]} wins!`);
            //location.reload();
            return;
        }
    }
}

for (let i = 1; i <= 9; i++) {
    document.getElementById(`h1_${i}`).addEventListener('click', function() {handleClick(i);});
}

