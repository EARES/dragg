import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    list2:[
      {'id': 1, 'name': '1',show:false,parentId:null},
      {'id': 2, 'name': '1',show:false,parentId:1},
      {'id': 3, 'name': '1',show:false,parentId:1},
      {'id': 4, 'name': '1',show:false,parentId:null},
      {'id': 5, 'name': '1',show:false,parentId:4},
      {'id': 6, 'name': '1',show:false,parentId:5},
      {'id': 7, 'name': '1',show:false,parentId:5},
    ]
  },
  mutations: {
      set (state, payload) {
         state.list2.filter(x=>x.id==payload.id)[0].parentId=payload.data;
          //state.list2.filter(x=>x.id==payload.id).forEach(x => x.parentId = payload.parentId);

console.log(state.list2);
      },
      setParent (state, payload) {

          state.list2.filter(x=>x.parentId==payload.parentId).forEach(x => x.parentId = payload.newparentId);


      }
  },
  actions: {
  move({commit},payload){
   //   debugger;
      var sstate=this.state.list2;
      let index=this.state.list2.findIndex(x=>x.id==payload.first);
      let data=this.state.list2[index];
      let index2=this.state.list2.findIndex(x=>x.id==payload.second);
      let data2=this.state.list2[index2];
    commit('setParent',{parentId:data.id,newparentId:data.parentId});


      commit('set',{id:data.id,data:payload.second});
  }
  },
  modules: {
  }
})
