<template>
  <div class="hello">
    <TopTab :bgcolor="bgcolor"></TopTab>
    <div class="top_div"></div>
    <el-row class="tac">
        <el-col :span="3" :offset="2" class="left_nav">
            <el-menu default-active="1" class="el-menu-vertical-demo" text-color="#666" active-text-color="#0457b7">

            <el-menu-item index="1" @click="goAnchor('#anchor-1')">
                <span slot="title">公司动态</span>
            </el-menu-item>
            <el-menu-item index="2" @click="goAnchor('#anchor-2')">
                <span slot="title">发展历程</span>
            </el-menu-item>
            <el-menu-item index="3" @click="goAnchor('#anchor-3')">
                <span slot="title">管理团队</span>
            </el-menu-item>
            <el-menu-item index="4" @click="goAnchor('#anchor-4')">
                <span slot="title">社会责任</span>
            </el-menu-item>

            </el-menu>
        </el-col>
        <el-col :span="17" :offset="5" class="right_content">
            <div class="first">
                <p :id="'anchor-1'" class="scroll_title">公司动态</p>
                <p class="scroll_content" v-for="(items,index) in text1" :key="index">{{items}}</p>
            </div>
            <div class="first">
                <p :id="'anchor-2'" class="scroll_title">发展历程</p>
                <p class="scroll_content" v-for="(items,index) in text2" :key="index">{{items}}</p>
            </div>
            <div class="first">
                <p :id="'anchor-3'" class="scroll_title">管理团队</p>
                <p class="scroll_content" v-for="(items,index) in text3" :key="index">{{items}}</p>
            </div>
            <div class="first ao" id="999">
                <p :id="'anchor-4'" class="scroll_title">社会责任</p>
                <p class="scroll_content" v-for="(items,index) in text4" :key="index">{{items}}</p>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import TopTab from '@/components/common/top_tab'
export default {
  name: 'HelloWorld',
  data () {
    return {
        bgcolor:'#0457b7',
        text1:["腾讯公布2018年第一季度业绩【PDF】 2018/05/16","腾讯公布2017年第四季度及全年业绩【PDF file】 2018/03/21","腾讯公布2017年第三季度业绩【PDF file】 2017/11/15","腾讯公布2017年第二季度及中期业绩【PDF file】 2017/08/16","腾讯公布2017年第一季度业绩【PDF file】 2017/05/17","腾讯公布2016年第四季度及全年业绩【PDF file】2017/03/22","腾讯公布2016年第三季度业绩【PDF File】 2016/11/24","索尼音乐与腾讯音乐续签中国大陆战略合作协议【PDF File】 2016/10/03","腾讯公布2016年第二季度及中期业绩【PDF File】 2016/08/17","腾讯公布2016年第一季度业绩【PDF file】"],
        text2:["腾讯公布2018年第一季度业绩【PDF】 2018/05/16","腾讯公布2017年第四季度及全年业绩【PDF file】 2018/03/21","腾讯公布2017年第三季度业绩【PDF file】 2017/11/15","腾讯公布2017年第二季度及中期业绩【PDF file】 2017/08/16","腾讯公布2017年第一季度业绩【PDF file】 2017/05/17","腾讯公布2016年第四季度及全年业绩【PDF file】2017/03/22","腾讯公布2016年第三季度业绩【PDF File】 2016/11/24","索尼音乐与腾讯音乐续签中国大陆战略合作协议【PDF File】 2016/10/03","腾讯公布2016年第二季度及中期业绩【PDF File】 2016/08/17","腾讯公布2016年第一季度业绩【PDF file】"],
        text3:["腾讯公布2018年第一季度业绩【PDF】 2018/05/16","腾讯公布2017年第四季度及全年业绩【PDF file】 2018/03/21","腾讯公布2017年第三季度业绩【PDF file】 2017/11/15","腾讯公布2017年第二季度及中期业绩【PDF file】 2017/08/16","腾讯公布2017年第一季度业绩【PDF file】 2017/05/17","腾讯公布2016年第四季度及全年业绩【PDF file】2017/03/22","腾讯公布2016年第三季度业绩【PDF File】 2016/11/24","索尼音乐与腾讯音乐续签中国大陆战略合作协议【PDF File】 2016/10/03","腾讯公布2016年第二季度及中期业绩【PDF File】 2016/08/17","腾讯公布2016年第一季度业绩【PDF file】"],
        text4:["腾讯公布2018年第一季度业绩【PDF】 2018/05/16","腾讯公布2017年第四季度及全年业绩【PDF file】 2018/03/21","腾讯公布2017年第三季度业绩【PDF file】 2017/11/15","腾讯公布2017年第二季度及中期业绩【PDF file】 2017/08/16","腾讯公布2017年第一季度业绩【PDF file】 2017/05/17","腾讯公布2016年第四季度及全年业绩【PDF file】2017/03/22","腾讯公布2016年第三季度业绩【PDF File】 2016/11/24","索尼音乐与腾讯音乐续签中国大陆战略合作协议【PDF File】 2016/10/03","腾讯公布2016年第二季度及中期业绩【PDF File】 2016/08/17","腾讯公布2016年第一季度业绩【PDF file】"],
    }
  },
  components:{
	TopTab
  },
  mounted() {
      document.documentElement.scrollTop=0;
  },
    methods: {
        goAnchor(selector) {
            let anchor = this.$el.querySelector(selector)
            $("html").animate({scrollTop:anchor.offsetTop});
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top_div{
    width: 100%;
    height: 84px;
}
.indo{
    width: 800px;
    position: fixed;
    top: 0;
    z-index: 999999;
}
.left_nav{
    position: fixed;
    top: 84px;
}
.scroll_title{
    padding: 30px;
    color: #000;
    font-size: 20px;
    font-weight: 400;
}
.scroll_content{
    line-height: 30px;
    color: #5e6267;
    font-size: 14px;
    text-decoration: none;
    -webkit-transition: color .3s;
    transition: color .3s;
    padding-left: 50px;
}
.right_content{
    text-align: left;
}
</style>