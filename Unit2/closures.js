// Create a function as described in step 3
function createCharacter(Name, HP, ...moves) {
    let hp = HP;
    let name = Name;
    let movesList = moves;

    return {
        getHP: function() {
            return hp;
        },
        getName: function() {
            return name;
        },
        displayMoves: function() {
            let movesDiv = document.querySelector('.moves');
            for (let move of movesList) {
                let moveParagraph = document.createElement('p');
                moveParagraph.textContent = move;
                movesDiv.appendChild(moveParagraph);
            }
        }
    };
}

let character = createCharacter("Player 1", 100, "Attack", 100, "Defense",100, "Heal", 100);


character.displayMoves();


console.log("HP:", character.getHP());
console.log("Name:", character.getName());
