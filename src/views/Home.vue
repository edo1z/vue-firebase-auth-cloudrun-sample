<template>
  <div class="home">
    Home
    <template v-if="auth.user">
      <button @click="auth.signOut()">Sign Out</button>
    </template>
    <template v-else>
      <button @click="auth.signIn()">Sign In</button>
    </template>

    <hr />

    <button @click="msg.fetchHello()">Hello</button>
    <button @click="msg.fetchPing()">Ping</button>
    <button @click="msg.fetchProfile()">Profile</button>

    <hr />
    <table>
      <tr>
        <th>Hello</th>
        <td>{{ msg.hello }}</td>
      </tr>
      <tr>
        <th>Ping</th>
        <td>{{ msg.ping }}</td>
      </tr>
      <tr>
        <th>Profile</th>
        <td>{{ msg.profile }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useMsgStore } from "@/stores/msg";

export default defineComponent({
  name: "Home",
  setup() {
    const auth = useAuthStore();
    const msg = useMsgStore();
    return { auth, msg };
  },
});
</script>
