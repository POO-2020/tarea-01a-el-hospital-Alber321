export default class Fecha {
   constructor(fecha)
   {
       this.fecha = fecha
       this.fechaActual = new Date()
       this.años = (this.fechaActual.getFullYear() - this.fecha.getFullYear())
   }

   getAños(){return this.años}
   getMeses(){return (this.años*12)}
   getSemanas(){return (this.años*12*4)}
   getDias(){return (this.años*12*4*7)}
   getFecha(){
       return (`${this.fecha.getDate()}/${this.fecha.getMonth()}/${this.fecha.getFullYear()}`)
      }
   getDiaFecha(){
      let dia = this.fecha.getDay()
      let semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
      return semana[dia]
   }
}
/*
let prueba1 = new Fecha(new Date(2020,2,21))
console.log(`${prueba1.getAños()}`)
console.log(`${prueba1.getMeses()}`)
console.log(`${prueba1.getSemanas()}`)
console.log(`${prueba1.getDias()}`)
console.log(`${prueba1.getFecha()}`)
console.log(`${prueba1.getDiaFecha()}`)
*/