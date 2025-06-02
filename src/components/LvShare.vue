<style>
.share-body {
  width: 100%;
  height: 100%;
  background: lightgoldenrodyellow;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding-top: 60px;
}

.share-body-box {
  width: 60%;
  height: 100%;
  background: white;
  overflow-y: scroll;
  padding: 40px;
}

.share-body-box-top {
  width: 100%;
  height: 400px;
  background-image: url("../../image/siwei.jpg");
  background-size: 100% 103%;
  position: relative;
}

.share-body-box-center {
  width: 100%;
  background: #ecf6e2;
  margin-top: 20px;
//cursor: pointer; border-radius: 8px;
  padding: 20px;
}

.share-body-box-center-time {
  color: #666;
  margin-left: 15px;
  font-size: 13px;
}

.share-body-box-center-title {
  color: #005097;
  font-size: 20px;

}

.share-body-box-center-des-box {
  width: 100%;
  padding: 15px
}

.headPageStyle {
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 15;
  background: rgba(107, 145, 219, 1.0);
}
.demo-upload-list{
  display: inline-block;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0,0,0,.2);
  margin-right: 4px;
}
.demo-upload-list img{
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover{
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,.6);
}
.demo-upload-list:hover .demo-upload-list-cover{
  display: block;
}
.demo-upload-list-cover i{
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
.image-style{
  display: flex;
  padding-left: 80px;
  height: 70px;
  .ivu-upload-drag{
    height: 60px;
  }
}

</style>


<template>
  <div class="share-body">
    <div class="headPageStyle">
      <Head></Head>
    </div>
    <div class="share-body-box">
      <div class="share-body-box-top">
        <Tooltip @click="sharelv" style="position: absolute;bottom: 10px;left: 10px;cursor: pointer" content="经验分享"
                 placement="right">
          <Icon size="35" type="ios-send"/>
        </Tooltip>
      </div>
      <div v-for="(item,index) in shareList" :key="index" class="share-body-box-center">
        <div style="width: 100%;display: flex;align-items: center;">
          <Avatar style="background-color: #87d068" icon="ios-person"/>
          <div style="color: #FF6900;margin-left: 10px">{{ item.username }}</div>
          <div class="share-body-box-center-time">发布于：{{ item.createTime }}</div>
          <div v-if="compareStrings(item.userId,this.userId)" style="display: flex;margin-left: 10px">
            <Tooltip @click="editShare(item)" style="cursor: pointer" content="编辑" placement="right">
              <Icon size="20" type="ios-create"/>
            </Tooltip>
            <Tooltip @click="delShare(item.id)" style="cursor: pointer" content="删除" placement="right">
              <Icon size="20" type="md-trash"/>
            </Tooltip>
          </div>
        </div>
        <div class="share-body-box-center-des-box">
          <div class="share-body-box-center-title">
            {{ item.title }}
          </div>
          <div style="margin-top: 10px">
            {{ item.context }}
          </div>
          <div v-if="item.priviewImageIds && item.priviewImageIds.length>0" style="width: 100%;height: 80px;margin-top: 10px">
            <div class="demo-upload-list" v-for="(itemImg,index) in item.priviewImageIds" :key="index">
              <div style="width: 60px;height: 60px">
                <Image :src="itemImg" :initial-index="index" preview :preview-list="item.priviewImageIds" fit="scale"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal
        v-model="modal"
        :title="this.isEdit ? '编辑内容' : '经验分享'">
      <Form :model="formItem" :label-width="80">
        <FormItem label="标题">
          <Input v-model="formItem.title" placeholder="请输入标题"></Input>
        </FormItem>
        <FormItem label="内容">
          <Input v-model="formItem.context" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                 placeholder="请输入发布内容"></Input>
        </FormItem>
        <!--        <Upload style="margin-left: 80px" action="//jsonplaceholder.typicode.com/posts/">-->
        <!--          <Button icon="ios-cloud-upload-outline">上传图片</Button>-->
        <!--        </Upload>-->
        <div class="image-style">
          <div class="demo-upload-list" v-for="(item,index) in uploadList" :key="index">
            <div style="width: 60px;height: 60px">
              <Image :src="item.previewUrl" :initial-index="index" :preview-list="uploadList" fit="contain" width="100%" height="100%"/>
              <div class="demo-upload-list-cover">
                <Icon type="ios-eye-outline" @click="handleView(item.name)"></Icon>
                <Icon type="ios-trash-outline" @click="handleRemove(item,index)"></Icon>
              </div>
            </div>
          </div>
          <Upload
              ref="upload"
              :headers="headers"
              :show-upload-list="false"
              :default-file-list="defaultList"
              :format="['jpg','jpeg','png']"
              :max-size="10240"
              :on-format-error="handleFormatError"
              :on-exceeded-size="handleMaxSize"
              :before-upload="handleBeforeUpload"
              multiple
              type="drag"
              action=""
              style="display: inline-block;width:58px;">
            <div style="width: 58px;height:58px;line-height: 58px;">
              <Icon type="ios-camera" size="20"></Icon>
            </div>
          </Upload>
          <ImagePreview v-model="visible" :preview-list="priviewList"/>
        </div>
      </Form>
<!--      <Button @click="startUpload">上传</Button>-->
      <template #footer>
        <Button v-if="isEdit" type="primary" :loading="modal_loading" @click="asyncOK">保存并发布</Button>
        <Button v-else type="primary" :loading="modal_loading" @click="asyncOK">发布</Button>
        <Button @click="cancel">取消</Button>
      </template>
    </Modal>
    <Modal v-model="modal1" width="360">
      <template #header>
        <p style="color:#f60;text-align:center">
          <Icon type="ios-information-circle"></Icon>
          <span>删除</span>
        </p>
      </template>
      <div style="text-align:center">
        <p>是否确认删除本条内容？</p>
      </div>
      <template #footer>
        <Button type="error" size="large" long :loading="modal_loading1" @click="del">删除</Button>
      </template>
    </Modal>
  </div>
</template>


<script>
import Head from "@/layout/Head.vue";
import {inject} from "vue";
import axios from "axios";
import {Button, ImagePreview} from "view-ui-plus";

export default {
  components: {
    ImagePreview,
    Button,
    Head

  },
  data() {
    return {
      headers:{},
      uploadUrl: '',
      shareId:'',
      priviewList:[],
      defaultList: [],
      imgName: '',
      visible: false,
      deleteList:[],
      uploadList: [],
      isEdit: false,
      modal: false,
      modal_loading: false,
      modal1: false,
      delId: '',
      tokenFix: '',
      userId: null,
      modal_loading1: false,
      formItem: {},
      shareList: []
    }
  },
  mounted() {
    this.tokenFix = inject("tokenFix");
    this.getData();
    this.userId = sessionStorage.getItem("userId");
    this.uploadUrl = this.$apiBaseUrl+'/api/images/batch/'+this.userId;
    this.initHeaders();
  },
  methods: {
    initHeaders() {
      // 从localStorage或Vuex中获取token
      const token = sessionStorage.getItem('token');

      if (token) {
        this.headers = {
          'Authorization': this.tokenFix + `${sessionStorage.getItem('token')}`
        }
      }
    },
    handleView (name) {
      this.imgName = name;
      this.visible = true;
    },
    handleRemove (item,index) {
      this.uploadList.splice(index,1);
      this.deleteList.push(item.previewId);
    },
    handleFormatError (file) {
      this.$Notice.warning({
        title: '图片格式错误',
        desc: file.name + '格式错误，请上传jpg,jpeg,png格式图片！'
      });
    },
    handleMaxSize (file) {
      this.$Notice.warning({
        title: '图片大小错误',
        desc: file.name + '大小不能超过10M'
      });
    },
    handleBeforeUpload (file) {
      const check = this.uploadList.length < 5;
      const previewUrl = URL.createObjectURL(file);
      console.log(previewUrl)
      if (!check) {
        this.$Notice.warning({
          title: '上传图片数量需小于等于五张'
        });
      }else{
        this.uploadList.push({
          uid: file.uid,
          name: file.name,
          size: file.size,
          percentage: 0,
          status: 'pending', // pending, uploading, success, error
          previewUrl: previewUrl,
          file: file
        });
        // this.priviewList.push(previewUrl);
        // this.uploadList.push(file);
      }
      return false;
    },
    startUpload(shareId) {
      if (this.uploadList.length === 0) {
        this.$Message.warning('请先添加图片');
        return;
      }
      // 更新文件状态
      this.uploadList.forEach(file => {
        if (file.status === 'pending') {
          file.status = 'uploading';
          file.percentage = 0;
        }
      });
      // 创建FormData
      const formData = new FormData();
      // 添加所有文件
      this.uploadList.forEach((file) => {
        formData.append('files', file.file);
      });

      // 发送批量上传请求
      axios.post(this.$apiBaseUrl+'/api/images/batch/'+shareId, formData, {
        headers: {
          'Authorization': this.tokenFix + `${sessionStorage.getItem('token')}`
        }
        // onUploadProgress: (progressEvent) => {
        //   // 计算总进度
        //   const percentCompleted = Math.round(
        //       (progressEvent.loaded * 100) / progressEvent.total
        //   );
        //
        //   // 更新所有上传中的文件进度
        //   this.uploadList.forEach(file => {
        //     if (file.status === 'uploading') {
        //       file.percentage = percentCompleted;
        //     }
        //   });
        // }
      })
          .then(response => {
            if (response.data.status === 'success') {
              this.getData();
              // 更新文件状态
              // results.forEach(result => {
              //   const fileIndex = this.uploadList.findIndex(f => f.name === result.filename);
              //   if (fileIndex !== -1) {
              //     if (result.status === 'success') {
              //       this.uploadList[fileIndex].status = 'success';
              //       this.uploadList[fileIndex].percentage = 100;
              //
              //       // 添加到结果列表
              //       this.uploadResults.push({
              //         ...result,
              //         previewUrl: this.uploadList[fileIndex].previewUrl
              //       });
              //     } else {
              //       this.uploadList[fileIndex].status = 'error';
              //       this.uploadList[fileIndex].errorMessage = result.error;
              //
              //       this.uploadResults.push({
              //         filename: result.filename,
              //         status: 'error',
              //         error: result.error,
              //         previewUrl: this.uploadList[fileIndex].previewUrl
              //       });
              //     }
              //   }
              // });

              this.$Message.success(`批量上传完成！成功 ${response.data.successCount} 个，失败 ${response.data.failureCount} 个`);
            } else {
              this.$Message.error('上传失败: ' + response.data.message);
            }
          })
          .catch(error => {
            console.error('批量上传失败:', error);
            this.$Message.error('上传失败: ' + (error.response?.data?.message || '服务器错误'));

            // 将所有上传中的文件标记为失败
            this.uploadList.forEach(file => {
              if (file.status === 'uploading') {
                file.status = 'error';
                file.errorMessage = '服务器错误';
              }
            });
          })
          .finally(() => {
            this.uploading = false;
          });
    },
    compareStrings(input1, input2) {
      return input1 == input2 ? true : false
    },
    getData() {
      axios.get(this.$apiBaseUrl + '/api/lvShare/getAll',
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': this.tokenFix + `${sessionStorage.getItem('token')}`
            }
          }).then(res => {
        if (res.data.code === 200) {
          // this.$Message.success(res.data.message);
          this.shareList = res.data.data;
        } else {
          this.$Message.error(res.data.message);
        }
      })
    },
    sharelv() {
      this.modal = true;
      this.uploadList=[];
    },
    asyncOK() {
      this.modal_loading = true;
      var saveList=[];
      this.uploadList.forEach((item,index)=>{
        if(item.state !== 'old'){
          saveList.push(this.uploadList[index])
        }
      })
      this.uploadList = saveList;
      if (this.isEdit) {
        if(this.deleteList.length>0){
          this.batchDelete(this.deleteList);
        }
        this.update();
      } else {
        this.create();
      }
    },
    batchDelete(deleteList){
      axios.post(this.$apiBaseUrl + '/api/images/batch/delete/'+this.shareId,deleteList,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': this.tokenFix + `${sessionStorage.getItem('token')}`
            }
          }).then(res => {
        if (res.data.code === 200) {
          console.log("*******************");
          console.log(res.data.message);
        }
      })
    },
    create() {
      this.formItem.userId = sessionStorage.getItem("userId")
      axios.post(this.$apiBaseUrl + '/api/lvShare/create', this.formItem,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': this.tokenFix + `${sessionStorage.getItem('token')}`
            }
          }).then(res => {
        if (res.data.code === 200) {
          this.modal_loading = false;
          this.modal = false;
          this.isEdit = false;
          if(this.uploadList.length>0){
            this.startUpload(res.data.data);
          }
          this.this.getData();
          this.$Message.success(res.data.message);
        } else {
          this.modal_loading = false;
          this.$Message.error(res.data.message);
        }
      })
    },
    update() {
      axios.post(this.$apiBaseUrl + '/api/lvShare/update', this.formItem,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': this.tokenFix + `${sessionStorage.getItem('token')}`
            }
          }).then(res => {
        if (res.data.code === 200) {
          this.modal_loading = false;
          this.modal = false;
          this.isEdit = false;
          if(this.uploadList.length>0){
            this.startUpload(this.formItem.id);
          }
          this.getData();
          this.$Message.success(res.data.message);
        } else {
          this.modal_loading = false;
          this.$Message.error(res.data.message);
        }
      })
    },
    cancel() {
      this.modal = false;
      this.isEdit = false;
    },
    editShare(item) {
      this.modal = true;
      this.formItem = item;
      this.isEdit = true;
      this.shareId = item.id;
      this.uploadList = [];
      item.priviewImageIds.forEach((item1,index)=>{
        this.uploadList.push({
          state:'old',
          name: "图片预览",
          percentage: 0,
          previewUrl: item1,
          previewId:item.imageIds[index]
        })
      })
      this.priviewList = item.priviewImageIds;
      // this.formItem = {};
    },
    delShare(id) {
      this.delId = id;
      this.modal1 = true;
    },
    del() {
      this.modal_loading1 = true;
      axios.delete(this.$apiBaseUrl + '/api/lvShare/delete?id=' + this.delId,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': this.tokenFix + `${sessionStorage.getItem('token')}`
            }
          }).then(res => {
        if (res.data.code === 200) {
          this.modal_loading1 = false;
          this.modal1 = false;
          this.$Message.success(res.data.message);
          this.getData();
        } else {
          this.modal_loading = false;
          this.$Message.error(res.data.message);
        }
      })
    }
  }
}
</script>