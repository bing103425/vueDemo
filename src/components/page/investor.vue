<template>
  <div class="hello">
    <TopTab :bgcolor="bgcolor"></TopTab>
      <div class="top_div"></div>

      <el-row>
        <div :span="4" class="left_tab">
            <div class="grid-content bg-purple">
                <el-menu :default-active="theactive" class="el-menu-vertical-demo" text-color="#666" active-text-color="#0457b7">

                    <el-menu-item index="1" @click="jump(0)">
                        <span slot="title">社交</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="jump(1)">
                        <span slot="title">金融</span>
                    </el-menu-item>
                    <el-menu-item index="3" @click="jump(2)">
                        <span slot="title">娱乐</span>
                    </el-menu-item>
                    <el-menu-item index="4" @click="jump(3)">
                        <span slot="title">咨讯</span>
                    </el-menu-item>

                </el-menu>
            </div>
        </div>
        <div :span="18" :offset="6"  class="right_content">
            <!-- <div v-for="(items,index) in text1" id="first" class="d_jump"> {{items}} </div> -->
            <div id="first" class="d_jump">
                <div v-for="(items,index) in text1"> {{items}}</div>
            </div>
            <div id="second" class="d_jump">
                <div v-for="(items,index) in text2"> {{items}}</div>
            </div>
            <div id="third" class="d_jump">
                <div v-for="(items,index) in text3"> {{items}}</div>
            </div>
            <div id="fourth" class="d_jump">
                <div v-for="(items,index) in text4"> {{items}}</div>
            </div>
        </div>
    </el-row>

  </div>
</template>

