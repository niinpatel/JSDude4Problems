function swap(a,b){

    console.log("a=", a, "b=", b);

    var temp = a;
    a = b;
    b = temp;

    console.log("a=", a, "b=", b);
}


swap(3,4);