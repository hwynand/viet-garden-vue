<template>
  <div class="section">
    <div class="sub-bg">
      <div id="link" class="container">
        <div class="sub-head">
          <router-link to="/"><i class="fa fa-home"></i>Trang chủ</router-link>
          <span>Giỏ hàng</span>
        </div>
      </div>
    </div>
  </div>
  <section class="bg-dark" style="padding-top: 20px">
    <div class="container">
      <div class="content-page">
        <div class="title-signin">
          <h2>Giỏ hàng</h2>
        </div>
        <div id="tblBasket" class="cart-page">
          <div id="tblText" class="basket-text">
            - Nhấn nút "+" hoặc "-" để thay đổi số lượng hoặc xóa sản phẩm trong
            giỏ hàng.
            <br />
            - Nhấn nút "Chọn thêm sản phẩm" để chọn thêm sản phẩm khác muốn mua
            thêm.
            <br />
            - Sau khi đã chọn xong các sản phẩm cần mua. Nhấn nút "Thanh toán"
            để mua hàng.
          </div>
          <div class="basket-table table-responsive">
            <div>
              <table
                class="table"
                cellspacing="0"
                rules="all"
                border="1"
                id="grdBasket"
                style="border-style: None; border-collapse: collapse"
              >
                <thead>
                  <tr style="text-align: center">
                    <th scope="col">STT</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Đơn giá</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Thành tiền</th>
                    <th scope="col">Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="text-align: center">
                    <td class="number">
                      <span id="grdBasket__ctl2_lblOrder">1</span>
                    </td>
                    <td class="picture-cart">
                      <a href="#">
                        <img
                          style="width: 100px"
                          src="https://vuoncayviet.com/data/items/1218/cay-hoa-hai-duong.jpg"
                          alt="Cây hải đường"
                        />
                      </a>
                    </td>
                    <td class="namepro-cart">
                      <a href="#">Cây hải đường</a>
                    </td>
                    <td class="unit-cart">
                      <span>85,000&nbsp;đ/Sản phẩm</span>
                    </td>
                    <td class="quanlity-cart">
                      <input type="submit" value="-" @click="onClickMinus" />
                      <input type="text" :value="numberProducts"/>
                      <input type="submit" value="+" @click="onClickPlus" />
                    </td>
                    <td class="payment-cart">
                      <span>85,000&nbsp;đ</span>
                    </td>
                    <td class="delete-cart">
                      <a href="#">Xóa</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="total-price">
            Tổng cộng:<strong style="color: red">
              <span>85,000</span>
            </strong>
          </div>
          <div class="button-signin">
            &nbsp;&nbsp;
            <router-link to="/PaymentLogin">
              <button>Thanh toán</button>
            </router-link>
            &nbsp;&nbsp;
            <router-link to="/">
              <button>Thêm sản phẩm</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      numberProducts: 1,
    };
  },
  methods: {
    // up, dow
    onClickPlus() {
      this.numberProducts += 1;
    },

    onClickMinus() {
      if (this.numberProducts > 1) {
        this.numberProducts = this.numberProducts - 1;
      }
    },
  },
};
</script>

<style scoped>
.basket-text {
  width: 100%;
  float: left;
  margin-bottom: 20px;
  color: #999;
}
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  border-style: None;
  border-collapse: collapse;
}
.basket-table {
  width: 100%;
  float: left;
}
.basket-table .table > thead > tr > th {
  background: #eee;
  border-bottom: none;
  text-align: center;
  text-transform: uppercase;
  padding: 15px 8px;
  color: #666;
  border: none;
}

.basket-table .table > tbody > tr > td {
  vertical-align: middle;
  border: none;
  border-top: 1px solid #eee;
}
.quanlity-cart input[type="submit"] {
  width: 30px;
  height: 30px;
  border: none;
  background: #ccc;
}
.quanlity-cart input[type="text"] {
  text-align: center;
  border: 1px solid #ccc;
  max-width: 50px;
  height: 30.3px;
}
.basket-table .number {
  text-align: center;
}
.total-price {
  width: 100%;
  float: left;
  padding: 20px 0;
  border-top: 2px solid #ccc;
  text-align: right;
}
.total-price span {
  font-size: 18px;
  margin-left: 12px;
}
.button-signin {
  clear: both;
  width: 100%;
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding-top: 20px;
  float: left;
}
.button-signin button {
  width: 16%;
  margin: 5px;
  height: 2.5em;
  float: left;
  border: none;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  background: #f28902;
  margin-top: 10px;
}
</style>
