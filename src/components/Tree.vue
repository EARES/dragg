<template>
<div class="container">
    <table class="table table-hover">
      <thead>
      <tr>
        <th class="fit">#</th>
        <th class="fit">Sıra No</th>


      </tr>
      </thead>
      <tbody>
      <Children4  :parent-id="null"
                 :childrens="$store.state.list2.filter(x=>x.parentId==null)"
                  :parent-name="null"
                  :show="false"

      >
      </Children4>
      </tbody>

    </table>



  </div>
</template>

<script>
//import Children from "@/components/Children";
//import Children2 from "@/components/Children2";
//import Children3 from "@/components/Children3";
import Children4 from "@/components/Children4";

export default {
  name: "Tree",
  display: "Nested",
  order: 15,
  components: {Children4},
  data() {
    return {
      list: [
        {
          'id': '1',
          'name':'1',
          show:false,
          children: [
            {'id': 2, 'name': '1.2',show:false,},
            {'id': 3, 'name': '1.3',show:false,
            'children':[  {'id': 9, 'name': '1.3.1',show:false,'children':[
                {'id': 11, 'name': '1.3.1.1',show:false},
                {'id': 12, 'name': '1.3.1.2',show:false},
                {'id': 13, 'name': '1.3.1.3',show:false,  'children':[  {'id': 18, 'name': '1.3.1.3.1',show:false,'children':[
                      {'id': 17, 'name': '1.3.1.3.1',show:false},
                      {'id': 18, 'name': '1.3.1.3.2',show:false},
                      {'id': 19, 'name': '1.3.1.3.3',show:false, children: [
                          {'id': 20, 'name': '1.2',show:false},
                          {'id': 21, 'name': '1.3',show:false,
                            'children':[  {'id': 9, 'name': '1.3.1',show:false,'children':[
                                {'id': 22, 'name': '1.3.1.1',show:false},
                                {'id': 23, 'name': '1.3.1.2',show:false},
                                {'id': 24, 'name': '1.3.1.3',show:false,  'children':[  {'id': 18, 'name': '1.3.1.3.1',show:false,'children':[
                                      {'id': 25, 'name': '1.3.1.3.1',show:false},
                                      {'id': 26, 'name': '1.3.1.3.2',show:false},
                                      {'id': 27, 'name': '1.3.1.3.3',show:false,children: [
                                          {'id': 2, 'name': '1.2',show:false},
                                          {'id': 3, 'name': '1.3',show:false,
                                            'children':[  {'id': 9, 'name': '1.3.1',show:false,'children':[
                                                {'id': 11, 'name': '1.3.1.1',show:false},
                                                {'id': 12, 'name': '1.3.1.2',show:false},
                                                {'id': 13, 'name': '1.3.1.3',show:false,  'children':[  {'id': 18, 'name': '1.3.1.3.1',show:false,'children':[
                                                      {'id': 17, 'name': '1.3.1.3.1',show:false},
                                                      {'id': 18, 'name': '1.3.1.3.2',show:false},
                                                      {'id': 19, 'name': '1.3.1.3.3',show:false, children: [
                                                          {'id': 20, 'name': '1.2',show:false},
                                                          {'id': 21, 'name': '1.3',show:false,
                                                            'children':[  {'id': 9, 'name': '1.3.1',show:false,'children':[
                                                                {'id': 22, 'name': '1.3.1.1',show:false},
                                                                {'id': 23, 'name': '1.3.1.2',show:false},
                                                                {'id': 24, 'name': '1.3.1.3',show:false,  'children':[  {'id': 18, 'name': '1.3.1.3.1',show:false,'children':[
                                                                      {'id': 25, 'name': '1.3.1.3.1',show:false},
                                                                      {'id': 26, 'name': '1.3.1.3.2',show:false},
                                                                      {'id': 27, 'name': '1.3.1.3.3',show:false,}
                                                                    ]}]}
                                                              ]}]
                                                          }
                                                        ]}
                                                    ]}]}
                                              ]}]
                                          }
                                        ]}
                                    ]}]}
                              ]}]
                          }
                        ]}
                    ]}]}
              ]}]
            }
          ]
        },
        {
          'id': '5',
          name:'5',show:false,
          children: [
            {'id': 6, 'name': '5.1',show:false,'children':[
                {'id': 14, 'name': '5.1.1',show:false},
                {'id': 15, 'name': '5.1.2',show:false},
                {'id': 16, 'name': '5.1.3',show:false}
              ]},
            {'id': 7, 'name': '5.2',show:false,children: [ ]}
          ]
        }
      ]
    }
  },
  methods:{

  }
}

</script>

<style scoped>
.droptarget {
  float: left;
  width: 100px;
  height: 35px;
  margin: 15px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
</style>
