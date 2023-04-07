<template>
  <div class="manage-user">
    <div class="sidenav">
      <h2 class="logo"><i class="fa-light fa-seedling"></i>&nbsp;Bosai shop</h2>
      <ul>
        <router-link to="/quan-ly-nguoi-dung">
          <li>
            <i class="fa-solid fa-user"></i>&nbsp;User management
          </li></router-link
        >
        <router-link to="/quan-ly-san-pham">
          <li>
            <i class="fa fa-list-check"></i>&nbsp;Product management
          </li></router-link
        >
        <router-link to="/quan-ly-don-hang">
          <li>
            <i class="fa-solid fa-cart-shopping"></i>&nbsp;Order management
          </li></router-link
        >
        <router-link to="#">
          <li>
            <i class="fa-solid fa-bell"></i>&nbsp;Notification
          </li></router-link
        >
      </ul>
      <ul>
        <router-link to="#">
          <li><i class="fa-light fa-gear"></i>&nbsp;Setting</li></router-link
        >
        <button class="btn-logout" @click="logout">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>&nbsp;Logout
        </button>
      </ul>
    </div>
  </div>
</template>

<script>
// import { api } from "@/api";
// export default {
//   data() {
//     return {
//       userData: {},
//     };
//   },
//   //đăng nhập
//   async created() {
//     const token = localStorage.getItem("access_token");
//     console.log(token);
//     const res = await api.getProfile(token);
//     //console.log(res); //thông tin người dùng
//     if (res.status == 200) {
//       this.userData = res.data;
//     }
//   },
//   methods: {
//     // đăng xuất
//     logout() {
//       localStorage.removeItem("access_token");
//       this.$router.push({ path: "/adminLogin" });
//       console.log("logout");
//     },
//   },
// };
</script>

<style lang="scss" scoped>
.manage-user {
  display: flex;
  --spacing: 10px;
}
.sidenav {
  width: 18%;
  height: 100vh;
  min-height: 47rem;
  color: #fff;
  position: fixed;
  background: #6c6b7a;
  padding: calc(var(--spacing) * 2);
  .logo {
    padding: 20px;
    text-align: center;
    box-sizing: border-box;
    border-radius: 50%;
    border: 1px solid #fff;
    border-bottom: 3px solid #fff;
  }
  ul {
    padding: var(--spacing) 0;
    .btn-logout {
      padding: 10px;
      margin: 16px;
      width: 85%;
      text-align: left;
      &:hover {
        color: #000;
        background: #e6dddd;
        transition: 0.5s ease;
        border-radius: 6px;
      }
    }
  }
  li {
    margin: 1rem;
    padding: var(--spacing);
    list-style: none;
    color: #fff;
    &:hover {
      color: #000;
      background: #e6dddd;
      transition: 0.5s ease;
      border-radius: 6px;
    }
  }
}
</style>
