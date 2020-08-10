<template>


    <div  id="app" class="ql-container ql-snow">
      <el-button type="primary" @click="addContentNet()">添加内容</el-button>
<!--      <quill-editor v-model="ruleForm.content"-->
<!--                    :options="editorOption"-->
<!--                    @blur="onEditorBlur($event)"-->
<!--                    @focus="onEditorFocus($event)"-->
<!--                    @change="onEditorChange($event)"-->
<!--      style="height: 100%">-->
<!--      </quill-editor>-->

      <vue-ueditor-wrap v-model="ruleForm.content" :config="myConfig"></vue-ueditor-wrap>
    </div>


</template>

<script >

  import { addContent } from '../network/apis'


  export default {
    name: "Rich-Txt",
    data () {
      return {
        ruleForm:{
          content:''
        },
        myConfig: {
          // 编辑器不自动被内容撑高
          autoHeightEnabled: false,
          // 初始容器高度
          initialFrameHeight: 240,
          // 初始容器宽度
          initialFrameWidth: '100%',
          // serverUrl: '/api/content-manage/ueditor/config',
          serverUrl: '/api/ueditor/config',
          // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
          UEDITOR_HOME_URL: '/UE/',
          toolbars: [[
            'fullscreen', 'source', '|', 'undo', 'redo', '|',
            'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
            'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
            'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
            'directionalityltr', 'directionalityrtl', 'indent', '|',
            'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
            'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
            'simpleupload', /*'insertimage', */'emotion', 'scrawl', 'insertvideo', 'music', 'attachment', 'map', /*'gmap',*/ 'insertframe', /*'insertcode', *//*'webapp',*/ 'pagebreak', 'template', 'background', '|',
            'horizontal', 'date', 'time', 'spechars', /*'snapscreen', */'wordimage', '|',
            'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
            'print', 'preview', 'searchreplace', 'drafts'/*, 'help'*/
          ]]
        }
      }
    },
    methods: {
      // 失去焦点
      onEditorBlur(editor) {},
      // 获得焦点
      onEditorFocus(editor) {},
      // 开始
      onEditorReady(editor) {},
      // 值发生变化
      onEditorChange(editor) {
      },
      //http 添加内容
      addContentNet(){
        var _this = this;
        addContent(this.ruleForm).then(function (response) {
            _this.$message.success("添加成功")
            _this.$router.replace("/content-manage")
        }).catch(function (error) {
          console.log(error);
        });
      },
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill;
      }
    }
  }
</script>

<style>

  .ql-container {
    height: 100%;
  }
</style>
