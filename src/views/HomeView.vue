<template>
  <div class="homeView">
    <!-- banner  -->
    <!-- <div class="bg-dark">
      <div class="container">
        <div class="content">
          <div class="banner-slider">
            <div class="slider">
              <div class="item">
                <image src="" alt="">
                  <v-carousel
                    cycle
                    height="400"
                    hide-delimiter-background
                    show-arrows="hover"
                  >
                    <v-carousel-item
                      v-for="(slide, i) in slides"
                      :key="i"
                      :src="slide.src"
                    >
                    </v-carousel-item>
                  </v-carousel>
                </image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="content">
      <div class="bg-dark">
        <div class="main-block">
          <div class="title">
            <a title="Sản phẩm bán chạy" target="">
              <span>Sản phẩm bán chạy</span>
            </a>
          </div>
          <div class="product-block">
            <ul>
              <li v-for="(item, index) in list" :key="index">
                <div class="product">
                  <div class="pic-news">
                    <router-link :to="'/productView/' + item.id">
                      <img :src="item.img[0]" :alt="item.name"
                    /></router-link>
                  </div>
                  <h3>
                    <a href="/productView/">{{ item.name }}</a>
                    <a>({{ item.id }})({{ item.class }})</a>
                  </h3>
                  <div class="price-product">{{ item.price }}</div>
                  <div class="cart-product">
                    <a href="/cartView">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                    <router-link :to="'/productView/' + item.id"
                      ><i class="fa fa-eye"></i
                    ></router-link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: "",
      slides: [
        {
          src: "https://vuoncayviet.com/data/aditems/93/vuon-cay-viet-banner-new.jpg",
        },
        {
          src: "https://lh3.googleusercontent.com/WYHmLSJ2u0hDe9UfCB3Zq55kusoJG-hkfnZlmq2QnvcbjzTg78Mtq0NlIPiMjSyxXHAdso67lAHMG7wFWmEzEmfXFnQkGQluZwQrI_Ld1EpwWPu2HdQmV-i9IcShCZfpsIqfne4lZC6sP2cbHt1kDlnBTihfXChdyWvI3uo26pbSuiPs21IoXD73TWrOc06j5vOu349OLORX-y51AGIvMZ3m0Wg806QrCLFVwZDjmiRrflBOVnYThwUopRijlIqXE6wTZtHefX51OOdhCsjlTC2Ph_VP_e34IsmXIkrRK-Aw5aawM00wqOGA_ERfQDMpkLXr2dkA3SmYHrTVpKDEHrPMT8nnllX-H4pX30ualzalMhjH6_fnhuu_bihnhYCygiQq1D_hzDYLOD7nsKOvJSyLwl2UpVsOMPunyTWNf97J0iEdVH35sCWWbridIYt1QAr0aBqg6SElKRiysUdGu2LJgk3cZoWXgFtLV7OG8yJC13Y-dXbUgZ3nc4_jIwhvRo3MSgWHMeKj_r0GqZjeyuPIDC9WKW5DVEjvHNUU7rfuCZgcgiOyYZZYQpWbXzN9bzH9gU48MnrI0FlpWxHISIVsX9HGEWn5G5u3PUDNZw4OvKbNm2p9oLVKLFJrfYPRAiL58sXZlDxK7vWMO-eXhxJd4CRs5CoHzJfWfDsoETPhgtJHE2zhV3qxL7_mDb6p5VNv1KFWRDxvN_Rc0dIifQHxLYgiUogKXR4GRkGUp6vmpp8-4nkU6B4OZsP4hDCDPwyoXLv-ogAumYyR6fp4_zU_5rdbd0YugqUB3AeqzgwMgSqSspwnSu-53g8c4yXKGuAHwQyWQFCXn2nYHKmhThAuuUUGSyBVUSqfTcMeErskrlzHKANLQDh5uCJ5pKpW1Zw6bf-Vevu5NiLcPzLTYnQXhkPTCwwfRccli-cm4-DZ5_c=w1920-h674-no?authuser=0",
        },
      ],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    // Lấy giữu liệu từ API
    async getData() {
      try {
        const response = await axios.get("http://localhost:3000/products");
        this.list = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<!-- <style lang="scss" scoped>
// .banner-slider {
//   width: 100%;
//   float: left;
// }
// ::v-deep .v-img__img {
//   width: auto;
// }
// .content {
//   display: flex;
// }
</style> -->
