import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

//左侧bar收拉
const toggleSideBar={
  state:{
    toggleSideBar:false,
  },
  mutations:{
    toggleSideBar(state){
      state.toggleSideBar = !state.toggleSideBar;
    }
  }
};

//Form获取值的公共方法
const getFormData={
  state:{
    resData:[],
    records:0,
  },
  mutations:{
    getFormData(state,searchCriteria){//传入搜索条件，axios查询
      if(searchCriteria=="DataDictionary"){


      }else{
        axios.post('/api/'+searchCriteria.pagePath,JSON.stringify(searchCriteria))
            .then(res => {
              state.resData=res.data[0].data;
              state.records=res.data[1].pageparam.records;
        });
      }
    }
  }
};

//Tree获取值的公共方法
const getTreeData={
  state:{
    resData:[],
  },
  mutations:{
    getTreeData(state,searchCriteria){//传入搜索条件，axios查询
      axios.post('/api/Tree',JSON.stringify(searchCriteria))
          .then(res => {
            state.resData=res.data[0].data;
          });
    }
  }
};

//Tab处理
const getTabData={
  state:{
    resData:[],
  },
  mutations:{
    getTabData(state,tabPath){
      let namesData=[];
      state.resData.forEach(function(value, index, array) {
        namesData.push(value.name);
      });
      if(tabPath.length>=0){
        state.resData=tabPath;
      }
      else if(!namesData.includes(tabPath.name)){
        state.resData.push(tabPath);
      }
    }
  }
};



export default new Vuex.Store({
  modules:{
    toggleSideBar:toggleSideBar,
    getFormData:getFormData,
    getTreeData:getTreeData,
    getTabData:getTabData
  }
});
