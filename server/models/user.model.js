const { Schema, model } = require('mongoose')

const bcrypt = require('bcrypt');


const UserSchema = new Schema({
  email: {
    type:String,
    required: [true, 'debe escribir un mail'],
    unique: true,
    match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  },
  password: {
    type: String,
    required: [true, 'debe escribir su contraseña'],
    match: /(?=.*[a-zA-Z])(?=.*[0-9]+).*/,
    minlength: 5
  },
  admin: {
    type: Boolean,
    default: 'false',
}
})
// add this after UserSchema is defined
UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );

UserSchema.pre('validate', function(next) {
  if (this.password !== this.confirmPassword) {
  this.invalidate('confirmPassword', 'Password must match confirm password');
  }
    next();
  });
UserSchema.pre('save', function(next) {
  // cuantas veces queremos que nuestra contraseña sea intervenida, mientras mas mas complejo es el proceso.
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });

const User = model('User',UserSchema)
module.exports = User;
