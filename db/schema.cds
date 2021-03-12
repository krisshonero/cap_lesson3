using {managed, cuid ,Currency} from '@sap/cds/common';
namespace sap.example3;

aspect Precio{
  valor: Decimal(10, 2);
  moneda: Currency;
}

entity Autos : managed, cuid, Precio{//un auto esta compuesto por un modelo
  nombre  : String(111);
  paisOrigen  : String(1111);
  comentario: String(1111);
  modelo: Composition of Modelos;
}

entity Modelos:managed, cuid{//Un modelo puede estar asociado a muchos autos
    autos: Association to many Autos on autos.modelo=$self;
    marca: Association to Marcas;
    nombre:String(111);
    tipo:String(111);
}

entity Marcas: managed,cuid{//una marca puede estar asociada a la creacion de muchos modelos
  modelos: Association to many Modelos on modelos.marca=$self;
  nombre: String
}