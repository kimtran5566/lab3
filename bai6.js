function list(n)
{
    for (let i = 0; i <= n; i++)
        if(n % i === 0) console.log(i);
}
console.log(list(10))