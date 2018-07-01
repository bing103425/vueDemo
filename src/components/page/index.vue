<template>
  <div class="index">
    <TopTab :bgcolor="bgcolor"></TopTab>
    <div class="top_bg">
    	<video src="../../assets/video1.mp4" loop autoplay preload class="video"></video>
		<div class="mask">
			<img src="../../assets/banner_logo.png" class="bannerlogo" alt="">
			<div class="slogen"></div>
		</div>
    </div>
	<el-row class="row-bg">
		<el-col :span="6" :offset="2">
			<div class="grid-content bg-purple">
				<index_info>
					<div slot="title">
						腾讯简介
					</div>
					<div slot="content">
						腾讯成立于1998年11月，是目前中国领先的互联网增值服务提供商之一。成立10多年来，腾讯一直秉承“一切以用户价值为依归”的经营理念，为亿级海量用户提供稳定优质的各类服务，始终处于稳健发展状态。2004年6月16日，腾讯控股有限公司在香港联交所主板公开上市(股票代号700)。
					</div>
				</index_info>
			</div>
		</el-col>
		<el-col :span="6" :offset="1">
			<div class="grid-content bg-purple">
				<index_info>
					<div slot="title">
						公司愿景
					</div>
					<div slot="content">
						成为最受尊敬的互联网企业是腾讯的愿景目标。腾讯一直积极参与公益事业、努力承担企业社会责任、推动网络文明。腾讯的每一项产品与业务都拥抱公益，开放互联，并倡导所有企业一起行动，通过互联网领域的技术、传播优势，缔造“人人可公益，民众齐参与”的互联网公益新生态。
					</div>
				</index_info>
			</div>
		</el-col>
		<el-col :span="6" :offset="1">
			<div class="grid-content bg-purple">
				<index_info>
					<div slot="title">
						视频介绍
					</div>
					<div slot="content">
						腾讯成立于1998年11月，是目前中国领先的互联网增值服务提供商之一。成立10多年来，腾讯一直秉承“一切以用户价值为依归”的经营理念，为亿级海量用户提供稳定优质的各类服务，始终处于稳健发展状态。2004年6月16日，腾讯控股有限公司在香港联交所主板公开上市(股票代号700)。
					</div>
				</index_info>
			</div>
		</el-col>
	</el-row>
	<el-row class="row-bg">
		<el-col :span="6" :offset="2">
			<div class="grid-content bg-purple">
				<index_info>
					<div slot="title">
						腾讯简介
					</div>
					<div slot="content">
						腾讯成立于1998年11月，是目前中国领先的互联网增值服务提供商之一。成立10多年来，腾讯一直秉承“一切以用户价值为依归”的经营理念，为亿级海量用户提供稳定优质的各类服务，始终处于稳健发展状态。2004年6月16日，腾讯控股有限公司在香港联交所主板公开上市(股票代号700)。
					</div>
				</index_info>
			</div>
		</el-col>
		<el-col :span="6" :offset="1">
			<div class="grid-content bg-purple">
				<index_info>
					<div slot="title">
						公司愿景
					</div>
					<div slot="content">
						成为最受尊敬的互联网企业是腾讯的愿景目标。腾讯一直积极参与公益事业、努力承担企业社会责任、推动网络文明。腾讯的每一项产品与业务都拥抱公益，开放互联，并倡导所有企业一起行动，通过互联网领域的技术、传播优势，缔造“人人可公益，民众齐参与”的互联网公益新生态。
					</div>
				</index_info>
			</div>
		</el-col>
		<el-col :span="6" :offset="1">
			<div class="grid-content bg-purple">
				<index_info>
					<div slot="title">
						视频介绍
					</div>
					<div slot="content">
						腾讯成立于1998年11月，是目前中国领先的互联网增值服务提供商之一。成立10多年来，腾讯一直秉承“一切以用户价值为依归”的经营理念，为亿级海量用户提供稳定优质的各类服务，始终处于稳健发展状态。2004年6月16日，腾讯控股有限公司在香港联交所主板公开上市(股票代号700)。
					</div>
				</index_info>
			</div>
		</el-col>
	</el-row>


  </div>
</template>

<script>
import TopTab from '@/components/common/top_tab'
import index_info from '@/components/common/index_info'
export default {
  name: 'index',
  data () {
    return {
        bgcolor:'transparent'
    }
  },
  mounted() {
      document.documentElement.scrollTop=0;
  },
  components:{
	index_info,
	TopTab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.top_bg{
	width: 100%;
	height: 600px;
	overflow: hidden;
	position: relative;
	margin-bottom: 30px;
}
.video{
	position: absolute;
	top: 0;
	left: 0;
  	width:100%;
}
.mask{
	position: absolute;
	top: 0;
	left: 0;
  	width:100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4)
}
.bannerlogo{
	margin: 200px auto;
	margin-bottom: 0;
}
.slogen{
    text-align: center;
    cursor: default;
    width: 728px;
    height: 86px;
	margin: 30px auto;
    background: url(../../assets/banner_txt2.png) center center no-repeat;
}
.el-row{
	margin-bottom: 70px;
}
</style>
