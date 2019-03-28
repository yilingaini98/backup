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
    getData(state,searchCriteria){//传入搜索条件，axios查询
      axios.post('/api/'+searchCriteria.pagePath,JSON.stringify(searchCriteria))
      .then(res => {
          state.resData=res.data[0].data;
          state.records=res.data[1].pageparam.records;
      });
    }
  }
};



export default new Vuex.Store({
  modules:{
    toggleSideBar:toggleSideBar,
    getFormData:getFormData
  }
});
