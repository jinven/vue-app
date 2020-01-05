<template>
  <div class="elfx">
    <div class="ellt">
      <ul :style="{height:leftHeight+'px'}">
        <li v-for="e in elemes" :key="e.name" :class="elemeName==e.name?'current':''" @click="toComponent(e.name)"><span v-text="e.name"></span></li>
      </ul>
    </div>
    <div class="elrt">
      <div class="el" ref="element">
        <component v-bind:is="currentComponent"></component>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  html{
    scroll-behavior: smooth;
  }
  .elfx{
    display:flex;
    .ellt{
      display:flex;
      width: 200px;
      background-color:rgba(192, 212, 210, 0.3);
      ul{
        margin:0;
        padding:10px 0;
        width:100%;
        list-style: none;
        text-align: left;
        user-select: none;
        overflow:auto;
        &::-webkit-scrollbar{
          width: 6px;
          height: 4px;
          background: rgba(200,200,200,.3);
        }
        &::-webkit-scrollbar-thumb {
            background: rgba(0,0,0,0.15);
        }
        &::-webkit-scrollbar-thumb:hover {
            background: rgba(0,0,0,0.3);
        }
        li{
          padding-left:20px;
          height:30px;
          line-height: 30px;
          cursor:pointer;
          &:hover{
            background-color:rgba(156, 130, 152, 0.3);
          }
        }
        .current{
          color:#2031ff;
          font-weight: bold;
        }
      }
    }
    .elrt{
      display:flex;
      width: calc( 100% - 200px );
      .el{
        width:100%;
        padding:0 10px;
        box-sizing: border-box;
      }
    }
  }
</style>
<script>
// @ is an alias to /src
import ELemeLayout from '@/views/elemes/Layout.vue'
import ElemeContainer from '@/views/elemes/Container.vue'
import ElemeIcon from '@/views/elemes/Icon.vue'
import ElemeButton from '@/views/elemes/Button.vue'
import ElemeLink from '@/views/elemes/Link.vue'
import ElemeRadio from '@/views/elemes/Radio.vue'
import ElemeCheckbox from '@/views/elemes/Checkbox.vue'
import ElemeInput from '@/views/elemes/Input.vue'
import ElemeInputNumber from '@/views/elemes/InputNumber.vue'
import ElemeSelect from '@/views/elemes/Select.vue'
import ElemeCascader from '@/views/elemes/Cascader.vue'
import ElemeSwitch from '@/views/elemes/Switch.vue'
import ElemeSlider from '@/views/elemes/Slider.vue'
import ElemeTimePicker from '@/views/elemes/TimePicker.vue'
import ElemeDatePicker from '@/views/elemes/DatePicker.vue'
import ElemeDateTimePicker from '@/views/elemes/DateTimePicker.vue'
import ElemeUpload from '@/views/elemes/Upload.vue'
import ElemeRate from '@/views/elemes/Rate.vue'
import ElemeColorPicker from '@/views/elemes/ColorPicker.vue'
import ElemeTransfer from '@/views/elemes/Transfer.vue'
import ElemeForm from '@/views/elemes/Form.vue'
import ElemeAlert from '@/views/elemes/Alert.vue'
import ElemeLoading from '@/views/elemes/Loading.vue'
import ElemeMessage from '@/views/elemes/Message.vue'
import ElemeMessageBox from '@/views/elemes/MessageBox.vue'
import ElemeNotification from '@/views/elemes/Notification.vue'
import ElemeDialog from '@/views/elemes/Dialog.vue'
import ElemeTooltip from '@/views/elemes/Tooltip.vue'
import ElemeCarousel from '@/views/elemes/Carousel.vue'
import ElemeCalendar from '@/views/elemes/Calendar.vue'
import ElemeImage from '@/views/elemes/Image.vue'
import ElemeBacktop from '@/views/elemes/Backtop.vue'
import ElemeNavMenu from '@/views/elemes/NavMenu.vue'
import ElemeTag from '@/views/elemes/Tag.vue'
export default {
  name: 'eleme',
  data(){
    return {
      leftHeight:0,
      elemeName:'Layout',
      elemes:[
        {name:'Layout',component:ELemeLayout},
        {name:'Container',component:ElemeContainer},
        {name:'Icon',component:ElemeIcon},
        {name:'Tag',component:ElemeTag},
        {name:'Button',component:ElemeButton},
        {name:'Link',component:ElemeLink},
        {name:'NavMenu',component:ElemeNavMenu},
        {name:'Radio',component:ElemeRadio},
        {name:'Checkbox',component:ElemeCheckbox},
        {name:'Input',component:ElemeInput},
        {name:'InputNumber',component:ElemeInputNumber},
        {name:'Select',component:ElemeSelect},
        {name:'Cascader',component:ElemeCascader},
        {name:'Switch',component:ElemeSwitch},
        {name:'Slider',component:ElemeSlider},
        {name:'TimePicker',component:ElemeTimePicker},
        {name:'DatePicker',component:ElemeDatePicker},
        {name:'DateTimePicker',component:ElemeDateTimePicker},
        {name:'Upload',component:ElemeUpload},
        {name:'Rate',component:ElemeRate},
        {name:'ColorPicker',component:ElemeColorPicker},
        {name:'Transfer',component:ElemeTransfer},
        {name:'Form',component:ElemeForm},
        {name:'Alert',component:ElemeAlert},
        {name:'Loading',component:ElemeLoading},
        {name:'Message',component:ElemeMessage},
        {name:'MessageBox',component:ElemeMessageBox},
        {name:'Notification',component:ElemeNotification},
        {name:'Dialog',component:ElemeDialog},
        {name:'Tooltip',component:ElemeTooltip},
        {name:'Carousel',component:ElemeCarousel},
        {name:'Calendar',component:ElemeCalendar},
        {name:'Image',component:ElemeImage},
        {name:'Backtop',component:ElemeBacktop},
      ]
    }
  },
  computed:{
    currentComponent:function(){
      return this.elemes.find(a=>a.name==this.elemeName).component;
    }
  },
  methods:{
    resize(){
      var elHeight = this.$refs.element.offsetHeight + 91;
      this.leftHeight=Math.max(document.documentElement.clientHeight,elHeight) - 71 - 20;
      return
    },
    toComponent(name){
      this.elemeName=name;
      this.resize();
      document.documentElement.scrollTop=0;
    }
  },
  mounted:function(){
    this.resize();
    window.addEventListener('resize', this.resize,false);
  },
  beforeDestroy:function(){
    window.removeEventListener('resize', this.resize, false);
  },
  watch:{
    'screenHeight':function(){
      alert(window.innerHeight);
    }
  }
}
</script>
