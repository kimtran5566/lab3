function sum(n){
    let s = 0;
        for(let i = 1; i <= n; i++) 
            {
                if(n%i == 0){
                    if(i % 2 == 0){
                        s++;
                    }
                }
            }
            return s;
    }
   console.log(sum(8))