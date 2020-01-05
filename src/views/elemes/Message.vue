<template>
    <div>
        <h2>Message</h2>
<el-button :plain="true" @click="open">打开消息提示</el-button>
  <el-button :plain="true" @click="openVn">VNode</el-button>
 <el-button :plain="true" @click="open2">成功</el-button>
  <el-button :plain="true" @click="open3">警告</el-button>
  <el-button :plain="true" @click="open1">消息</el-button>
  <el-button :plain="true" @click="open4">错误</el-button>

  <el-button :plain="true" @click="open11">消息</el-button>
  <el-button :plain="true" @click="open12">成功</el-button>
  <el-button :plain="true" @click="open13">警告</el-button>
  <el-button :plain="true" @click="open14">错误</el-button>

  <el-button :plain="true" @click="openCenter">文字居中</el-button>

<el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>


    </div>
</template>

<script>
export default {
    name: 'ElemeMessage',
    methods: {
      open() {
        this.$message('这是一条消息提示');
      },
      open1() {
        this.$message('这是一条消息提示');
      },
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open4() {
        this.$message.error('错了哦，这是一条错误消息');
      },
      open11() {
        this.$message({
          showClose: true,
          message: '这是一条消息提示'
        });
      },

      open12() {
        this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open13() {
        this.$message({
          showClose: true,
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open14() {
        this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      },

      openVn() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
      },

      openCenter() {
        this.$message({
          message: '居中的文字',
          center: true
        });
      },

      openHTML() {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        });
      }
    }
}
</script>