<template>
  <div>
    <!-- Navbar -->
    <Navbar></Navbar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
import Navbar from "../includes/admin/Navbar";
export default {
  components: { Navbar },
};
</script>

<style>
</style>