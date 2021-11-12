<template>
  <div id="Mail" class="text-center mt-5">
    <h1>Send your message to me</h1>
    <v-row class="d-block">
      <v-col class="align-center">
            <v-text-field label="Name" v-model="name"></v-text-field>
            <v-textarea label="Message" v-model="message"></v-textarea>
      </v-col>
      <v-col>
        <v-btn @click="sendMessage">
          send
        </v-btn>
      </v-col>
      <v-col v-if="isLogged">
        <v-card v-for="message in messages" :key="message.id" >
          <v-card-title>{{ message.name }}</v-card-title>
          <v-card-text>{{ message.message }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
import config from '@/config/config';

export default {
  data() {
    return {
      name: '',
      message: '',
      messages: [],
    };
  },
  props: {
    isLogged: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    axios.get(`${config.apiURL}/messages`).then((response) => {
      console.log(response);
      this.messages = response.data;
    });
  },
  methods: {
    sendMessage() {
      axios.post(`${config.apiURL}/messages`, {
        name: this.name,
        message: this.message,
      }).then((response) => {
        console.log(response);
      });

      this.name = '';
      this.message = '';
    },
  },
};
</script>
