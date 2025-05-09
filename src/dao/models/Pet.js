import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  age: { type: Number },
  adopted: { type: Boolean, default: false }
});

const PetModel = mongoose.model('Pet', petSchema);

export default PetModel;
