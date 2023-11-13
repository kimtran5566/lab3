function sum(n){
    let s = 0;
    for(let i = 1; i <= n; i++){
        s = s + (1/(2*i));
    }
    return s;
}
console.log(sum(5));