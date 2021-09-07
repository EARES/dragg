<template>
  <div style="margin-left: 2em">
    <div v-for="el in this.childrens" :key="el.id">
      <tr
        :id="el.id"
        @dragstart="dragStart"
        @drop="drop"
        @dragover="allowDrop"
        draggable="true"
      >
        <td>
          <i class="bi bi-list"></i>
        </td>
        <td :id="el.id">
          <i v-if="$store.state.list2.findIndex((x) => x.parentId == el.id) > -1" :class="[el.show ? 'bi bi-dash-circle' : 'bi bi-plus-circle']" :id="el.id" @click="el.show = !el.show"></i>
          <input type="text" :id="el.id" :value="el.id"/>
        </td>
      </tr>

      <children4
        v-show="el.show"
        :parent-id="(parentId != null ? parentId + '.' : '') + el.id"
        :childrens="$store.state.list2.filter((x) => x.parentId == el.id)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Children4",
  display: "Nested",
  order: 15,
  props: ["parentName", "parentId", "childrens"],
  data() {
    return {
      enabled: true,
      goster: false,
      emptyArray: [],
    };
  },

  methods: {
    dragStart: function (event) {
      event.dataTransfer.setData("Text", event.target.id);
    },
    dragging: function (event) {},
    allowDrop: function (event) {
      event.preventDefault();
    },
    drop: function (event) {
      event.preventDefault();
      var data = event.dataTransfer.getData("Text");
      console.log(data);
      console.log(event.target.id);
      if (data != event.target.id)
        this.$store.dispatch("move", { first: data, second: event.target.id });
    },
  },
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
