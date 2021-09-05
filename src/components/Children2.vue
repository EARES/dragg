<template>


  <draggable :move="checkMove"    group="people" @start="drag=false" @end="drag=false" :component-data="getComponentData()">

    <transition-group>
    <div class="list-group-item" v-for="element in childrens" :key="element.id">

    <tr >

      <td>
        <button @click="element.show = !element.show">Göster</button>
      </td>
      <td class="fit"><input style="width: 100px;"
                             :value="element.name"
      /></td>


    </tr>
       <template v-if="element.show">
          <Children2
              :childrens="element.children"
              :parent-name="element.name"
              :parent-id="element.id"

          >
          </Children2>
        </template>
         </div>
    </transition-group>
  </draggable>


</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "Children2",
  props: ["parentName", "parentId", "childrens","show"],
  components: {
    draggable,
  },
  data() {
    return {
      enabled: true,
      list: [],
      dragging: false,
      goster: false,
    };
  },
  created: function() {
    this.list.push({
      id: this.parentId,
      name: this.parentName,
    });
  },
  methods:{
    bb() {
   console.log('a');
    },
    checkMove: function(evt){
      console.log(evt);
      return (evt.draggedContext.element.name!=='apple');
    },
    handleChange() {
      console.log('changed');
    },
    inputChanged(value) {
      console.log(value);
      this.activeNames = value;
    },
    getComponentData() {
      return {
        on: {
          change: this.handleChange,
          input: this.inputChanged
        },
        attrs:{
          wrap: true
        },
        props: {
          value: this.activeNames
        }
      };
    }
  }
};
</script>

<style scoped></style>
