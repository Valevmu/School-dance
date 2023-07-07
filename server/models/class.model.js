const { Schema, model } = require('mongoose')

const ClassSchema = new Schema({
  name: {
    type:String,
    required: [true, 'debe escribir un nombre'],
  },
  description: {
    type: String,
    required: [true, 'debe escribir una descripcion'],
  },
  price: {
    type: Number,
    required: [true, 'debe escribir un precio'],
  },
  stock: {
    type: Number,
    required: [true, 'debe escribir un stock'],
  },
  // schedule : {
  //   type: String,
  //   required: [true, 'debe escribir un horario'],
  // },
  // days : {
  //   type: String,
  //   required: [true, 'debe escribir un dia'],
  // },
  teacher: {
    type: String,
    ref: 'User',
    required: [true, 'debe estar asociado a un profesor'],
  },
  students: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
})


const Class = model('Class',ClassSchema, 'classes')
module.exports = Class;
