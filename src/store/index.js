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
        {'id': 9, 'name': '1',show:false,parentId:5},
        {'id': 10, 'name': '1',show:false,parentId:9},
        {'id':11, 'name': '1',show:false,parentId:10},
        {'id': 12, 'name': '1',show:false,parentId:11},
        {'id': 13, 'name': '1',show:false,parentId:12},
        {'id': 14, 'name': '1',show:false,parentId:13},
        {'id': 15, 'name': '1',show:false,parentId:14},
        {'id': 16, 'name': '1',show:false,parentId:15},

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

          let parentId=data2.parentId;
          while(true){
              let topIndex=this.state.list2.findIndex(x=>x.id==parentId);
              if(topIndex==null||topIndex<0 )
                  break;
              let topParent=this.state.list2[topIndex];
              if(topParent.parentId==null)
                  break;
              parentId=topParent.parentId;
              if(parentId==data.id)
                  break;
          }
          if(parentId==data.id){
              commit('setParent',{parentId:data.id,newparentId:data.parentId});

          }


      commit('set',{id:data.id,data:payload.second});
  }
  },
  modules: {
  }
})
