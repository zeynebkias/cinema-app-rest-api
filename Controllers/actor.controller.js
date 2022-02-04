const Actor = require("../Models/acteur.model");
const actorsController = {};


actorsController.createActor = async function (req, res) {
  const actor = new Actor({
    nom: req.body.nom,
    prenom: req.body.prenom, 
    id : req.body.id,
  });
  try {
    await actor.save();
    res.status(201).json({
      message: "Actor created successfully",
      actor,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured while creating actor",
      error,
    });
  }
};


actorsController.getAllActors = async function (req, res) {
  console.log("GET /actors");
  let actors;
  try {
    actors = await Actor.find(); // function find
    res.send(actors);
  } catch (error) {
    res.status(500).send(error);
  }
};

actorsController.editActor = async function (req, res) {
  let actor;
  try { 
    actor = await Actor.findOneAndUpdate(
      {prenom : req.params.prenom},
      {$set : req.body},
      {new : true}
    );
    if (actor){
      res.send(actor);
    }else{
      res.status(404).send("Actor not found")
    }
    
  }catch (error) {
    res.status(500).send(error)
  }

};

actorsController.deleteActor = async function (req, res) {
  let actor;
  try { 
    actor = await Actor.findOneAndDelete({id : req.params.id} )
    if (actor) {
      res.status(200).send("Actor deleted successfully");
    }else{
      res.status(404).send("Actor not found")
    }
  }catch (error){
    res.status(500).send(error);
  }
};




actorsController.getActor = async function (req, res) {
  console.log("GET /actors/:id");
  let actor;
  try {
    actor = await Actor.findOne({ prenom :req.params.prenom});
    res.send(actor);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = actorsController;
