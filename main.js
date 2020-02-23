import Nombre from "./nombre.js";
import Doctor from "./doctor.js";
import Paciente from "./paciente.js";
import Fecha from "./fecha.js";
import Cita from "./cita.js";
import Tiempo from "./tiempo.js";
import Hospital from "./hospital.js";
class Main {
    constructor(){
        this.testNombre = new Nombre ("Luis", "Solis", "Gonzalez")
        this.NombDoc = new Nombre ("Mario", "Aguilar", "Goku")
        this.Doc = new Doctor (this.NombDoc, "Dentista", "312-023-4912", "273190273")
        this.paciente = new Paciente (this.testNombre, new Fecha(new Date(2000,9,3)), "312-210-0818")
        this.tiempo = new Tiempo (3,13, "pm")
        this.Cita = new Cita (new Fecha(new Date(2020,1,23)), this.tiempo, this.Doc, this.paciente)
        this.hospital = new Hospital ("Hospital coca de Piña", "Calle falsa #6969")
    }
    pruebaNombre(){
    console.log(this.testNombre.getNombreCompleto())
    console.log(this.testNombre.getApellidoNombre())
    console.log(this.testNombre.getIniciales())
    }
    pruebaDoctor(){
    console.log(this.Doc.getPerfil())
    }
    pruebaPaciente(){
        console.log(this.paciente.getPerfil())
    }
    pruebaCita(){
        console.log(this.Cita.getCita())
    }
    pruebaHospital(){
        this.hospital.registrarDoctor(this.Doc)
        this.hospital.registrarCita(this.Cita)
        this.hospital.listaDoctores()
        this.hospital.listaCitas()
    }
}
let test = new Main()
test.pruebaNombre()
test.pruebaDoctor()
test.pruebaPaciente()
test.pruebaCita()
test.pruebaHospital()