<template>
  <v-app light>
    <v-toolbar fixed clipped-left dark color="primary" app>
      <v-toolbar-side-icon @click="mini = !mini"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-menu bottom left transition="scale-transition">
        <v-btn slot="activator" icon dark>
          <v-icon>account_circle</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile to="user/account/edit">
            <v-list-tile-title>Editar conta</v-list-tile-title>
          </v-list-tile>
          <v-list-tile to="/login">
            <v-list-tile-title>Sair</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-navigation-drawer
      :mini-variant.sync="mini"
      clipped
      app
      width="250"
    >
      <v-list>
        <template v-for="(item, i) in drawersItems" exact>
          <v-list-group v-if="item.childrens" :prepend-icon="item.icon" :key="i" >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="(children, k) in item.childrens" :key="k" :to="children.to">
              <v-list-tile-action>
                <v-icon>{{ children.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ children.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile  v-else :key="i" :to="item.to">
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>  
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      mini: false,
      title: 'Dynammus',
      drawersItems: [
        { icon: 'home', title: 'Home', to: '/' },
        {
          icon: 'people',
          title: 'Membros',
          childrens: [
            { icon: 'list', title: 'Listar', to: '/members' },
            { icon: 'add_circle', title: 'Novo', to: '/members/add' }
          ]
        },
        {
          icon: 'school',
          title: 'Classes',
          childrens: [
            { icon: 'list', title: 'Listar', to: '/classrooms' },
            { icon: 'add_circle', title: 'Nova', to: '/classrooms/add' }
          ]
        }
      ]
    }
  },
  methods: {
    logout () {
      console.log('saiii')
    }
  }
}
</script>
