<template>
  <div id="member-add">
    <b-container>
      <b-row>
        <h1>Cadastro de Membros</h1>
      </b-row>
      <b-row>
        <b-col>
          <b-card>
            <b-form @submit="save" @reset="reset">
              <b-form-group id="group-name"
                            label="Nome:"
                            label-for="input-name">
                <b-form-input id="input-name"
                              type="text"
                              v-model.trim="form.name"
                              required
                              placeholder="">
                </b-form-input>
              </b-form-group>
              <b-form-group id="group-street"
                            label="Endereço:"
                            label-for="input-street">
                <b-form-input id="input-street"
                              type="text"
                              v-model.trim="form.address.street"
                              required
                              placeholder="">
                </b-form-input>
              </b-form-group>
              <b-row>
                <b-col>
                  <b-form-group id="group-neighborhood"
                                label="Bairro:"
                                label-for="input-neighborhood">
                    <b-form-input id="input-neighborhood"
                                  type="text"
                                  v-model.trim="form.address.neighborhood"
                                  required
                                  placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group id="group-postal"
                                label="CEP:"
                                label-for="input-postal">
                    <b-form-input id="input-postal"
                                  type="text"
                                  v-model.trim="form.address.postal"
                                  placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group id="group-city"
                                label="Cidade:"
                                label-for="input-city">
                    <b-form-input id="input-city"
                                  type="text"
                                  v-model.trim="form.address.city"
                                  required
                                  placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group id="group-state"
                                label="Estado:"
                                label-for="input-state">
                    <b-form-input id="input-state"
                                  type="text"
                                  v-model.trim="form.address.state"
                                  required
                                  placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group id="group-phone"
                                label="Telefone (Fixo):"
                                label-for="input-phones">
                    <b-form-input id="input-phones"
                                  type="text"
                                  v-model.trim="form.phones[0]"
                                  placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group id="group-cell"
                                label="Celular:"
                                label-for="input-cell">
                    <b-form-input id="input-cell"
                                  type="text"
                                  v-model.trim="form.phones[1]"
                                  required
                                  placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group id="group-mail"
                                label="Email:"
                                label-for="input-mail">
                    <b-form-input id="input-mail"
                                  type="text"
                                  v-model.trim="form.mail"
                                  placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group id="group-birth"
                                label="Data Nasc.:"
                                label-for="input-birth">
                    <b-form-input id="input-birth"
                                  type="text"
                                  v-model.trim="form.date_birth"
                                  required
                                  placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group id="group-profession"
                                label="Profissão:"
                                label-for="input-profession">
                    <b-form-input id="input-profession"
                                  type="text"
                                  v-model.trim="form.profession"
                                  placeholder="">
                    </b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group id="group-matrial"
                                label="Estado Civil:"
                                label-for="input-matrial">
                    <b-form-select id="input-matrial"
                                   v-model.trim="form.marital_status"
                                   :options="matrialOptions" />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-form-group id="group-spouse"
                            label="Cônjuge:"
                            label-for="input-spouse">
                <b-form-input id="input-spouse"
                              type="text"
                              v-model.trim="form.spouse"
                              :required="form.marital_status === 'Casado' || form.marital_status === 'Amasiado'"
                              placeholder="">
                </b-form-input>
              </b-form-group>
              <b-form-group id="group-father"
                            label="Pai:"
                            label-for="input-father">
                <b-form-input id="input-father"
                              type="text"
                              v-model.trim="form.father"
                              placeholder="">
                </b-form-input>
              </b-form-group>
              <b-form-group id="group-mother"
                            label="Mãe:"
                            label-for="input-mother">
                <b-form-input id="input-mother"
                              type="text"
                              v-model.trim="form.mother"
                              placeholder="">
                </b-form-input>
              </b-form-group>
              <b-form-group id="group-baptism-local"
                            label="Local do Batismo:"
                            label-for="input-baptism-local">
                <b-form-input id="input-baptism-local"
                              type="text"
                              v-model.trim="form.baptism.local"
                              placeholder="">
                </b-form-input>
              </b-form-group>
              <b-form-group id="group-baptism-date"
                            label="Data do Batismo:"
                            label-for="input-baptism-date">
                <b-form-input id="input-baptism-date"
                              type="text"
                              v-model.trim="form.baptism.date"
                              placeholder="">
                </b-form-input>
              </b-form-group>
              <b-form-group id="group-congregation"
                            label="Congregação:"
                            label-for="input-congregation">
                <b-form-input id="input-congregation"
                              type="text"
                              v-model.trim="form.congregation"
                              placeholder="">
                </b-form-input>
              </b-form-group>
              <b-row>
                <b-col>
                  <b-form-group id="group-integration-mode"
                                label="Modo de Integração:"
                                label-for="input-integration-mode">
                    <b-form-select id="input-integration-mode"
                                   v-model="form.integration.mode"
                                   :options="integrationModeOptions" />
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group id="group-integration-date"
                                label="Data da Integração:"
                                label-for="input-integration-date">
                    <b-form-input id="input-integration-date"
                                  type="text"
                                  v-model="form.integration.date"
                                  placeholder="">
                    </b-form-input>
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
      form: {
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
    };
  },
  computed: {},
  methods: {
    save() {
      console.log(this.form);
    },
    reset() {

    },
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
