to use decimals, it is necesary add a header

Content-Type 
application/json;IEEE754Compatible=true

and in the body of post for this example would be:

{
      "Autos":[
            { 
                "nombre": "Auto2",
                "paisOrigen": "Italiano",
                "comentario": "esto es un auto"
            }
      ],
      "Marca":"marca1",
      "Modelo":"modelo1",
      "Precio":[{
          "valor": "15.50",
          "moneda_code":""
      }]
    }