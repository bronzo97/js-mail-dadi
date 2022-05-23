let games = 6;
const CPU = [];
const player = [];


for(i = 0; i < games; i++) {
    CPU.push((Math.floor(Math.random() * 6) + 1));
    console.log(`Numero CPU ${CPU[i]}`);

    player.push((Math.floor(Math.random() * 6) + 1));
    console.log(`Tuo numero: ${player[i]}`);

    if (CPU[i] > player[i]) {
        console.log('Hai perso!');
    } else if (CPU[i] < player[i]) {
        console.log('Hai vinto');
    } else {
        console.log('Hai pareggiato');
    }
}
