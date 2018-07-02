<template>
  <div class="index_info">

      <el-row class="tac">
  <el-col :span="3" :offset="2" class="left_nav">
  <el-tabs v-model="activeName" tab-position="left" @tab-click="handleClick">
    <el-tab-pane label="社交" name="first"></el-tab-pane>
    <el-tab-pane label="金融" name="second"></el-tab-pane>
    <el-tab-pane label="娱乐" name="third"></el-tab-pane>
    <el-tab-pane label="资讯" name="fourth"></el-tab-pane>
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
export default {
  name: "left_tab",
  data() {
    return {
        activeName:'first'
    };
  },
    methods: {
        
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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