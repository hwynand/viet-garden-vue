<template>
  <div class="order-details">
    <section class="sub-bg">
      <div id="link" class="container">
        <div class="sub-head">
          <a href="https://vuoncayviet.com"
            ><i class="fa fa-home"></i>Trang chủ
          </a>
          <span> Chi tiết đơn hàng</span>
        </div>
      </div>
    </section>
    <section class="bg-dark">
      <div class="container">
        <div class="content-page">
          <div class="title-signin">
            <h2>Thông tin tài khoản</h2>
          </div>
          <div class="content-payment">
            <div class="account-col">
              <h2>
                <i>
                  <img src="https://vuoncayviet.com/img/user2-160x160.jpg"
                /></i>
                <p>Nguyễn Vũ</p>
              </h2>
              <ul>
                <li>
                  <a href="/personal-info" class="active">Thông tin cá nhân</a>
                </li>
                <li>
                  <a href="/changePassword">Đổi mật khẩu</a>
                </li>
                <li><a href="/myOrder">Đơn Hàng Của Tôi</a></li>
                <li><a href="/">Thoát</a></li>
              </ul>
            </div>
            <!-- content -->
            <div class="account-content">
              <div class="account-main my-menulist">
                <h4>Thông tin đặt hàng</h4>
                <div class="content-menulist">
                  <ul>
                    <li>
                      <span>Tình trạng đơn hàng:</span>
                      <div style="float: left">
                        <span><font color="#ff0000">Chưa xử lý</font></span>
                      </div>
                    </li>
                    <li>
                      <span>Thông tin yêu cầu:</span
                      ><span id="RequireInfo">ko</span>
                    </li>
                    <li>
                      <span>Ngày Yêu Cầu:</span>
                      <span id="RequireDate">3/10/2023 4:25:00 PM</span>
                    </li>
                    <li>
                      <span>Phương thức thanh toán: </span>
                      <span id="SendOrderType"
                        >Thanh toán chuyển khoản qua ngân hàng</span
                      >
                    </li>
                    <li>
                      <span>Hình thức vận chuyển: </span>
                      <span id="SendOrderTransType">Nhận hàng tại công ty</span>
                    </li>
                    <li>
                      <span>Thời gian giao hàng: </span>
                      <span id="SendOrderTime">Từ 3 đến 5 ngày</span>
                    </li>
                  </ul>
                </div>
                <h4>Thông tin người nhận hàng</h4>
                <div class="content-menulist">
                  <ul>
                    <li>
                      <span>Họ Tên:</span>
                      <strong> <span id="RecName"></span></strong>
                    </li>
                    <li>
                      <span>Địa chỉ:</span>
                      <span id="RecAddress"></span>
                    </li>
                    <li>
                      <span>Điện Thoại:</span>
                      <span id="RecPhone"></span>
                    </li>
                  </ul>
                </div>
                <h4>Thông tin chi tiết yêu cầu đặt hàng</h4>
                <div class="table-responsive">
                  <table class="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Giá</th>
                        <th>Số Lượng</th>
                        <th>Tổng Cộng</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="center">1</td>
                        <td>
                          <a href="#">Cây hải đường</a>
                        </td>
                        <td>85,000&nbsp;đ/sản phẩm</td>
                        <td>1</td>
                        <td><strong>85,000&nbsp;đ</strong></td>
                      </tr>

                      <tr class="total-money">
                        <td class="right" colspan="4">Tổng Cộng</td>
                        <td class="left">
                          <strong style="color: #f00">
                            <span id="Total">85,000 đ</span></strong
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.title-signin {
  width: 100%;
  float: left;
  color: #444;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  padding-bottom: 10px;
}
.content-payment {
  width: 100%;
  float: left;
  display: flex;
  margin-top: 20px;
  .account-col {
    width: 300px;
    height: max-content;
    margin-right: 20px;
    float: left;
    border: 1px solid #ddd;
    h2 {
      display: flex;
      font-size: 16px;
      background: #ddd;
      i img {
        width: 70px;
        border-radius: 100%;
        overflow: hidden;
        padding: 3px;
      }
      p {
        margin-top: 33px;
      }
    }
    ul {
      padding: 15px;
      li {
        width: 100%;
        float: left;
        a.active {
          color: #f28902;
        }
        a {
          border-bottom: 1px dashed #ccc;
          padding-bottom: 10px;
          margin-bottom: 10px;
          display: block;
        }
      }
    }
  }
  .account-content {
    .account-main {
      width: 808px;
      float: left;
      border: 1px solid #ddd;
      padding: 15px;
      position: relative;
      min-height: 300px;
      h4 {
        border-top: 2px solid #ccc;
        padding: 7px 0;
        width: 100%;
        float: left;
        font-size: 13px;
        font-weight: bold;
      }
      .content-menulist {
        width: 100%;
        float: left;
        margin-bottom: 20px;
        margin-left: 30px;
        ul li {
          float: left;
          margin-top: 5px;
        }
        span {
          width: 200px;
          float: left;
        }
      }
      // .table-responsive {
      //   .table {
      //     width: 100%;
      //     max-width: 100%;
      //     margin-bottom: 20px;
      //   }
      // }
    }
  }
  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
    thead tr th {
      padding: 8px;
      line-height: 1.42857143;
      background: #999;
      color: #fff;
      border-bottom: none;
      text-align: center;
      text-transform: uppercase;
      vertical-align: middle;
    }
    tbody tr td {
      text-align: center;
      padding: 8px;
    }
    .total-money {
      td {
        border-top: 2px solid #ccc;
      }
      .right {
        text-align: right;
      }
    }
  }
}
</style>
