<template>
  <div class="hello">
	<router-view/>
    <div class="footer">
        <el-row type="flex" justify="start" align="middle" class="footer_row">
            <el-col :span="2" :offset="2">
                <div class="grid-content bg-purple">
                    <p class="footer_title">了解更多</p>
                    <p class="footer_content">街景视图</p>
                    <p class="footer_content">街景视图</p>
                    <p class="footer_content">街景视图</p>
                </div>
            </el-col>
            <el-col :span="2" :offset="1">
                <div class="grid-content bg-purple">
                    <p class="footer_title">关注我们</p>
                    <p class="footer_content">街景视图</p>
                    <p class="footer_content">街景视图</p>
                    <p class="footer_content">街景视图</p>
                    
                </div>
            </el-col>
            <el-col :span="2" :offset="1">
                <div class="grid-content bg-purple">
                    <p class="footer_title">加入我们</p>
                    <p class="footer_content">街景视图</p>
                    <p class="footer_content">街景视图</p>
                    <p class="footer_content">街景视图</p>
                    
                </div>
            </el-col>
            <el-col :span="2" :offset="1">
                <div class="grid-content bg-purple">
                    <p class="footer_title">联系我们</p>
                    <p class="footer_content">街景视图</p>
                    <p class="footer_content">街景视图</p>
                    <p class="footer_content">街景视图</p>
                    
                </div>
            </el-col>
            <el-col :span="2" :offset="1">
                <div class="grid-content bg-purple">
                    <p class="footer_title">法律信息</p>
                    <p class="footer_content">街景视图</p>
                    <p class="footer_content">街景视图</p>
                    <p class="footer_content">街景视图</p>
                    
                </div>
            </el-col>
            <el-col :span="7" :offset="1">
                <img src="../../assets/footer_logo.png" alt="">
            </el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle" class="footer_row">
            <el-col :span="12" class="footer_content">
                法律声明 监督举报 网站地图 粤网文【2017】6138-1456号
            </el-col>
            <el-col :span="12" class="footer_content">
                Copyright © 1998 - 2018 Tencent. All Rights Reserved.腾讯公司 版权所有
            </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
//   mounted() {
//        window.addEventListener('scroll', this.handleScroll)
//   },
//     methods: {
//         handleScroll () {
//             var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
//             console.log(scrollTop)
//             if(scrollTop>=10){
//                 $('.row-bg').addClass('bluebg')
//             }else{
//                 $('.row-bg').removeClass('bluebg')
//             }
//         },
//     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
    width: 100%;
    background: #ecf0f1;
    margin-top: 50px;
}
.footer_row{
    padding: 30px 0;
}
.footer_title{
    font-size: 20px;
    color: #333;
    font-weight: 400;
    margin-bottom: 20px;
}
.footer_content{
    font-size: 14px;
    color: #747b81;
    line-height: 30px;
}
</style>