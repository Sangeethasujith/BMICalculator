function calcualteBMI()
{
    var height=document.getElementById("h-id").value;
    height=height/100;
    var weight=document.getElementById("w-id").value;
    var result=weight/(height*height);
    
    document.getElementById("bmi-output").innerHTML=result;

    //alert(result);

    if(result < 18.5){
        document.getElementById("bmi-status").innerHTML = "Underweight";
    }
    else if(result < 25){
        document.getElementById("bmi-status").innerHTML = "Healthy";
    }
    else if(result < 30){
        document.getElementById("bmi-status").innerHTML = "Overweight";
    }
    else{
        document.getElementById("bmi-status").innerHTML = "Obesity";
    }

}