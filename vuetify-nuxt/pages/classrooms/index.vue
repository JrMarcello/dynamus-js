<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-btn
        fab
        bottom
        right
        color="primary"
        dark
        fixed
        to="/rooms/add"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({

    })
  }
</script>