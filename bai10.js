function check_number(n)
{
    let s = 0;
    for (let i = 0; i < n; i++)
        if(n % i === 0) {
            s += i;
        }
    if(s==n) return true;
    return false;
}
console.log(check_number(6))