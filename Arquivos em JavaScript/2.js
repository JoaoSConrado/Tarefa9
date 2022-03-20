            var array1 = [];
            var array2 = [];
            var array3 = [];
        
            for (let i = 0; i < 12; i++) {
            var numeros = prompt("Escreva um numero");
            if (numeros > 50) {
            array1.push(numeros);    
            } 
            if (numeros < 50) {
            array2.push(numeros); 
            }
            if (numeros == 50) {
            array3.push(numeros); 
            }
        }

       
        document.write("Numeros digitados acima de 50: " + array1 + "!!!");
        document.write("<br/></br>Numeros digitados abaixo de 50: " + array2 + "!!!");
        document.write("<br/></br>Numeros digitados = 50: " + array3 + "!!!");
        
        
       