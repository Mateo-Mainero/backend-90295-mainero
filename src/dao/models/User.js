import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  pets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' }]
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
