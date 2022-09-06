<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <div class="right">
        <div class="banner">
          <img src="@/assets/layout/dashboard-banner-left@2x.5afd2949.png" alt="" class="leftImg">
          <img src="@/assets/layout/dashboard-banner-right@2x.28195570.png" alt="" class="rightImg">
          <img src="@/assets/layout/userImg.png" alt="" class="userImg">
          <p class="userTitle">仓储管理员</p>
          <p class="subject-title">我不是为了输赢，我就是认真！</p>
          <p class="subject-author">—— 罗永浩</p>
          <div class="site">
            <p>北京总仓</p>
          </div>
        </div>
        <div class="container">
          <p class="subject">待办信息</p>
          <div class="item-list" style="margin: 0 15px">
            <el-row>
              <el-col :span="8" style="padding: 0 15px">
                <router-link to="/manage-storage-in/list-in/list">
                  <div class="itemContainer">123</div>
                </router-link>
              </el-col>
              <el-col :span="8" style="padding: 0 15px">
                <router-link to="/manage-storage-out/list-out">
                  <div class="itemContainer">123</div>
                </router-link>
              </el-col>
              <el-col :span="8" style="padding: 0 15px">
                <router-link to="/manage-storage/list">
                  <div class="itemContainer">123</div>
                </router-link>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div class="left">123</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: {

  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }

}
</script>

<style lang="scss" scoped>
.dashboard {
  &-text {
    font-size: 30px;
    line-height: 46px;
    display: flex;
    .right{
    width: calc(100% - 261px);
    padding-right: 30px;
    .banner{
    position: relative;
    width: 100%;
    height: 148px;
    background: linear-gradient(270deg,#ffc771,#ffa634);
    box-shadow: 0 0 6px 0 rgb(188 151 69 / 12%);
    border-radius: 12px;
    .leftImg{
    position: absolute;
    top: 0px;
    left: 0px;
    height: 148px;
    }
    .rightImg{
    position: absolute;
    top: 0px;
    right: 0px;
    height: 148px;
    }
    .userImg{
    position: absolute;
    top: 31px;
    left: 43px;
    height: 62px;
    }
    .userTitle{
    position: absolute;
    left: 36px;
    bottom: 6px;
    font-size: 16px;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #332929;
    line-height: 22px;
    }
    .subject-title{
    position: absolute;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: 25px;
    top: 25px;
    left: 200px;
    font-size: 18px;
    }
    .subject-author{
    top: 65px;
    left: 400px;
    font-size: 16px;
    position: absolute;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: 25px;
    }
    .site{
    position: absolute;
    top: 20px;
    right: 20px;
    width: 147px;
    height: 40px;
    background: #f8f5f5;
    border-radius: 6px;
    opacity: .79;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: 14px;
    font-weight: 500;
    color: #332929;
    }
  }
  .container{
    margin-top: 20px;
    width: 100%;
    height: 282px;
    background: #fff;
    box-shadow: 0 0 6px rgba(144,142,142,.17);
    border-radius: 12px;
    padding: 25px;
    .subject{
    font-size: 16px;
    font-family: PingFangSC-Semibold,PingFang SC;
    font-weight: 600;
    color: #332929;
    line-height: 22px;
    margin: 0;
    margin-bottom: 19px;
    }
    .itemContainer{
    position: relative;
    height: 186px;
    background: #fbf7f7;
    border-radius: 8px;
    padding: 20px;
    cursor: pointer;
    &:hover{
    background: hsla(0,0%,100%,.8);
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 6%);
    border-radius: 8px;
    border: 1px solid #f5efee;
    }
    }
  }
    }
.left{
    width: 261px;
    height: 451px;
    background: #fff;
    box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
    border-radius: 12px;
    padding: 30px;
}
  }
}
</style>
