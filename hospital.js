export default class Hospital{

    constructor(nombre, direccion)
    {
        this.nombre = nombre
        this.direccion = direccion
        this.doctores = new Array()
        this.citas = new Array()
    }

    registrarDoctor(doctor)
    {
        this.doctores.push(doctor)
    }
    listaDoctores(){
        console.log("Doctores: ")
        this.doctores.forEach( (docts, i) => {
            console.log(`(${i+1}) ${docts.getPerfil()}`)
        })
    }
    registrarCita(cita){
        this.citas.push(cita)
    }
    listaCitas(){
        console.log("Citas Programadas: ")
        this.citas.forEach( (cita, i) => {
            console.log(`(${i+1}) ${cita.getCita()}`)
        })
    }
}
