<template>
  <div class="index_info">
        <div class="title_box">
            <div class="title">
                <slot name="title"></slot>
            </div>
            <div class="more">
                <slot name="more">更多>></slot>
            </div>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
  </div>
</template>

<script>
export default {
  name: "index_info",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
    float: left;
    font-weight: 400;
    color: #333;
    font-size: 20px;
    line-height: 30px;
}
.more{
    line-height: 30px;
    float: right;
    color: #0457b7;
    text-decoration: none;
    font-size: 14px;
}
.content{
    clear: both;
    position: relative;
    top: 20px;
    line-height: 30px;
    font-size: 14px;
    color: #5e6267;
    text-align: justify;
}
</style>