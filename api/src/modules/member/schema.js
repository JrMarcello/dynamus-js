import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MemberSchema = new Schema({
  name: {
    type: String,
    max: 150,
    required: [true, 'Nome é um campo obrigatório!'],
    index: true,
  },
  cpf: {
    type: String,
    unique: true,
    index: true,
  },
  mail: String,
  date_birth: {
    type: Date,
    max: Date.now,
  },
  marital_status: {
    type: String,
    enum: ['Solteiro', 'Casado', 'Viúvo', 'Amasiado'],
  },
  profession: String,
  father: {
    type: String,
    max: 150,
  },
  mother: {
    type: String,
    max: 150,
  },
  spouse: {
    type: String,
    max: 150,
  },
  address: {
    street: String,
    neighborhood: String,
    city: String,
    state: String,
    postal: String
  },
  phones: [String],
  baptism: {
    place: String,
    date: Date,
  },
  congregation: String,
  integration: {
    mode: String,
    date: Date,
  },
  created_at: {
    type: Date,
    default: Date.now,
    select: false,
  },
  updated_at: {
    type: Date,
    select: false,
  },
  active: {
    type: Boolean,
    default: true,
  }
});

export default mongoose.model('Member', MemberSchema);
