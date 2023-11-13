
function isprime(n){

    if (n <2) return 0; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/
    
    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    let i = 2;
    while(i <n){
        if( n%i==0 ) {
            return false;/*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
        }
        i++;
    }

    return true;
}

let n= 40;

let i = 2, check=0, result ="";
   while (i < n){
    check = isprime(i);
    if( check == 1 ) result += i + " ";
    ++i;
}
console.log(result); 