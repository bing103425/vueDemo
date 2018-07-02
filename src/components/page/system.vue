<template>
  <div class="hello">
      <TopTab :bgcolor="bgcolor"></TopTab>
      <div class="top_div"></div>
      <!-- <LeftTab></LeftTab> -->
      <el-row class="tac">
  <el-col :span="3" :offset="2" class="left_nav">
      
  <el-tabs v-model="activeName" tab-position="left" @tab-click="handleClick">
    <el-tab-pane label="社交" name="first"></el-tab-pane>
    <el-tab-pane label="金融" name="second"></el-tab-pane>
    <el-tab-pane label="娱乐" name="third"></el-tab-pane>
    <el-tab-pane label="咨讯" name="fourth"></el-tab-pane>
  </el-tabs>

  </el-col>
  <el-col :span="17" :offset="5" class="right_content">
      <div class="first d_jump" id="first">   
          <p :id="'anchor-1'" class="scroll_title">社交</p>
          <p class="scroll_content" v-for="(items,index) in text1" :key="index">{{items}}</p>
      </div>
      <div class="first d_jump" id="second">
          <p :id="'anchor-2'" class="scroll_title">金融</p>
          <p class="scroll_content" v-for="(items,index) in text2" :key="index">{{items}}</p>
      </div>
      <div class="first d_jump" id="third">
          <p :id="'anchor-3'" class="scroll_title">娱乐</p>
          <p class="scroll_content" v-for="(items,index) in text3" :key="index">{{items}}</p>
      </div>
      <div class="first d_jump" id="fourth">
          <p :id="'anchor-4'" class="scroll_title">咨讯</p>
          <p class="scroll_content" v-for="(items,index) in text4" :key="index">{{items}}</p>
      </div>
  </el-col>
</el-row>
  </div>
</template>

<script>
import TopTab from '@/components/common/top_tab'
import LeftTab from '@/components/common/left_tab'
export default {
  name: 'HelloWorld',
  data () {
    return {
        activeName: 'first',
        bgcolor:'#0457b7',
        text1:["QQ是腾讯公司推出的一款横跨PC和移动互联网时代的即时通信平台。","丰富的功能和趣味的玩法，让QQ成为中国年轻用户最喜爱的社交平台之一。","用户可以随时随地与好友聊天、视频、斗图，用主题、气泡、挂件等个性装扮让自己与众不同，在这里结交趣味相投的新朋友；用厘米秀开启年轻人专属的个性化聊天模式；畅游在动漫、文学、手游的娱乐海洋里；体验QQ钱包带来话费充值、网购、转账收款的全新移动支付。","腾讯公布2017年第二季度及中期业绩【PDF file】 2017/08/16","腾讯公布2017年第一季度业绩【PDF file】 2017/05/17","腾讯公布2016年第四季度及全年业绩【PDF file】2017/03/22","腾讯公布2016年第三季度业绩【PDF File】 2016/11/24","索尼音乐与腾讯音乐续签中国大陆战略合作协议【PDF File】 2016/10/03","腾讯公布2016年第二季度及中期业绩【PDF File】 2016/08/17","腾讯公布2016年第一季度业绩【PDF file】"],
        text2:["QQ是腾讯公司推出的一款横跨PC和移动互联网时代的即时通信平台。","丰富的功能和趣味的玩法，让QQ成为中国年轻用户最喜爱的社交平台之一。","用户可以随时随地与好友聊天、视频、斗图，用主题、气泡、挂件等个性装扮让自己与众不同，在这里结交趣味相投的新朋友；用厘米秀开启年轻人专属的个性化聊天模式；畅游在动漫、文学、手游的娱乐海洋里；体验QQ钱包带来话费充值、网购、转账收款的全新移动支付。","腾讯公布2017年第二季度及中期业绩【PDF file】 2017/08/16","腾讯公布2017年第一季度业绩【PDF file】 2017/05/17","腾讯公布2016年第四季度及全年业绩【PDF file】2017/03/22","腾讯公布2016年第三季度业绩【PDF File】 2016/11/24","索尼音乐与腾讯音乐续签中国大陆战略合作协议【PDF File】 2016/10/03","腾讯公布2016年第二季度及中期业绩【PDF File】 2016/08/17","腾讯公布2016年第一季度业绩【PDF file】"],
        text3:["QQ是腾讯公司推出的一款横跨PC和移动互联网时代的即时通信平台。","丰富的功能和趣味的玩法，让QQ成为中国年轻用户最喜爱的社交平台之一。","用户可以随时随地与好友聊天、视频、斗图，用主题、气泡、挂件等个性装扮让自己与众不同，在这里结交趣味相投的新朋友；用厘米秀开启年轻人专属的个性化聊天模式；畅游在动漫、文学、手游的娱乐海洋里；体验QQ钱包带来话费充值、网购、转账收款的全新移动支付。","腾讯公布2017年第二季度及中期业绩【PDF file】 2017/08/16","腾讯公布2017年第一季度业绩【PDF file】 2017/05/17","腾讯公布2016年第四季度及全年业绩【PDF file】2017/03/22","腾讯公布2016年第三季度业绩【PDF File】 2016/11/24","索尼音乐与腾讯音乐续签中国大陆战略合作协议【PDF File】 2016/10/03","腾讯公布2016年第二季度及中期业绩【PDF File】 2016/08/17","腾讯公布2016年第一季度业绩【PDF file】"],
        text4:["QQ是腾讯公司推出的一款横跨PC和移动互联网时代的即时通信平台。","丰富的功能和趣味的玩法，让QQ成为中国年轻用户最喜爱的社交平台之一。","用户可以随时随地与好友聊天、视频、斗图，用主题、气泡、挂件等个性装扮让自己与众不同，在这里结交趣味相投的新朋友；用厘米秀开启年轻人专属的个性化聊天模式；畅游在动漫、文学、手游的娱乐海洋里；体验QQ钱包带来话费充值、网购、转账收款的全新移动支付。","腾讯公布2017年第二季度及中期业绩【PDF file】 2017/08/16","腾讯公布2017年第一季度业绩【PDF file】 2017/05/17","腾讯公布2016年第四季度及全年业绩【PDF file】2017/03/22","腾讯公布2016年第三季度业绩【PDF File】 2016/11/24","索尼音乐与腾讯音乐续签中国大陆战略合作协议【PDF File】 2016/10/03","腾讯公布2016年第二季度及中期业绩【PDF File】 2016/08/17","腾讯公布2016年第一季度业绩【PDF file】"],
    }
  },
  components:{
    TopTab,
    LeftTab
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
        this.activeName = 'first'
      } else if (scrolled > this.$el.querySelector("#second").offsetTop && scrolled <= this.$el.querySelector("#third").offsetTop) {
        this.activeName = 'second'
      } else if(scrolled > this.$el.querySelector("#third").offsetTop && scrolled <= this.$el.querySelector("#fourth").offsetTop) {
        this.activeName = 'third'
      }else{
          this.activeName = 'fourth'
      }
    },
        handleClick(tab, event) {
            
            console.log(tab.index);
            this.jump(tab.index)
            switch (tab.index)
                {
                case 0:
                this.activeName = 'first'
                break;
                case 1:
                this.activeName = 'second'
                
                break;
                case 2:
                this.activeName = 'third'
                
                break;
                case 3:
                this.activeName = 'fourth'
                
                break;
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
        // goAnchor(selector) {
        //     var anchor = this.$el.querySelector(selector)
        //     $("html").animate({scrollTop:anchor.offsetTop});
        // }
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
