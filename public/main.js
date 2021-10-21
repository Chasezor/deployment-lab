console.log("script is linked")

let enemyhealth = document.getElementById('enemyhealth').value

const rollDice = () =>{
    console.log(Math.floor(Math.random() * 20))

    let damage = Math.floor(Math.random() * 20)
    enemyhealth = enemyhealth - damage
    console.log(enemyhealth)
    document.getElementById('enemyhealth').value = enemyhealth

    if(enemyhealth <= 0)
    {
        window.location.href='/pages/won.html';
    }

}
console.log(enemyhealth)
const diceBtn = document.getElementById('diceBtn');
diceBtn.addEventListener('click', rollDice)

// console.log(rollDice())
// console.log(rollDice())