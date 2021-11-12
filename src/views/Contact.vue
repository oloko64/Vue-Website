<template>
  <div>
    <mail :isLogged="login()"/>
    <login v-if="2<1" @login="login"/>
  </div>
</template>

<script>
import Mail from '@/components/mail/Mail.vue';
import Login from './Login.vue';

export default {
  components: {
    Mail,
    Login,
  },
  methods: {
    login(event) {
      return event;
    },
  },
};
</script>
