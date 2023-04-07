<template>
  <div class="content">
    <!-- Hiển thị sản phẩm -->
    <div class="show-products" v-if="show == false">
      <div class="head">
        <div class="title1">Quản lý sản phẩm</div>
        <userSearch></userSearch>
      </div>
      <button class="btn-adduser" href="#edit" @click="addProducts">
        <i class="fa-light fa-circle-plus"></i>&nbsp;Thêm sản phẩm
      </button>
      <table class="container">
        <thead>
          <th>Mã sản phẩm</th>
          <th>Tên sản phẩm</th>
          <th>Hình ảnh</th>
          <th>Giá sản phẩm</th>
          <th>Trạng thái</th>
          <th>Action</th>
        </thead>
        <tbody>
          <td>1</td>
          <td>Vu</td>
          <td>Vuvu@gmail.com</td>
          <td>Hanoi</td>
          <td>032323322</td>
          <td>
            <a @click="addProducts"
              ><i class="fa fa-file-pen" title="edit"></i
            ></a>
            <a
              ><i
                @click="handleDelete"
                class="fa-regular fa-trash-can"
                title="delete"
                style="--fa-primary-color: crimson"
              ></i
            ></a>
          </td>
        </tbody>
      </table>
    </div>
    <!-- thêm sản phẩm -->
    <div class="show-addProducts" v-if="show == true">
      <form>
        <h2 class="title1">Thông tin sản phẩm</h2>
        <!--  -->
        <div class="form-input">
          <label>Nhóm danh mục <a title="trường bắt buộc">(*)</a></label>
          <div class="form-categories">
            <select class="category-groups" @click="checkGroups">
              <option selected="" value="0">
                Vui lòng chọn nhóm danh mục !
              </option>
              <option value="1">Cây cảnh</option>
              <option value="2">Chậu cảnh</option>
            </select>
          </div>
        </div>
        <!--  -->
        <div class="form-input">
          <label>Danh mục <a title="trường bắt buộc">(*)</a></label>
          <div class="form-categories">
            <select class="categories" v-show="idGroups == 1">
              <option selected="" value="0">Vui lòng chọn danh mục !</option>
              <option value="1">Cây cảnh để bàn</option>
              <option value="2">Cây thủy sinh</option>
              <option value="3">Cây cảnh nội thất</option>
            </select>
            <select class="categories" v-show="idGroups == 2">
              <option selected="" value="0">Vui lòng chọn danh mục !</option>
              <option value="1">Chậu đất nung</option>
              <option value="2">Chậu đá mài - xi măng</option>
              <option value="3">Chậu composite</option>
            </select>
          </div>
        </div>
        <div class="form-input">
          <label>Tên sản phẩm <a title="trường bắt buộc">(*)</a></label>
          <input type="text" required />
        </div>
        <!--  -->
        <div class="form-input">
          <label>Hình ảnh <a title="trường bắt buộc">(*)</a></label>
          <div class="list-img">
            <div class="img" v-for="(image, index) in images" :key="index">
              <img
                :src="
                  image ||
                  'https://www.namepros.com/attachments/empty-png.89209/'
                "
              />
              <button class="btn-del-img" @click="remoteImage(index)">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <input
            style="border: none"
            accept="image/*"
            type="file"
            @change="changeImage"
            multiple
            required
          />
        </div>
        <!--  -->
        <div class="form-input">
          <label>Giá sản phẩm <a title="trường bắt buộc">(*)</a></label>
          <input type="number" required />
        </div>
        <!--  -->
        <div class="form-input">
          <label>Số lượng hàng <a title="trường bắt buộc">(*)</a></label>
          <input type="number" required />
        </div>
        <!--  -->
        <div class="form-input">
          <label>Giá sản phẩm <a title="trường bắt buộc">(*)</a></label>
          <input type="number" required />
        </div>
        <div class="footer">
          <button class="btn-adduser" type="submit" @click="handleSave">
            Lưu
          </button>
          <button class="btn-adduser" type="reset" @click="addProducts">
            Hủy
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import userSearch from "./UserSearch.vue";
// import { api } from "@/api";
export default {
  data() {
    return {
      show: false,
      newImage: "",
      images: [],
      userData: {},
      idGroups: "1",
    };
  },
  methods: {
    addProducts() {
      this.show = !this.show;
    },
    //chọn nhóm danh mục
    checkGroups() {
      console.log("idGroups");
    },
    //update anh
    changeImage(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files);
    },
    createImage(files) {
      var vm = this;
      for (var index = 0; index < files.length; index++) {
        var reader = new FileReader();
        reader.onload = function (event) {
          const imageUrl = event.target.result;
          vm.images.push(imageUrl);
        };
        reader.readAsDataURL(files[index]);
      }
    },
    remoteImage(index) {
      this.images.splice(index, 1);
    },

    //Lưu thông tin
    handleSave() {
      alert("Đã lưu!");
    },

    // xóa phần tử
    handleDelete() {
      confirm("Bạn có chắc muốn xóa");
    },
  },
  components: {
    userSearch,
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 80%;
  left: 17rem;
  padding: 20px;
  .title1 {
    padding: 2rem 0 2rem 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
  }
  .btn-adduser {
    background: #40c5e5;
    border: 1px solid #9abad6;
    border-radius: 7px;
    margin: 0 0 1.5em 1em;
    height: 3em;
    width: 10em;
    color: #fff;
  }
  .show-products {
    .head {
      display: flex;
      padding: 1rem 1rem 2rem 0px;
      justify-content: space-between;
      align-items: center;
    }
    table {
      border: 1px solid #66afe9;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(102, 175, 233, 0.6);
      border-collapse: collapse;
      margin-left: 16px;
      th {
        height: 3em;
        padding: 10px;
        border-bottom: 1px solid #ccc;
      }
      td {
        padding: 10px;
        text-align: center;
        a {
          margin: 8px;
          cursor: pointer;
        }
      }
    }
  }
  .show-addProducts {
    display: flex;
    margin: auto 4rem;
    .form-input {
      padding: 1rem;
      width: 10rem;
      label {
        padding: 0rem;
      }
      .form-categories {
        border: 1px solid #ccc;
        width: 50rem;
        height: 2rem;
        padding: 5px 6px;
      }
      .list-img {
        display: flex;
        width: 51rem;
        height: 10rem;
        overflow: inherit;
        margin-top: 1.1em;
        padding: 0 0.25em;
        border: 1px solid #ccc;
        .img {
          .btn-del-img {
            float: right;
            transform: translateY(-9.4rem);
            margin-right: 14px;
            i {
              background: #edc6cd;
              width: 1rem;
              height: 1rem rem;
              border-radius: 50%;
              padding-top: 1.5px;
            }
          }
        }
      }
      input {
        width: 50rem;
        border: 1px solid #ccc;
        margin: 0.8rem 1rem 3px 0;
        height: 1.8rem;
        padding: 2px;
      }
      img {
        padding: 0.5em 0.25em;
        width: 100%;
        max-width: 50rem;
        height: 100%;
        max-height: 50rem;
        object-fit: cover;
      }
    }
    .footer {
      display: flex;
      margin-left: 0.5rem;
      button {
        width: 6rem;
        margin-top: 1rem;
      }
    }
  }
}
</style>
