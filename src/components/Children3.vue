<template>

  <draggable class="dragArea" tag="ul" :list="childrens" :group="{ name: 'g1' }"  @change="afterAdd(childrens, $event)" >
    <li  v-for="el in childrens" :key="el.id">
      <span class="btn btn-primary" @click="el.show = !el.show">Göster</span>

      <p>{{ el.name }}</p>
      <children3 v-if="el.show" :childrens="el.children!=null ?el.children:emptyArray" />
    </li>
  </draggable>

</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "Children3",
  display: "Nested",
  order: 15,
  props: ["parentName", "parentId", "childrens"],
  components: {
    draggable,
  },
  data() {
    return {
      enabled: true,
      dragging: false,
      goster: false,
      emptyArray:[]
    };
  },

  methods:{

    afterAdd(id,evt) {
      console.log(id);
      console.log(evt);

    }
  }
};
</script>
<style scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
}
</style>
