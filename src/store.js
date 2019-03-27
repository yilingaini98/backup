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
    resData:"",
  },
  mutations:{
    getData(state){
      axios.get('/api/data')
        .then(res => {
          state.resData=res.data.data;
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