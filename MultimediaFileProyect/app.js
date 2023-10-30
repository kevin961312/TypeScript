"use strict";
// class MultimediaFile {
//   // fechaCreacion: string = "";
//   // fechaModificacion: string = "";
//   // nombre:string = "";
//   // tipoElemento:string ="";
//   constructor(public fechaCreacion:string, public fechaModificacion:string , public nombre:string , public tipoElemento:string )
//   {
//   }
//   desplegarInformacion():void
//   {
//     const informacion:string = this.nombre + " " + this.fechaModificacion + " " + this.fechaCreacion;
//     console.log(informacion);
//   }
// }
// class DynamicFile extends MultimediaFile
// {
//     constructor(public fechaCreacion:string, public fechaModificacion:string , public nombre:string , public tipoElemento:string, public duracion:string)
//     {
//       super(fechaCreacion, fechaModificacion, nombre, tipoElemento);
//     }
//     detener():void
//     {
//       console.log("Deteniendo...");
//     }
//     pausar():void
//     {
//       console.log("Pausando...");
//     }
//     reproducir():void
//     {
//       console.log("Reproducciendo...");
//     }
// }
// class StaticFile extends MultimediaFile
// {
//     Editar():void
//     {
//       console.log("Editando...");
//     }
// }
// const mFile:MultimediaFile = new MultimediaFile("12/12/2050","13/12/2050","prueba.txt","Archivo de Texto");
// mFile.desplegarInformacion();
// const dFile = new DynamicFile("12/12/2050","13/12/2050","prueba.txt","Archivo de Texto", "05:00");
// const sFile = new StaticFile("12/12/2050","13/12/2050","prueba.txt","Archivo de Texto");
