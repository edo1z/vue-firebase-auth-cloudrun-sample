<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuthStore } from "@/stores/auth";

export default defineComponent({
  setup() {
    const auth = useAuthStore();
    auth.init();
  },
});
</script>
