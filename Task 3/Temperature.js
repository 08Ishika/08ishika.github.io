
    function check(){

        var x = document.getElementById("cel").checked;
        var y = document.getElementById("far").checked;
        var z = document.getElementById("kel").checked;

        if(x==true){
            document.getElementById("cel1").disabled=true;
            document.getElementById("far1").disabled=false;
            document.getElementById("kel1").disabled=false;
            document.getElementById("far1").checked=true;

        }
        else if(y==true){
            document.getElementById("far1").disabled=true;
            document.getElementById("cel1").disabled=false;
            document.getElementById("kel1").disabled=false;
            document.getElementById("cel1").checked=true;
        }
        else if(z==true){
            document.getElementById("kel1").disabled=true;
            document.getElementById("far1").disabled=false;
            document.getElementById("cel1").disabled=false;
            document.getElementById("cel1").checked=true;
        }

    }
    function convert(){
        var x = document.getElementById("cel");
        var y = document.getElementById("far");
        var z = document.getElementById("kel");

        var a = document.getElementById("cel1");
        var b = document.getElementById("far1");
        var c = document.getElementById("kel1");

        var values = document.getElementById("temp").value;
        let valAsNumber = parseFloat(values);
        var num = /^[0-9]+$/;
        if(values.length==0){
            alert("Please provide an input");
            document.getElementById("value").value="";
            return false;
            
        }
        else if(!values.match(num)){
            alert("Invalid Input.\nInput must be numeric");
            document.getElementById("temp").value="";
            document.getElementById("value").value="";
            return false;
            
        }
        if(x.checked && b.checked){
            
            const val = (valAsNumber*9/5)+32;
            document.getElementById("value").value=val+" \xB0F";
            lab2.innerHTML="Celsius";
            lab3.innerHTML="Fahrenheit"; 
        }
        else if (x.checked && c.checked){
            const val = valAsNumber + 273.15;
            document.getElementById("value").value=val+" K";
            lab2.innerHTML="Celsius";
            lab3.innerHTML="Kelvin"; 

        }
        else if(y.checked && a.checked){
            const val = (valAsNumber-32)*5/9;
            document.getElementById("value").value=val+" \xB0C";
            lab2.innerText="Fahrenheit";
            lab3.innerText="Celsius";  
        
        }
        else if( y.checked && c.checked){
            const val = (valAsNumber-32) + 273.15;
            document.getElementById("value").value=val+" K";
            lab2.innerHTML="Fahrenheit";
            lab3.innerHTML="Kelvin"; 
        }
        else if( z.checked && a.checked){
            const val = (valAsNumber-273.15);
            document.getElementById("value").value=val+" K";
            lab2.innerHTML="Kelvin";
            lab3.innerHTML="Celsius"; 

        }
        else if(z.checked && b.checked){
            const val = (valAsNumber-273.15)*(9/5)+32;
            document.getElementById("value").value=val+" K";
            lab2.innerHTML="Kelvin";
            lab3.innerHTML="Fahrenheit"; 

        }
        
    }
