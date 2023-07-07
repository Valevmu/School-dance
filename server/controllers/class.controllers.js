const Class = require('../models/class.models');

module.exports.findAllClass = (req, res) => {
  Class.find()
    .then((allClass) => res.json({ class: allClass }))
    .catch((err) =>
     res.json({
      message: "Something went wrong",
      error:err,
     })
     );
};
module.exports.findOneClass = (req, res) => {
    Class.findOne({ _id: req.params.id })
     .then((oneSingleClass) => res.json({class: oneSingleClass }))
     .catch((err) =>
     res.json({
      message: "Something went wrong",
      error:err,
     }))

  
}
module.exports.createNewClass = (req, res) => {
  console.log(req.body)
  Class.create(req.body)
   .then(newStudent => res.json({class: newClass}))
   .catch(err =>{
    console.log(err)
    res.status(500).json({message:"Something went wrong", err})
   })

}
module.exports.updateClass = async (req, res) => {
  try {
    const updateClass = await Class.findByIdAndUpdate(req.params.id, req.body);
    res.json({class: updateClass });
  }catch(error) {
    res.status(500).json({
      message:"Something went wrong",
      error,
    });
  };
};
module.exports.deleteAnExistingClass = (req, res) => {
  Class.deleteOne({_id: req.params.id })
   .then((result) => res.json({result: result}))
   .catch((err) => 
   res.json({ message: "Something went wrong"}))
}