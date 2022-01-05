<template>
  <div class="home">
    Home
    <template v-if="auth.user"> Signed In </template>
    <template v-else>
      <button @click="auth.signIn()">LOGIN</button>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuthStore } from "@/stores/auth";

export default defineComponent({
  name: "Home",
  setup() {
    const auth = useAuthStore();
    return { auth };
  },
});
</script>
