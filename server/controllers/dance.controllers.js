const Students = require('../models/dance.models');

module.exports.findAllStudents = (req, res) => {
  Students.find()
    .then((allStudents) => res.json({ students: allStudents }))
    .catch((err) =>
     res.json({
      message: "Something went wrong",
      error:err,
     })
     );
};
module.exports.findOneStudent = (req, res) => {
    Students.findOne({ _id: req.params.id })
     .then((oneSingleStudent) => res.json({students: oneSingleStudent }))
     .catch((err) =>
     res.json({
      message: "Something went wrong",
      error:err,
     }))

  
}
module.exports.createNewStudent = (req, res) => {
  console.log(req.body)
  Students.create(req.body)
   .then(newStudent => res.json({students: newStudent}))
   .catch(err =>{
    console.log(err)
    res.status(500).json({message:"Something went wrong", err})
   })

}
module.exports.updateStudent = async (req, res) => {
  try {
    const updateStudent = await Students.findByIdAndUpdate(req.params.id, req.body);
    res.json({students: updateStudent });
  }catch(error) {
    res.status(500).json({
      message:"Something went wrong",
      error,
    });
  };
};
module.exports.deleteAnExistingStudent = (req, res) => {
  Students.deleteOne({_id: req.params.id })
   .then((result) => res.json({result: result}))
   .catch((err) => 
   res.json({ message: "Something went wrong"}))
}