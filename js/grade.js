function calculate(){
    var a=parseInt(document.getElementById('bookOne').value);
    var b=parseInt(document.getElementById('bookTwo').value);
    var c=parseInt(document.getElementById('bookThree').value);
    var d=parseInt(document.getElementById('bookFour').value);
    var e=parseInt(document.getElementById('bookFive').value);

    if (a>100 || b>100 || c>100 || d>100 || e>100){
        alert("Please enter correct value");
    }
    else{
        var obtain=a+b+c+d+e;
        document.getElementById("obtain").innerHTML=obtain;
        var per=obtain/500*100;
        document.getElementById("per").innerHTML=per;
        if (a>33 && b>33 && c>33 && d>33 && e>33){
            document.getElementById("remarks").innerHTML='Pass';
        }
        else{
            document.getElementById("remarks").innerHTML='Fail';
        }
        if (per>=80){
            document.getElementById('grade').textContent="A+";
        }
        else if (per>=70){
            document.getElementById('grade').textContent="A";
        }
        else if (per>=60){
            document.getElementById('grade').textContent="A-";
        }
        else if (per>=50){
            document.getElementById('grade').textContent="B";
        }
        else if (per>=40){
            document.getElementById('grade').textContent="C";
        }
        else if (per>=33){
            document.getElementById('grade').textContent="D";
        }

    }
}