<script>
import TopTab from '@/components/common/top_tab'
export default {
  name: 'HelloWorld',
  data () {
    return {
        theactive:'1',
        bgcolor:'#0457b7',
        text1:["1腾讯公布2018年第一季度业绩【PDF】腾讯公布2018年第一季度业绩【PDF】腾讯公布2018年第一季度业绩【PDF】腾讯公布2018年第一季度业绩【PDF】腾讯公布2018年第一季度业绩【PDF】",'2','3','4','5',"1",'2','3','4','5',"1",'2','3','4','5',"1",'2','3','4','5',"1",'2','3','4','5',"1",'2','3','4','5',"1",'2','3','4','5',"1",'2','3','4','5',"1",'2','3','4','5',"1",'2','3','4','5',"1",'2','3','4','5',"1",'2','3','4','5',"1",'2','3','4','5',"1",'2','3','4','5',"1",'2','3','4','5',"1",'2','3','4','5',"1",'2','3','4','5',"1",'2','3','4','5',"1",'2','3','4','5',"1",'2','3','4','5'],
        text2:["2222222腾讯公布2018年第一季度业绩【PDF】 2018/05/16","腾讯公布2017年第四季度及全年业绩【PDF file】 2018/03/21","腾讯公布2017年第三季度业绩【PDF file】 2017/11/15","腾讯公布2017年第二季度及中期业绩【PDF file】 2017/08/16","腾讯公布2017年第一季度业绩【PDF file】 2017/05/17","腾讯公布2016年第四季度及全年业绩【PDF file】2017/03/22","腾讯公布2016年第三季度业绩【PDF File】 2016/11/24","索尼音乐与腾讯音乐续签中国大陆战略合作协议【PDF File】 2016/10/03","腾讯公布2016年第二季度及中期业绩【PDF File】 2016/08/17","腾讯公布2016年第一季度业绩【PDF file】","腾讯公布2018年第一季度业绩【PDF】 2018/05/16","腾讯公布2017年第四季度及全年业绩【PDF file】 2018/03/21","腾讯公布2017年第三季度业绩【PDF file】 2017/11/15","腾讯公布2017年第二季度及中期业绩【PDF file】 2017/08/16","腾讯公布2017年第一季度业绩【PDF file】 2017/05/17","腾讯公布2016年第四季度及全年业绩【PDF file】2017/03/22","腾讯公布2016年第三季度业绩【PDF File】 2016/11/24","索尼音乐与腾讯音乐续签中国大陆战略合作协议【PDF File】 2016/10/03","腾讯公布2016年第二季度及中期业绩【PDF File】 2016/08/17","腾讯公布2016年第一季度业绩【PDF file】","腾讯公布2018年第一季度业绩【PDF】 2018/05/16","腾讯公布2017年第四季度及全年业绩【PDF file】 2018/03/21","腾讯公布2017年第三季度业绩【PDF file】 2017/11/15","腾讯公布2017年第二季度及中期业绩【PDF file】 2017/08/16","腾讯公布2017年第一季度业绩【PDF file】 2017/05/17","腾讯公布2016年第四季度及全年业绩【PDF file】2017/03/22","腾讯公布2016年第三季度业绩【PDF File】 2016/11/24","索尼音乐与腾讯音乐续签中国大陆战略合作协议【PDF File】 2016/10/03","腾讯公布2016年第二季度及中期业绩【PDF File】 2016/08/17","腾讯公布2016年第一季度业绩【PDF file】","腾讯公布2018年第一季度业绩【PDF】 2018/05/16","腾讯公布2017年第四季度及全年业绩【PDF file】 2018/03/21","腾讯公布2017年第三季度业绩【PDF file】 2017/11/15","腾讯公布2017年第二季度及中期业绩【PDF file】 2017/08/16","腾讯公布2017年第一季度业绩【PDF file】 2017/05/17","腾讯公布2016年第四季度及全年业绩【PDF file】2017/03/22","腾讯公布2016年第三季度业绩【PDF File】 2016/11/24","索尼音乐与腾讯音乐续签中国大陆战略合作协议【PDF File】 2016/10/03","腾讯公布2016年第二季度及中期业绩【PDF File】 2016/08/17","腾讯公布2016年第一季度业绩【PDF file】"],
        text3:["33333腾讯公布2018年第一季度业绩【PDF】 2018/05/16","腾讯公布2017年第四季度及全年业绩【PDF file】 2018/03/21","腾讯公布2017年第三季度业绩【PDF file】 2017/11/15","腾讯公布2017年第二季度及中期业绩【PDF file】 2017/08/16","腾讯公布2017年第一季度业绩【PDF file】 2017/05/17","腾讯公布2016年第四季度及全年业绩【PDF file】2017/03/22","腾讯公布2016年第三季度业绩【PDF File】 2016/11/24","索尼音乐与腾讯音乐续签中国大陆战略合作协议【PDF File】 2016/10/03","腾讯公布2016年第二季度及中期业绩【PDF File】 2016/08/17","腾讯公布2016年第一季度业绩【PDF file】","腾讯公布2018年第一季度业绩【PDF】 2018/05/16","腾讯公布2017年第四季度及全年业绩【PDF file】 2018/03/21","腾讯公布2017年第三季度业绩【PDF file】 2017/11/15","腾讯公布2017年第二季度及中期业绩【PDF file】 2017/08/16","腾讯公布2017年第一季度业绩【PDF file】 2017/05/17","腾讯公布2016年第四季度及全年业绩【PDF file】2017/03/22","腾讯公布2016年第三季度业绩【PDF File】 2016/11/24","索尼音乐与腾讯音乐续签中国大陆战略合作协议【PDF File】 2016/10/03","腾讯公布2016年第二季度及中期业绩【PDF File】 2016/08/17","腾讯公布2016年第一季度业绩【PDF file】","腾讯公布2018年第一季度业绩【PDF】 2018/05/16","腾讯公布2017年第四季度及全年业绩【PDF file】 2018/03/21","腾讯公布2017年第三季度业绩【PDF file】 2017/11/15","腾讯公布2017年第二季度及中期业绩【PDF file】 2017/08/16","腾讯公布2017年第一季度业绩【PDF file】 2017/05/17","腾讯公布2016年第四季度及全年业绩【PDF file】2017/03/22","腾讯公布2016年第三季度业绩【PDF File】 2016/11/24","索尼音乐与腾讯音乐续签中国大陆战略合作协议【PDF File】 2016/10/03","腾讯公布2016年第二季度及中期业绩【PDF File】 2016/08/17","腾讯公布2016年第一季度业绩【PDF file】","腾讯公布2018年第一季度业绩【PDF】 2018/05/16","腾讯公布2017年第四季度及全年业绩【PDF file】 2018/03/21","腾讯公布2017年第三季度业绩【PDF file】 2017/11/15","腾讯公布2017年第二季度及中期业绩【PDF file】 2017/08/16","腾讯公布2017年第一季度业绩【PDF file】 2017/05/17","腾讯公布2016年第四季度及全年业绩【PDF file】2017/03/22","腾讯公布2016年第三季度业绩【PDF File】 2016/11/24","索尼音乐与腾讯音乐续签中国大陆战略合作协议【PDF File】 2016/10/03","腾讯公布2016年第二季度及中期业绩【PDF File】 2016/08/17","腾讯公布2016年第一季度业绩【PDF file】"],
        text4:["4444腾讯公布2018年第一季度业绩【PDF】 2018/05/16","腾讯公布2017年第四季度及全年业绩【PDF file】 2018/03/21","腾讯公布2017年第三季度业绩【PDF file】 2017/11/15","腾讯公布2017年第二季度及中期业绩【PDF file】 2017/08/16","腾讯公布2017年第一季度业绩【PDF file】 2017/05/17","腾讯公布2016年第四季度及全年业绩【PDF file】2017/03/22","腾讯公布2016年第三季度业绩【PDF File】 2016/11/24","索尼音乐与腾讯音乐续签中国大陆战略合作协议【PDF File】 2016/10/03","腾讯公布2016年第二季度及中期业绩【PDF File】 2016/08/17","腾讯公布2016年第一季度业绩【PDF file】","腾讯公布2018年第一季度业绩【PDF】 2018/05/16","腾讯公布2017年第四季度及全年业绩【PDF file】 2018/03/21","腾讯公布2017年第三季度业绩【PDF file】 2017/11/15","腾讯公布2017年第二季度及中期业绩【PDF file】 2017/08/16","腾讯公布2017年第一季度业绩【PDF file】 2017/05/17","腾讯公布2016年第四季度及全年业绩【PDF file】2017/03/22","腾讯公布2016年第三季度业绩【PDF File】 2016/11/24","索尼音乐与腾讯音乐续签中国大陆战略合作协议【PDF File】 2016/10/03","腾讯公布2016年第二季度及中期业绩【PDF File】 2016/08/17","腾讯公布2016年第一季度业绩【PDF file】","腾讯公布2018年第一季度业绩【PDF】 2018/05/16","腾讯公布2017年第四季度及全年业绩【PDF file】 2018/03/21","腾讯公布2017年第三季度业绩【PDF file】 2017/11/15","腾讯公布2017年第二季度及中期业绩【PDF file】 2017/08/16","腾讯公布2017年第一季度业绩【PDF file】 2017/05/17","腾讯公布2016年第四季度及全年业绩【PDF file】2017/03/22","腾讯公布2016年第三季度业绩【PDF File】 2016/11/24","索尼音乐与腾讯音乐续签中国大陆战略合作协议【PDF File】 2016/10/03","腾讯公布2016年第二季度及中期业绩【PDF File】 2016/08/17","腾讯公布2016年第一季度业绩【PDF file】","腾讯公布2018年第一季度业绩【PDF】 2018/05/16","腾讯公布2017年第四季度及全年业绩【PDF file】 2018/03/21","腾讯公布2017年第三季度业绩【PDF file】 2017/11/15","腾讯公布2017年第二季度及中期业绩【PDF file】 2017/08/16","腾讯公布2017年第一季度业绩【PDF file】 2017/05/17","腾讯公布2016年第四季度及全年业绩【PDF file】2017/03/22","腾讯公布2016年第三季度业绩【PDF File】 2016/11/24","索尼音乐与腾讯音乐续签中国大陆战略合作协议【PDF File】 2016/10/03","腾讯公布2016年第二季度及中期业绩【PDF File】 2016/08/17","腾讯公布2016年第一季度业绩【PDF file】"],
    }
  },
  components:{
	TopTab
  },
  mounted() {
      document.documentElement.scrollTop=0;
        this.$nextTick(function () {
        window.addEventListener('scroll', this.onScroll)
        })

  },
    methods: {

    onScroll () {
      let scrolled = document.documentElement.scrollTop || document.body.scrollTop
　　　 
      if (scrolled <=this.$el.querySelector("#second").offsetTop) {
        this.theactive = '1'
      } else if (scrolled > this.$el.querySelector("#second").offsetTop && scrolled <= this.$el.querySelector("#third").offsetTop) {
        this.theactive = '2'
      } else if(scrolled > this.$el.querySelector("#third").offsetTop && scrolled <= this.$el.querySelector("#fourth").offsetTop) {
        this.theactive = '3'
      }else{
          this.theactive = '4'
      }
    },
    jump (index) {
        // console.log('index',index)
        // 用 class="d_jump" 添加锚点
        let jump = document.querySelectorAll('.d_jump')
        let total = jump[index].offsetTop
        // console.log('second',document.querySelectorAll('#second'))
        // console.log('total',total)
        let distance = document.documentElement.scrollTop || document.body.scrollTop
        // 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 50
        console.log(step)
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total
          step = newTotal / 50
          smoothUp()
        }
        function smoothDown () {
          if (distance < total) {
            distance += step
　　　　　　　document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
          }
        }
        function smoothUp () {
          if (distance > total) {
            distance -= step
　　　　　　　document.body.scrollTop = distance
            // console.log(distance)
            document.documentElement.scrollTop = distance
            setTimeout(smoothUp, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
          }
       } 
     }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left_tab{
    position: fixed;
    top: 100px;
    left: 50px;
}
.top_div{
    width: 100%;
    height: 100px;
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
.d_jump{
    margin-bottom: 40px;
}

</style>
