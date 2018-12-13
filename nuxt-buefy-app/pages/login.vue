<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <Notification
          v-if="error"
          :message="error"
        />
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Login</h3>
          <p class="subtitle has-text-grey">Faça login para continuar.</p>
          <div class="box">
            <figure class="avatar">
              <img src="https://placehold.it/128x128">
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input
                    v-model="credentials.data.email"
                    class="input is-large"
                    type="email"
                    placeholder="Email"
                    autofocus=""
                  >
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input
                    v-model="credentials.data.password"
                    class="input is-large"
                    type="password"
                    placeholder="Senha"
                  >
                </div>
              </div>
              <div class="field">
                <label class="checkbox">
                  <input
                    v-model="credentials.data.rememberMe"
                    type="checkbox"
                  >
                  Remember me
                </label>
              </div>
              <button
                class="button is-block is-info is-large is-fullwidth"
                @click="login"
              >
                Login
              </button>
            </form>
          </div>
          <!-- <p class="has-text-grey">
            <a href="../">Sign Up</a> &nbsp;·&nbsp;
            <a href="../">Forgot Password</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Notification from '@/components/Notification'

export default {
  name: 'LoginPage',
  layout: 'login',
  auth: false,
  middleware: 'loggedIn',
  data() {
    return {
      credentials: {
        data: {
          email: this.email,
          password: this.password
        }
      },
      error: null
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', this.credentials)
      } catch (e) {
        this.error = e.message
      }
    }
  }
}
</script>

<style>
html,
body {
  font-family: 'Open Sans', serif;
  font-size: 14px;
  font-weight: 300;
}
.hero.is-success {
  background: #f2f6fa;
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 5rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}
</style>
