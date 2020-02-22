export default class Nombre {
    constructor(nombre, paterno, materno){
        this.nombre = nombre
        this.paterno = paterno
        this.materno = materno
    }
    getNombreCompleto(){
            return (`${this.nombre} ${this.paterno} ${this.materno}`)
        }
    getApellidoNombre(){
        return (`${this.paterno}, ${this.materno}, ${this.nombre}`)
    }
    getIniciales(){
        return (`${this.nombre.charAt(0)}, ${this.paterno.charAt(0)}, ${this.materno.charAt(0)}`)
    }
}
/*
let prueba1 = new Nombre ("Luis","Solis", "Gonzalez")
console.log(`${prueba1.getNombreCompleto()}`)
console.log(`${prueba1.getApellidoNombre()}`)
console.log(`${prueba1.getIniciales()}`)
*/



