import { defineStore } from "pinia";
import { Profile, defaultProfile } from "@/models/model";
import { hello, ping, profile } from "@/api/api";
import { useAuthStore } from "@/stores/auth";

export const useMsgStore = defineStore("msg", {
  state: () => ({
    hello: "",
    ping: "",
    profile: defaultProfile as Profile,
  }),
  actions: {
    async fetchHello() {
      this.hello = "";
      try {
        this.hello = await hello();
      } catch (err) {
        console.log(err);
      }
    },
    async fetchPing() {
      this.ping = "";
      try {
        this.ping = await ping();
      } catch (err) {
        console.log(err);
      }
    },
    async fetchProfile() {
      this.profile = defaultProfile;
      try {
        const idToken = await useAuthStore().getIdToken();
        if (!idToken) throw new Error("idToken is empty.");
        this.profile = await profile({ idToken });
      } catch (err) {
        console.log(err);
      }
    },
  },
});
