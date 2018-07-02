<template>
  <div class="hello">
    <TopTab :bgcolor="bgcolor"></TopTab>
    <div class="top_div"></div>
    <el-row class="tac">
        <el-col :span="3" :offset="2" class="left_nav">
            <el-tabs :tab-position="tabPosition" style="height: 200px;">
                <el-tab-pane label="核心理念">核心理念</el-tab-pane>
                <el-tab-pane label="配置管理">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
            </el-tabs>
        
            <el-menu default-active="1" class="el-menu-vertical-demo" text-color="#666" active-text-color="#0457b7">

                <el-menu-item index="1" @click="goAnchor('#anchor-1')">
                    <span slot="title">核心理念</span>
                </el-menu-item>
                <el-menu-item index="2" @click="goAnchor('#anchor-2')">
                    <span slot="title">人才发展</span>
                </el-menu-item>
                <el-menu-item index="3" @click="goAnchor('#anchor-3')">
                    <span slot="title">办公环境</span>
                </el-menu-item>
                <el-menu-item index="4" @click="goAnchor('#anchor-4')">
                    <span slot="title">员工活动</span>
                </el-menu-item>

            </el-menu>
        </el-col>
        <el-col :span="17" :offset="5" class="right_content">
                <p :id="'anchor-1'" class="scroll_title">核心理念</p>
                <div class="first">
                    <div v-for="(items,index) in text1" :key="index">
                        <img :src="items.src" alt="" class="scroll_img">
                        <p class="scroll_content" v-for="(text,index) in items.text" :key="index">{{text}}</p>
                    </div>
                </div>

            <div class="second">
                <p :id="'anchor-2'" class="scroll_title">人才发展</p>
                <p class="scroll_content" v-for="(items,index) in text2" :key="index">{{items}}</p>
            </div>
            <div class="third">
                <p :id="'anchor-3'" class="scroll_title">办公环境</p>
                <p class="scroll_content" v-for="(items,index) in text3" :key="index">{{items}}</p>
            </div>
            <div class="fourth">
                <p :id="'anchor-4'" class="scroll_title">员工活动</p>
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
      text1:[
          {
          src:require("../../assets/idea_1.jpg"),
          text:['不断倾听和满足用户需求，引导并超越用户需求，赢得用户尊敬','·通过提升品牌形象，使员工具有高度企业荣誉感，赢得员工尊敬','·推动互联网行业的健康发展，与合作伙伴共成长，赢得行业尊敬','·注重企业责任，用心服务，关爱社会、回馈社会，赢得社会尊敬']
          },
          {
          src:require("../../assets/idea_2.jpg"),
          text:['不断倾听和满足用户需求，引导并超越用户需求，赢得用户尊敬','·通过提升品牌形象，使员工具有高度企业荣誉感，赢得员工尊敬','·推动互联网行业的健康发展，与合作伙伴共成长，赢得行业尊敬','·注重企业责任，用心服务，关爱社会、回馈社会，赢得社会尊敬']
          },
          {
          src:require("../../assets/idea_3.jpg"),
          text:['不断倾听和满足用户需求，引导并超越用户需求，赢得用户尊敬','·通过提升品牌形象，使员工具有高度企业荣誉感，赢得员工尊敬','·推动互联网行业的健康发展，与合作伙伴共成长，赢得行业尊敬','·注重企业责任，用心服务，关爱社会、回馈社会，赢得社会尊敬']
          },
          {
          src:require("../../assets/idea_4.jpg"),
          text:['不断倾听和满足用户需求，引导并超越用户需求，赢得用户尊敬','·通过提升品牌形象，使员工具有高度企业荣誉感，赢得员工尊敬','·推动互联网行业的健康发展，与合作伙伴共成长，赢得行业尊敬','·注重企业责任，用心服务，关爱社会、回馈社会，赢得社会尊敬']
          },
      ],
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
            var anchor = this.$el.querySelector(selector)
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
.hello .top_info{
    background-color: #0457b7;
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
.scroll_img{
    padding-left: 50px;
    margin: 30px 0;
}
.first{
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
}

</style>
