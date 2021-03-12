using { sap.example3 as tablas } from '../db/schema';
service CatalogService @(path:'/api') {

  entity misAutos as SELECT from tablas.Autos {*
  } excluding { createdBy, modifiedBy, createdAt, modifiedAt };
  entity modelos as SELECT from tablas.Modelos {*
  } excluding { createdBy, modifiedBy, createdAt, modifiedAt };

  entity marcas as SELECT from tablas.Marcas {*
  } excluding { createdBy, modifiedBy, createdAt, modifiedAt };

  action anadeAutos ( Autos: array of tablas.Autos,Marca: String, Modelo:String, Precio: array of tablas.Precio ) returns String;
}