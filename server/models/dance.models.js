const { Schema, model } = require('mongoose')

const StudentSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'debe escribir el nombre del alumno'],
  },
  apellidos: {
    type: String,
    required: [true,'debe escribir el nombre del alumno' ]
  },
  edad: {
    type:Number,
    required: [true, 'Debe escribir la edad del elumno']
  },
  curso: {
    type: String,
    // required: [true, 'debe escribir el curso que desea incribir']
  },
  foto:{
    type: String,
  },
  comentarios: {
    type: String,
  }
})

const Student = model('Student', StudentSchema)
module.exports = Student;
