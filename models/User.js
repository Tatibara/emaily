const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema;

// to list all possible properties in a model instances
const userSchema = new Schema({
  googleId: String
}); // in the future you can add new properties to the schema, it will not impact existing records

// to create a model class
mongoose.model("users", userSchema); // we telling mongoose, to create a collection called users, mongoose will not override existing collections 
