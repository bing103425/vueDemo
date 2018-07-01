<template>
  <div class="TopTab">



    <div class="top_info" :style="{backgroundColor:bgcolor}">
        <el-row type="flex" class="row-bg" justify="center" align="middle">
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <router-link to="/index">
                        <img src="../../assets/logo.png" class="logo_img" alt="">
                    </router-link>
                </div>
            </el-col>
            <el-col :span="2" :offset="4">
                <div class="grid-content bg-purple">
                    <div class="line"></div>
                    <router-link to="/compony">
                        公司信息
                    </router-link>
                </div>
            </el-col>
            <el-col :span="2">
                <div class="grid-content bg-purple">
                    <router-link to="/culture">
                    <div class="line"></div>
                        企业文化
                    </router-link>
                </div>
            </el-col>
            <el-col :span="2">
                <div class="grid-content bg-purple">
                    <router-link to="/system">
                    <div class="line"></div>
                        业务体系
                    </router-link>
                </div>
            </el-col>
            <el-col :span="2">
                <div class="grid-content bg-purple">
                    <router-link to="/investor">
                    <div class="line"></div>
                        投资者关系
                    </router-link>
                </div>
            </el-col>
            <el-col :span="2">
                <div class="grid-content bg-purple">
                    <div class="line"></div>
                    繁 | 简 | EN
                </div>
            </el-col>
        </el-row>
    </div>




  </div>
</template>

<script>
export default {
  name: "TopTab",
  data() {
    return {
        
    };
  },
  props:['bgcolor'],
  mounted() {
       window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        // console.log(scrollTop)
        if(scrollTop>=10){
            $('.row-bg').addClass('bluebg')
        }else{
            $('.row-bg').removeClass('bluebg')
        }
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top_info{
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	color: #fff;
	z-index: 9999;
}
.row-bg:hover{
	height: 84px;
}
.top_info .el-col{
	cursor: pointer;
}
.row-bg{
	height: 84px;
    transition: .3s;
}
.logo_img{
	margin:auto;
}
router-link{
    color: #fff;
}
.thebluebg{
    background-color: #0457b7;
}
.bluebg{
    height: 50px;
    background-color: #0457b7;
    opacity: 0.9;
}
</style>