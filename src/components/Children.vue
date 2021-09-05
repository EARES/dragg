<template>
  <draggable
      :list="list"
      item-key="mainId"
      group="tasks"
      class="list-group"

  >
    <template #item="{ element }">
      <div class="list-group-item">
        <tr>
          <td>
            <button @click="goster = !goster">Göster</button>
          </td>
          <td class="fit"><input style="width: 100px;"
                                 :value="element.name"
          /></td>
        </tr>
        <template v-if="goster">
          <Children
              v-for="(subchild, subindex) in childrens"
              :parent-id="subchild.id"
              :main-id="parentId"
              :parent-name="parentName + '.' + (subindex + 1)"
              :childrens="subchild.children"
              :key="subchild"
              :bosluk="bosluk + 1"
          >
          </Children>
        </template>
      </div>
    </template>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "Children",
  props: ["parentName", "parentId", "childrens", "bosluk","mainId"],
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
  }
};
</script>

<style scoped></style>
