<template>
  <v-app-bar color="white" :class="navStyles ? navStyles : ''">
    <!-- Tilte -->
    <v-toolbar-title class="bold text--darken-3">
      <slot name="nav-title">
        <!-- defualt title, can be changed with slot -->
        Admin
      </slot>
    </v-toolbar-title>

    <!-- Links  -->
    <div>
      <slot name="links">
        <v-btn
          depressed
          text
          color="primary"
          class="ml-4"
          :to="{ name: 'home' }"
        >
          Главная
        </v-btn>
      </slot>
    </div>

    <v-spacer></v-spacer>

    <slot name="nav-left">
      <v-btn depressed color="error" plain :to="{ name: 'login' }">
        выйти
        <v-icon class="ml-2" small>mdi-exit-to-app</v-icon>
      </v-btn>
    </slot>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  props: {
      navStyles: String,
  }
};
</script>

<style>
</style>