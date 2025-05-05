<style scoped>
.share-body{
  width: 100%;
  height: 100%;
  background: lightgoldenrodyellow;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.share-body-box{
  width: 60%;
  height: 100%;
  background: white;
  overflow-y: scroll;
  padding: 40px;
}
.share-body-box-top{
  width: 100%;
  height: 400px;
  background-image: url("../../image/siwei.jpg");
  background-size: 100% 103%;
  position: relative;
}
.share-body-box-center{
  width: 100%;
  height: 270px;
  background: #ecf6e2;
  margin-top: 20px;
  //cursor: pointer;
  border-radius: 8px;
  padding: 20px;
}
.share-body-box-center-time{
  color: #666;
  margin-left: 15px;
  font-size: 13px;
}
.share-body-box-center-title{
  color: #005097;
  font-size: 20px;

}
.share-body-box-center-des-box{
  width: 100%;
  height: calc(100% - 60px);
  padding: 15px
}
</style>


<template>
  <div class="share-body">
    <div class="share-body-box">
      <div class="share-body-box-top">
        <Tooltip @click="sharelv" style="position: absolute;bottom: 10px;left: 10px;cursor: pointer" content="经验分享" placement="right">
          <Icon size="35" type="ios-send" />
        </Tooltip>
      </div>
      <div v-for="(item,index) in shareList" :key="index" class="share-body-box-center">
        <div style="width: 100%;display: flex;align-items: center;">
          <Avatar style="background-color: #87d068" icon="ios-person" />
          <div style="color: #FF6900;margin-left: 10px">{{item.username}}</div>
          <div class="share-body-box-center-time">发布于：{{item.shareDate}}</div>
          <div v-if="item.id === '1'" style="display: flex;margin-left: 10px">
            <Tooltip @click="editShare" style="cursor: pointer" content="编辑" placement="right">
              <Icon size="20" type="ios-create" />
            </Tooltip>
            <Tooltip @click="delShare" style="cursor: pointer" content="删除" placement="right">
              <Icon size="20" type="md-trash" />
            </Tooltip>
          </div>
        </div>
        <div class="share-body-box-center-des-box">
          <div class="share-body-box-center-title">
            {{item.shareTitle}}
          </div>
          <div style="margin-top: 10px">
            {{item.shareDes}}
          </div>
          <div style="width: 80px;height: 80px;background: #646a73;margin-top: 10px">

          </div>
        </div>
      </div>
    </div>
    <Modal
        v-model="modal"
        :title="this.isEdit ? '编辑内容' : '经验分享'">
      <Form :model="formItem" :label-width="80">
        <FormItem label="标题">
          <Input v-model="formItem.input" placeholder="请输入标题"></Input>
        </FormItem>
        <FormItem label="内容">
          <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入发布内容"></Input>
        </FormItem>
        <Upload style="margin-left: 80px" action="//jsonplaceholder.typicode.com/posts/">
          <Button icon="ios-cloud-upload-outline">上传图片</Button>
        </Upload>
      </Form>
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
export default {
  components:{

  },
  data(){
    return{
      isEdit:false,
      modal: false,
      modal_loading: false,
      modal1: false,
      modal_loading1: false,
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: ''
      },
      shareList:[
        {
          id:'1',
          username:'褪衣衫是否良人',
          headImgUrl:'',
          shareDate:'2025-05-14 12:10:30',
          shareDes:'刚刚和和监理验收完，回到办公室，天热想喝口冰的，从冰箱拿出刚刚' +
              '从冰箱里拿出来的水，放了一会儿就布满了水珠，老哥们，那如果我反复这么做，是不是就有喝不完的水了呢？',
          shareTitle:'刚从冰箱拿出一瓶水',
          imgUrl:''
        },{
          id:'2',
          username:'褪衣衫是否良人',
          headImgUrl:'',
          shareDate:'2025-05-14 12:10:30',
          shareDes:'刚刚和和监理验收完，回到办公室，天热想喝口冰的，从冰箱拿出刚刚' +
              '从冰箱里拿出来的水，放了一会儿就布满了水珠，老哥们，那如果我反复这么做，是不是就有喝不完的水了呢？',
          shareTitle:'刚从冰箱拿出一瓶水',
          imgUrl:''
        },{
          id:'1',
          username:'褪衣衫是否良人',
          headImgUrl:'',
          shareDate:'2025-05-14 12:10:30',
          shareDes:'刚刚和和监理验收完，回到办公室，天热想喝口冰的，从冰箱拿出刚刚' +
              '从冰箱里拿出来的水，放了一会儿就布满了水珠，老哥们，那如果我反复这么做，是不是就有喝不完的水了呢？',
          shareTitle:'刚从冰箱拿出一瓶水',
          imgUrl:''
        },{
          id:'2',
          username:'褪衣衫是否良人',
          headImgUrl:'',
          shareDate:'2025-05-14 12:10:30',
          shareDes:'刚刚和和监理验收完，回到办公室，天热想喝口冰的，从冰箱拿出刚刚' +
              '从冰箱里拿出来的水，放了一会儿就布满了水珠，老哥们，那如果我反复这么做，是不是就有喝不完的水了呢？',
          shareTitle:'刚从冰箱拿出一瓶水',
          imgUrl:''
        },{
          id:'2',
          username:'褪衣衫是否良人',
          headImgUrl:'',
          shareDate:'2025-05-14 12:10:30',
          shareDes:'刚刚和和监理验收完，回到办公室，天热想喝口冰的，从冰箱拿出刚刚' +
              '从冰箱里拿出来的水，放了一会儿就布满了水珠，老哥们，那如果我反复这么做，是不是就有喝不完的水了呢？',
          shareTitle:'刚从冰箱拿出一瓶水',
          imgUrl:''
        }
      ]
    }
  },
  methods:{
    sharelv(){
      this.modal = true;
    },
    asyncOK () {
      this.modal_loading = true;
      setTimeout(() => {
        this.modal_loading = false;
        this.modal = false;
        this.isEdit = false;
        this.$Message.success('发布成功！');
        //刷新列表
      }, 2000);
    },
    cancel(){
      this.modal = false;
      this.isEdit = false;
    },
    editShare(){
      this.modal = true;
      this.isEdit = true;
    },
    delShare(){
      this.modal1 = true;
    },
    del () {
      this.modal_loading1 = true;
      setTimeout(() => {
        this.modal_loading1 = false;
        this.modal1 = false;
        this.$Message.success('内容已删除！');
      }, 2000);
    }
  }
}
</script>