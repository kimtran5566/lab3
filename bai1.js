function same_diff(){
    let a = -3;
    let b = 4;
    
    if(a*b > 0){
        output = "same";
    }
    else{
        output = "diff";
    }

    return output;
}
console.log(same_diff());