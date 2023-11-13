function power(x, n){
 
    let result = 1;
    while(n--){
        result = result * x;
    }
    return result;
}
console.log(power(3, 2));