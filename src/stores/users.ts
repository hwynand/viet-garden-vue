import { defineStore } from "pinia";

import { api, authApi } from "../apis/instances";

interface IAuth {
  isLoggedIn: boolean;
  user: IUserData;
}

interface IUserData {
  fullname: string;
  email: string;
  phone_number: string;
  address: string;
  is_admin: boolean;
}

export const useUsersStore = defineStore("users", {
  state: () => ({
    auth: {
      isLoggedIn: false,
      user: null,
    },
    count: 0,
  }),
  getters: {},
  actions: {
    setAuth() {},
    async login({ username, password }) {
      const params = new URLSearchParams();
      params.append("username", username);
      params.append("password", password);
      const res = await api.post("/login/access-token", params);
      if (res.status == 200) {
        localStorage.setItem("access-token", res.data.access_token);
        // localStorage.setItem("isLoggedIn", "true");
        const resProfile = await this.getProfile();
      }
      return res;
    },
    async register({ data }) {
      const res = await api.post("/register", data);
      return res;
    },
    async getProfile() {
      const res = await authApi.get("/users/me");
      if (res.status == 200) {
        this.auth.isLoggedIn = true;
        this.auth.user = res.data;
        localStorage.setItem("user", JSON.stringify(this.auth.user));
      }
      return res;
    },
    async updateProfile({ data }) {
      const res = await authApi.put("/users/me", data);
      return res;
    },
    checkLoggedIn() {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      const userData = localStorage.getItem("user");
      if (isLoggedIn && userData) {
        console.log("userData", userData);
        console.log("checked");
        this.auth.isLoggedIn = true;
        this.auth.user = JSON.parse(userData);
      }
    },
    logout() {
      this.auth.user = null;
      this.auth.isLoggedIn = false;
      localStorage.removeItem("user");
      localStorage.removeItem("access-token");
    },
  },
});
