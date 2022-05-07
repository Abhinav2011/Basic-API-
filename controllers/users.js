
import model from '../models/model.js'

export const getUser = async (req, res) => {
  try{
    const data = await model.find();
    res.send(data);
  }
  catch(error){
    console.log(error);
  }
};


export const createUser = async (req, res) => {
  console.log("POST ROUTE REACHED");
  
  const data = new model({
    name: req.body.name,
    lastName: req.body.lastName,
    age: req.body.age
  })

  try{
    //
    const dataToSave = await data.save();
    res.send(`User with name ${data.name} added to the database`);
  }
  catch(error){
    console.log('failed');
  }

  
};

export const getUserWithID = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try{
    const data = await model.findById(id);
    console.log(data);
    res.send(data);
  }
  catch(error){
    console.log(error);
  }
 
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try{
    const data = await model.findByIdAndDelete(id);
    res.send(`User with id ${data.name} and ${data._id} deleted from the database`);
  }
  catch(error){
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try{
    const updatedData = req.body;
    const options = {new : true};
    const result = await model.findByIdAndUpdate(id, updatedData,options);
    res.send(result);
  }
  catch(error){
    console.log(error);
  }
  
};


// module.exports =  { createUser, getUser, getUserWithID, deleteUser, updateUser };
