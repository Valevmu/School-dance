const { Schema, model } = require('mongoose')

const TeacherSchema = new Schema({
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
    required: [true, 'debe escribir el curso que desea incribir']
  },
  foto:{
    type: String,
  }
})

const Teacher = model('Teacher', TeacherSchema)
module.exports = Teacher;
