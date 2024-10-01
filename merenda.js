function rimuoviDuplicati(arr) {
    // uso la funzione set perchè non permette duplicati
    let noDuplicates = new Set(arr);
    // controllo che valore restituisce set
    console.log(noDuplicates)
    // ritorno l'array dei non duplicati
    // prima pero devo riportare il set ad un array con lo spread operator
    return [...noDuplicates]
}