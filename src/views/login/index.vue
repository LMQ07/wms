<template>
  <div class="login-container">
    <div class="divContainer">
      <div class="divLeft">
        <div class="divTitle">
          <img src="@/assets/loginTitle.png" alt="">
        </div>
        <div class="form" style="margin-top:50px">
          <el-form ref="form" :model="loginForm">
            <el-form-item size="medium">
              <div class="iconLogin">
                <img src="@/assets/loginphone.png" alt="">
              </div>
              <el-input v-model="loginForm.username" />
            </el-form-item>
            <el-form-item size="medium">
              <div class="iconLogin">
                <img src="@/assets/loginlock.png" alt="">
              </div>
              <el-input v-model="loginForm.password" type="password" :show-password="true" />
            </el-form-item>
            <div class="rememberPassword">
              <input v-model="isRemember" type="checkbox" class="isRemember">
              <span class="tip">
                记住密码
              </span>
            </div>
            <el-form-item>
              <div class="loginBtn">
                <el-button>立即登入</el-button>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="divRight" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      isRemember: false
    }
  }

}
</script>

<style lang="scss" scoped>
$bg:#fdfafa;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .divContainer{
    width: 958px;
    height: 516px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 20px rgb(93 93 93 / 33%);
    background-color: #fff;
    border-radius: 40px;
    .divLeft{
    float: left;
    width: 398px;
    height: 516px;
    background: #fff;
    border-radius: 34px 0 0 34px;
    margin: 0 auto;
    ::v-deep .el-form-item__content{
      background-color: #f8f5f5;
    }
    .iconLogin{
      display: flex;
      align-items: flex-end;
      background: #eae7e7;
      img{
      width: 25px;
      height: 24px;
      margin: 12px 13px;
      }
    }
    ::v-deep .el-form-item__content{
      margin: 0 60px 20px;
      display: flex;
      align-items: flex-end;
      border-radius: 7px;
      overflow: hidden;
    }
    ::v-deep .el-input__inner{
      height: 48px;
      background-color: #f8f5f5;
      border: 1px solid #f8f5f5;
      color: black;
      :hover{
        border: 1px solid black;
      }
    }
    .divTitle{
    margin-left: 124px;
    margin-top: 72px;
    img{
      width: 150px;
    height: 64px;
     }
    }
    .rememberPassword{
      margin: 0 60px 20px;
      display: flex;
      align-items: center;
      .isRemember{
        border: 1px solid #dcdfe6;
        border-radius: 2px;
      }
      .tip{
      padding-left: 10px;
      font-size: 14px;
      }
    }
    .loginBtn{
      width: 100%;
      .el-button{
        width: 100%;
        height: 50px;
        background: #ffb200;
        border-radius: 8px;
        box-shadow: 0 2px 9px 1px rgb(255 178 0 / 47%);
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        color: #332929;
        line-height: 22px;
      }
    }
    }
    .divRight{
      float: right;
    background-image: url(../../assets/loginBgc.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    width: 560px;
    height: 516px;
}
    }
  }
</style>
