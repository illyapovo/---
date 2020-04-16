function spin() {
    for (let i = 0;  i< 1000; i++) {
        let x=Math.floor(Math.random()*9);
        document.getElementById("table").innerHTML=x;

    }
}
