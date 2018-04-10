function swap(a,b){

    console.log("a=", a, "b=", b);

    a = (a ^ b);
    b = (a ^ b);
    a = (a ^ b);

    console.log("a=", a, "b=", b);
}


swap(3,4);