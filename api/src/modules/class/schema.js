import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ClassSchema = new Schema({
  classroom_id: {
    required: true,
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
    max: 150,
    required: [true, 'Informe um nome com no máximo 150 caracteres'],
    index: true,
  },
  teachers: [Schema.Types.ObjectId],
  students: [Schema.Types.ObjectId],
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

export default mongoose.model('Class', ClassSchema);
