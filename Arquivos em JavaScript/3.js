            var arrayDrofo = ["<br/>Anel de invisibilidade",  "<br/>Botas magicas", "<br/>Botas magicas", "<br >Pocao do sono", "<br/>Pocao da inocencia", "<br/>Pocao da inocencia" ];
            var arrayTorper = ["<br/>Capa da invisibilidade", "<br/>Pedra do despertar", "<br/>Varinha das varinhas", "<br/>Pocao da inocencia", "<br/>Pocao da mentira", "<br/>Pocao da mentira", "<br/>Pocao anti-inteligencia"  ];

           arrayTorper.splice(4,1)
           arrayTorper.splice(1,1)
           arrayTorper.push ("<br/>Botas Magicas")
           arrayDrofo.splice(1,1)
           arrayTorper.push ("<br/>Escudo Magico")
           arrayTorper.push ("<br/>Espada Magica")
           arrayDrofo.push ("<br/>Botas Magicas")
           arrayDrofo.splice(3,1)
           arrayTorper.splice(6,1)
           arrayDrofo.push("<br/>Ovo de Dragao")
           arrayDrofo.push("<br/>Coxinha")

            document.write("INVENTÁRIO DROFO: " + arrayDrofo);

            document.write("<br/><br/>INVENTÁRIO TORPER: " + arrayTorper);


