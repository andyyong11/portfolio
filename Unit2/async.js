async function runRace() {
   
    let runner1 = false;
    let runner2 = false;
    let loser = '';

   
    const runner1Go = new Promise((resolve) => {
        setTimeout(() => {
            loser = 'runner1';
            resolve(true);
        }, 5000); 
    });

    const runner2Go = new Promise((resolve) => {
        setTimeout(() => {
            loser = 'runner2';
            resolve(true);
        }, 8000);
    });

    
    return [
        await runner1Go, 
        await runner2Go,
        loser 
    ];
}


runRace().then((result) => {
    console.log('Loser:', result[2],);
});
