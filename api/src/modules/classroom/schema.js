import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ClassroomSchema = new Schema({
  name: {
    type: String,
    max: 150,
    required: [true, 'Escolha um nome para a sala'],
    index: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
    select: false
  },
  updated_at: {
    type: Date,
    select: false
  },
  active: {
    type: Boolean,
    default: true
  }
});

export default mongoose.model('Classroom', ClassroomSchema);
