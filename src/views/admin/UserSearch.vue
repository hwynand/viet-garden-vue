<template>
  <div class="user">
    <div class="search">
      <input type="text" />
      <span><i class="fa fa-magnifying-glass"></i></span>
    </div>
    <div class="username">
      <a
        ><i class="fa-solid fa-user"></i>&nbsp;{{
          this.store.auth.user?.fullname
        }}</a
      >
    </div>
    <ul class="hover-user">
      <li><i class="fa-light fa-file-invoice"></i>&nbsp;Thông tin tài khoản</li>
      <li><i class="fa-solid fa-key"></i>&nbsp;Đổi mật khẩu</li>
      <li @click="handaleLogOut">
        <i class="fa fa-arrow-right-from-bracket"></i>&nbsp;Đăng xuất
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useUsersStore } from "../../stores/users";
export default {
  data() {
    return {
      store: useUsersStore(),
    };
  },
  //lấy thông tin đăng nhập
  async created() {
    console.log("dadadada");
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const userData = localStorage.getItem("user");
    if (!isLoggedIn && !userData) {
      this.$router.push({ path: "/login" });
    }
  },
  methods: {
    ...mapActions(useUsersStore, ["logout"]),

    // đăng xuất
    handaleLogOut() {
      this.logout();
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  .username {
    padding: 1em;
    height: 100%;
    cursor: pointer;
    i {
      margin-top: 8px;
    }
    &:hover + .hover-user {
      display: block;
    }
  }
  .hover-user {
    position: absolute;
    display: none;
    list-style: none;
    padding: 10px;
    margin-top: 2.5rem;
    transform: translateX(16rem);
    li {
      padding-bottom: 10px;
    }
    &:hover {
      display: block;
    }
    li:hover {
      display: block;
      color: #f28902;
      cursor: pointer;
    }
  }
  .search {
    padding: 1em;
    margin-right: 2rem;
    height: 100%;
    display: flex;
    input {
      height: 1.8rem;
      padding: 1px 6px;
      border: 1px solid #ccc;
    }
    span {
      border-radius: 0 13px 13px 0;
      background: #ccc;
      width: 1.6rem;
      height: 1.8rem;
      i {
        padding-left: 4px;
        transform: translateY(5px);
      }
    }
  }
}
</style>
