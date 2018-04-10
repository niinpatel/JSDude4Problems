function rand5(){
    return ((Math.random() * 4) + 1);
}


function rand7(){
    return (rand5()/5 * 2) + 5;
}

console.log(rand7());
