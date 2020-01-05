<template>
    <div>
        <h2>Radio</h2>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>

        <el-radio disabled v-model="radio2" label="禁用">备选项</el-radio>
        <el-radio disabled v-model="radio2" label="选中且禁用">备选项</el-radio>

                
        <el-radio-group v-model="radio3">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
        </el-radio-group>

        <div>
            <el-radio-group v-model="radio4">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio5" size="medium">
            <el-radio-button label="上海" ></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio6" size="small">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京" disabled ></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
        <div style="margin-top: 20px">
            <el-radio-group v-model="radio7" disabled size="mini">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ElemeRadio', 
    data () {
      return {
        radio: '1',
        radio2: '选中且禁用',
        radio3: 3,
        radio4: '上海',
        radio5: '上海',
        radio6: '上海',
        radio7: '上海'
      };
    }
}
</script>