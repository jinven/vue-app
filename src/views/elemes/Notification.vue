<template>
    <div>
        <h2>Notification</h2>
<el-button
    plain
    @click="open1">
    可自动关闭
  </el-button>
  <el-button
    plain
    @click="open2">
    不会自动关闭
    </el-button>

 <el-button
    plain
    @click="open11">
    成功
  </el-button>
  <el-button
    plain
    @click="open12">
    警告
  </el-button>
  <el-button
    plain
    @click="open13">
    消息
  </el-button>
  <el-button
    plain
    @click="open14">
    错误
  </el-button>
   <el-button
    plain
    @click="open21">
    右上角
  </el-button>
  <el-button
    plain
    @click="open22">
    右下角
  </el-button>
  <el-button
    plain
    @click="open23">
    左下角
  </el-button>
  <el-button
    plain
    @click="open24">
    左上角
  </el-button>
<el-button
    plain
    @click="open30">
    偏移的消息
  </el-button>
<el-button
    plain
    @click="open40">
    使用 HTML 片段
  </el-button>
<el-button
    plain
    @click="open50">
    隐藏关闭按钮
  </el-button>

    </div>
</template>

<script>
export default {
    name: 'ElemeNotification',
    methods: {
      open1() {
        const h = this.$createElement;

        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        });
      },

      open2() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      }, 
      
      open11() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },

      open12() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },

      open13() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },

      open14() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      },
      open21() {
        this.$notify({
          title: '自定义位置',
          message: '右上角弹出的消息'
        });
      },

      open22() {
        this.$notify({
          title: '自定义位置',
          message: '右下角弹出的消息',
          position: 'bottom-right'
        });
      },

      open23() {
        this.$notify({
          title: '自定义位置',
          message: '左下角弹出的消息',
          position: 'bottom-left'
        });
      },

      open24() {
        this.$notify({
          title: '自定义位置',
          message: '左上角弹出的消息',
          position: 'top-left'
        });
      },
      open30() {
        this.$notify({
          title: '偏移',
          message: '这是一条带有偏移的提示消息',
          offset: 100
        });
      },
      open40() {
        this.$notify({
          title: 'HTML 片段',
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        });
      },
      open50() {
        this.$notify.success({
          title: 'Info',
          message: '这是一条没有关闭按钮的消息',
          showClose: false
        });
      }
    }
}
</script>