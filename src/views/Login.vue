<template>
  <v-card>
    <v-alert v-if="alert" color="red" type="success">Invalid login</v-alert>
    <v-alert v-if="isLogged" color="green" type="success">You are logged in</v-alert>
    <v-text-field label="email" v-model="email"></v-text-field>
    <v-text-field label="password" v-model="password"></v-text-field>
    <v-btn @click="Logout" v-if="isLogged">Logout</v-btn>
    <v-btn @click="Login" v-else>Login</v-btn>
  </v-card>
</template>

<script>
import axios from 'axios';
import config from '@/config/config';

export default {
  data() {
    return {
      email: '',
      password: '',
      alert: false,
      isLogged: false,
    };
  },
  methods: {
    Login() {
      axios.get(`${config.apiURL}/login`).then((response) => {
        for (let n = 0; n < response.data.length; n += 1) {
          if (
            this.email === response.data[n].email
            && this.password === response.data[n].password
          ) {
            this.isLogged = true;
            this.$emit('login', this.isLogged);
          } else {
            this.alert = true;
            setTimeout(() => {
              this.alert = false;
            }, 3000);
          }
        }
      });
    },
    Logout() {
      this.isLogged = false;
    },
  },
};
</script>
