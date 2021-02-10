<template>
  <v-app>
    <v-main>
      <nuxt/>
    </v-main>
  </v-app>
</template>
<script>
  export default {
    data: () => ({
      title: null,
    }),
    watch: {
      $route(val) {
        this.title = val.name;
      },
    },
  }
</script>