const cds = require ('@sap/cds')
const {Marcas, Autos, Modelos} = cds.entities;


module.exports = async (srv) =>{
    
    srv.on('anadeAutos',async (req,res)=>{ 
        const data_auto=req.data.Autos
        const data_marca=req.data.Marca
        const data_modelo=req.data.Modelo
        const data_precio=req.data.Precio
        console.log(data_auto,data_marca,data_modelo,data_precio);
        console.log(data_auto[0].nombre,data_auto[0].paisOrigen,data_auto[0].comentario);
        
        const exist_marca= await SELECT.from(Marcas).where({nombre:data_marca})
        const exist_modelo= await SELECT.from(Modelos).where({nombre:data_modelo})
        //console.log(exist_marca)
        //console.log(exist_modelo)
        if(exist_marca && exist_modelo){
            //const id_marca= await SELECT.columns(ID).from(Marcas).where({nombre:data_marca})
            const id_modelo= await SELECT.from(Modelos).columns(['ID']).where({nombre:data_modelo})
            console.log(id_modelo)
            const result = await INSERT.into(Autos).columns(['nombre', 'paisOrigen', 'comentario','modelo_ID','valor'])
                    .rows ([[data_auto[0].nombre,data_auto[0].paisOrigen,data_auto[0].comentario,id_modelo[0].ID,data_precio[0].valor]]) 
            //console.log("Result:",result)
            return 'Insert success';
        }else{
            return 'Error en Marca o Modelo';
        }
    })
}
