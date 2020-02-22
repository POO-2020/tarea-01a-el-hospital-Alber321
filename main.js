import Nombre from "./nombre.js";
import Doctor from "./doctor.js";
import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";

class Main1 {
    constructor(){
        this.testNombre = new Nombre ("Luis", "Solis", "Gonzalez")
        this.NombDoc = new Nombre ("Mario", "Aguilar", "Goku")
        this.Doc = new Doctor (this.NombDoc, "Dentista", "312-023-4912", "273190273")
    }
    pruebaNombre(){
    console.log(this.testNombre.getNombreCompleto())
    console.log(this.testNombre.getApellidoNombre())
    console.log(this.testNombre.getIniciales())
    }
    pruebaDoctor(){
    console.log(this.Doc.getPerfil())
    }
}
let test = new Main()
test.pruebaNombre()
test.pruebaDoctor()

  