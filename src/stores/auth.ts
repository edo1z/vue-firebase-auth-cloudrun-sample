import { defineStore } from "pinia";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../plugins/firebase";
const provider = new GoogleAuthProvider();

export const useAuthStore = defineStore("auth", {
  state: () => ({
    // eslint-disable-next-line
    user: null as any,
  }),
  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("signed in", user);
          this.user = user;
        } else {
          console.log("signed out");
        }
      });
    },
    signIn() {
      signInWithRedirect(auth, provider);
    },
  },
});
