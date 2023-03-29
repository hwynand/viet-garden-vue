<template>
  <component :is="layout">
    <RouterView :layout.sync="layout" style="padding: 20px; width: 75%" />
  </component>
</template>

<script>
import { RouterView } from "vue-router";
import DefaultLayout from "@/layouts/default.vue";

export default {
  components: { RouterView },
  data() {
    return {
      layout: DefaultLayout,
    };
  },
};
</script>

<style>
@import "./assets/reset.css";

.container {
  margin-right: auto;
  margin-left: auto;
}
.bg-dark {
  background: #eee;
  width: 100%;
  float: left;
}
.form-control {
  height: 38px;
  padding: 1px 10px;
  border: 1px solid #ccc;
  width: calc(100% - 100px);
  border-radius: 5px 0 0 5px;
}

.title {
  width: 100%;
  float: left;
  color: #333333;
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 20px;
  text-align: left;
  border-bottom: 1px solid #ff8000;
}
.title a {
  color: #ff8000;
  width: 100%;
  float: left;
  padding-bottom: 10px;
  position: relative;
  font-weight: bold;
}
.sub-bg {
  width: 100%;
  float: left;
}
.sub-head {
  font-size: 13px;
  width: 100%;
  float: left;
  padding: 15px 0;
}
.sub-head a {
  color: #333;
  font-size: 12px;
  padding-right: 10px;
  float: left;
}
.sub-head a:after {
  content: "\f101";
  font-family: "FontAwesome";
  color: #04476d;
  padding-left: 5px;
}
.sub-head a:hover {
  color: #3daa12;
}
.sub-head span {
  float: left;
  font-size: 13px;
  color: #ff6600;
}
.fa-light {
  font: normal normal normal 14px/1 FontAwesome;
}

@media (min-width: 1200px) {
  .container {
    width: 1145px;
  }
}
</style>
