import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MemberSchema = new Schema({
  name: {
    type: String,
    max: 150,
    required: [true, 'Nome é um campo obrigatório!'],
    index: true
  },
  cpf: {
    type: String,
    unique: true,
    index: true
  },
  mail: String,
  date_birth: Date,
  marital_status: {
    type: String,
    enum: ['Solteiro', 'Casado', 'Viúvo']
  },
  profissao: String,
  pai: {
    type: String,
    max: 150,
  },
  mae: {
    type: String,
    max: 150,
  },
  conjuge: {
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
  // phones: [],
  // local_batismo: {},
  // data_batismo: {},
  // congregacao: {},
  // integracao: {
  //   modo: {},
  //   data: {},
  // },
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

export default mongoose.model('Member', MemberSchema);
