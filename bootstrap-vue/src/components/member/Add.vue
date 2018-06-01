<template>
  <div id="member-add">
    <b-alert variant="success" :show="showSuccessAlert" dismissible>Cadastro realizado</b-alert>
    <b-alert variant="danger" :show="showErrorAlert" dismissible>Erro ao tentar cadastrar Membro</b-alert>
    <b-container>
      <b-row>
        <h1>Cadastro de Membros</h1>
      </b-row>
      <b-row>
        <b-col>
          <b-card>
            <b-form @submit="save" @reset="reset">
              <b-form-group id="group-name" label="Nome:" label-for="input-name">
                <b-form-input id="input-name"
                              type="text"
                              v-model.trim="member.name"
                              required
                              placeholder="">
                </b-form-input>
              </b-form-group>
              <b-form-group id="group-street" label="Endereço:" label-for="input-street">
                <b-form-input id="input-street"
                              type="text"
                              v-model.trim="member.address.street"
                              required
                              placeholder="">
                </b-form-input>
              </b-form-group>
              <b-row>
                <b-col>
                  <b-form-group id="group-neighborhood" label="Bairro:" label-for="input-neighborhood">
                    <b-form-input id="input-neighborhood"
                                  type="text"
                                  v-model.trim="member.address.neighborhood"
                                  required
                                  placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group id="group-postal" label="CEP:" label-for="input-postal">
                    <b-form-input id="input-postal"
                                  type="text"
                                  v-model.trim="member.address.postal"
                                  placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group id="group-city" label="Cidade:" label-for="input-city">
                    <b-form-input id="input-city"
                                  type="text"
                                  v-model.trim="member.address.city"
                                  required
                                  placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group id="group-state" label="Estado:" label-for="input-state">
                    <b-form-input id="input-state"
                                  type="text"
                                  v-model.trim="member.address.state"
                                  required
                                  placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group id="group-phone" label="Telefone (Fixo):" label-for="input-phones">
                    <b-form-input id="input-phones"
                                  type="tel"
                                  v-model.trim="member.phones[0]"
                                  placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group id="group-cell" label="Celular:" label-for="input-cell">
                    <b-form-input id="input-cell"
                                  type="tel"
                                  v-model.trim="member.phones[1]"
                                  required
                                  placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group id="group-mail" label="Email:" label-for="input-mail">
                    <b-form-input id="input-mail"
                                  type="email"
                                  v-model.trim="member.mail"
                                  placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group id="group-birth" label="Data Nasc.:" label-for="input-birth">
                    <b-form-input id="input-birth"
                                  type="date"
                                  v-model.trim="member.date_birth"
                                  required
                                  placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group id="group-profession" label="Profissão:" label-for="input-profession">
                    <b-form-input id="input-profession"
                                  type="text"
                                  v-model.trim="member.profession"
                                  placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group id="group-matrial" label="Estado Civil:" label-for="input-matrial">
                    <b-form-select id="input-matrial"
                                   v-model.trim="member.marital_status"
                                   :options="matrialOptions"
                                   required />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-form-group id="group-spouse" label="Cônjuge:" label-for="input-spouse">
                <b-form-input id="input-spouse"
                              type="text"
                              v-model.trim="member.spouse"
                              :required="member.marital_status === 'Casado' || member.marital_status === 'Amasiado'"
                              placeholder="">
                </b-form-input>
              </b-form-group>
              <b-form-group id="group-father" label="Pai:" label-for="input-father">
                <b-form-input id="input-father"
                              type="text"
                              v-model.trim="member.father"
                              placeholder="">
                </b-form-input>
              </b-form-group>
              <b-form-group id="group-mother" label="Mãe:" label-for="input-mother">
                <b-form-input id="input-mother"
                              type="text"
                              v-model.trim="member.mother"
                              placeholder="">
                </b-form-input>
              </b-form-group>
              <b-row>
                <b-col>
                  <b-form-group id="group-baptism-local" label="Local do Batismo:" label-for="input-baptism-local">
                    <b-form-input id="input-baptism-local"
                                  type="text"
                                  v-model.trim="member.baptism.local"
                                  placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group id="group-baptism-date" label="Data do Batismo:" label-for="input-baptism-date">
                    <b-form-input id="input-baptism-date"
                                  type="date"
                                  v-model.trim="member.baptism.date"
                                  placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-form-group id="group-congregation" label="Congregação:" label-for="input-congregation">
                <b-form-input id="input-congregation"
                              type="text"
                              v-model.trim="member.congregation"
                              placeholder="">
                </b-form-input>
              </b-form-group>
              <b-row>
                <b-col>
                  <b-form-group id="group-integration-mode" label="Modo de Integração:" label-for="input-integration-mode">
                    <b-form-select id="input-integration-mode"
                                   v-model="member.integration.mode"
                                   :options="integrationModeOptions" />
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group id="group-integration-date" label="Data da Integração:" label-for="input-integration-date">
                    <b-form-input id="input-integration-date"
                                  type="date"
                                  v-model="member.integration.date"
                                  placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group id="group-classroom" label="Sala (EB):" label-for="input-classroom" >
                    <b-form-select id="input-classroom"
                                   :options="classRooms"
                                   placeholder="Selecione"
                                   @change="getClasses">
                      <template slot="first">
                        <option :value="null">Selecione</option>
                      </template>
                    </b-form-select>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group id="group-class" label="Turma:" label-for="radio-class" v-if="classes.length > 0">
                    <b-form-radio-group id="radio-class"
                                        buttons
                                        button-variant="outline-primary"
                                        size="lg"
                                        v-model="classID"
                                        :options="classes" />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-button type="submit" variant="primary">Salvar</b-button>
              <b-button type="reset" variant="danger">Cancelar</b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'member-add',
  data() {
    return {
      showSuccessAlert: false,
      showErrorAlert: false,
      member: {
        name: null,
        cpf: null,
        mail: null,
        date_birth: null,
        marital_status: null,
        profession: null,
        father: null,
        mother: null,
        spouse: null,
        address: {
          street: null,
          neighborhood: null,
          city: null,
          state: null,
          postal: null,
        },
        phones: [],
        baptism: {
          place: null,
          date: null,
        },
        congregation: null,
        integration: {
          mode: null,
          date: null,
        },
      },
      classID: null,
      matrialOptions: [
        { value: null, text: 'Selecione' },
        { value: 'Solteiro', text: 'Solteiro' },
        { value: 'Casado', text: 'Casado' },
        { value: 'Amasiado', text: 'Amasiado' },
        { value: 'Viúvo', text: 'Viúvo' },
      ],
      integrationModeOptions: [
        { value: null, text: 'Selecione' },
        { value: 'Batismo', text: 'Batismo' },
        { value: 'Carta de Transferência', text: 'Carta de Transferência' },
      ],
      classRoomOptions: [],
      classOptions: [],
    };
  },
  computed: {
    classRooms() {
      return this.classRoomOptions;
    },
    classes() {
      return this.classOptions;
    },
  },
  methods: {
    /* eslint no-underscore-dangle:0 */
    getClassrooms() {
      this.$http.get('http://localhost:8000/api/v1/classrooms').then((res) => {
        this.classRoomOptions = res.body.map((option) => {
          const opt = {
            text: option.name,
            value: option._id,
          };

          return opt;
        });
      }, (err) => {
        console.log('Error', err);
      });
    },
    getClasses(value) {
      if (value) {
        this.$http.get(`http://localhost:8000/api/v1/classes/classroom/${value}`).then((res) => {
          this.classOptions = res.body.map((option) => {
            const opt = {
              text: option.name,
              value: option._id,
            };

            return opt;
          });
        }, (err) => {
          console.log('Error', err);
        });
      }
    },
    save() {
      this.$http.post('http://localhost:8000/api/v1/members', this.member).then((res) => {
        // console.log(`http://localhost:8000/api/v1/classes/${this.classID}`);
        console.log(res);
        // if (this.classID && res.body._id) {
        //   this.$http.put(`http://localhost:8000/api/v1/classes/${this.classID}`, { students: [res.body._id] })
        //     .then(() => {
        //       this.showErrorAlert = false;
        //       this.showSuccessAlert = true;
        //       this.reset();
        //     }, (err) => {
        //       this.showSuccessAlert = false;
        //       this.showErrorAlert = true;
        //       console.log('Member Error 2', err);
        //     });
        // } else {
        //   this.showErrorAlert = false;
        //   this.showSuccessAlert = true;
        // }
      }, (err) => {
        this.showSuccessAlert = false;
        this.showErrorAlert = true;
        console.log('Member Error 1', err);
      });
    },
    reset() {
      this.showSuccessAlert = false;
      this.showErrorAlert = false;
      this.member = {
        name: null,
        cpf: null,
        mail: null,
        date_birth: null,
        marital_status: null,
        profession: null,
        father: null,
        mother: null,
        spouse: null,
        address: {
          street: null,
          neighborhood: null,
          city: null,
          state: null,
          postal: null,
        },
        phones: [],
        baptism: {
          place: null,
          date: null,
        },
        congregation: null,
        integration: {
          mode: null,
          date: null,
        },
      };
      this.classID = null;
    },
  },
  mounted() {
    this.getClassrooms();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#member-add {
  text-align: left;
  padding: 20px;
}
</style>
