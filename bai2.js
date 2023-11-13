function check_month(month)
{
    if(month <= 3){
        output = "quy 1";
    }
    else if(month > 3 && month <= 6){
        output = "quy 2";
    }
    else if(month > 6 && month <= 9){
        ouput = "quy 3";
    }
    else if(month > 9 && month <= 12){
        output = "quy 4";
    }
    return output;
}
console.log(check_month(5));