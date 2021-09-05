<template>

<div >
  <div  class="list-group-item"  v-for="el in this.childrens" :key="el.id" >
    <div    :id="el.id" @dragstart="dragStart" @drop="drop" @dragover="allowDrop"   draggable="true">
      <td :id="el.id" ><span :id="el.id"  class="btn btn-primary" @click="el.show = !el.show">Goster</span></td>
      <td :id="el.id" > <p :id="el.id" >{{   (el.id) }}</p></td>
    </div>



    <children4 v-if="el.show" :parent-id="(parentId!=null ? parentId+'.':'')+ (el.id) " :childrens="$store.state.list2.filter(x=>x.parentId==el.id)" />
  </div>
</div>


</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "Children4",
  display: "Nested",
  order: 15,
  props: ["parentName", "parentId", "childrens"],
  components: {
    draggable,
  },
  data() {
    return {
      enabled: true,
      goster: false,
      emptyArray:[]
    };
  },

  methods:{
    dragStart:function(event)  {
      event.dataTransfer.setData("Text", event.target.id);
    },
    dragging:function(event) {

    },
    allowDrop:function(event) {
      event.preventDefault();
    },
    drop:function(event) {
      event.preventDefault();
      var data = event.dataTransfer.getData("Text");
      console.log(data);
      console.log(event.target.id);
      if(data!=event.target.id)
       this.$store.dispatch('move',{first:data,second:event.target.id});
    }
  }
};
</script>
<style scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
}
.droptarget {
  float: left;
  width: 100px;
  height: 35px;
  margin: 15px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
</style>
