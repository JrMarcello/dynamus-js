<template>
  <v-container fluid grid-list-md>
    <v-layout>
      <v-flex>
        <v-toolbar>
          <v-toolbar-title>Cadastro de Membros</v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-flex d-flex>
            <v-form>
              <v-text-field v-model="member.name" label="Nome" id="id-name" />
            </v-form>
          </v-flex>
          <v-flex d-flex>
            <v-form md6>
              <v-text-field v-model="member.name" label="Nome" id="id-name" />
            </v-form>
          </v-flex>
          <!-- <v-card-title primary-title>
            Dados Pessoais
          </v-card-title>
          <v-form md6>
            <v-text-field v-model="member.name" label="Nome" id="id-name" />
          </v-form> -->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      member: {
        name: null
      }
    })
  }
</script>