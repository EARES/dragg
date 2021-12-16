<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-2">
        <button
          @click="showAll"
          v-if="$store.state.list2.filter((x) => x.show == false).length > 0"
          class="btn btn-success"
        >
          Show All
        </button>
      </div>
      <div class="col-12 mt-2">
        <button
          @click="hideAll"
          v-if="$store.state.list2.filter((x) => x.show == true).length > 0"
          class="btn btn-danger"
        >
          Hide All
        </button>
      </div>
    </div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <td style="word-break: break-all">#</td>
          <td style="word-break: break-all">Value</td>
        </tr>
      </thead>
      <tbody>
        <Children4
          :parent-id="null"
          :childrens="$store.state.list2.filter((x) => x.parentId == null)"
          :parent-name="null"
          :show="false"
        >
        </Children4>
      </tbody>
    </table>
  </div>
</template>

<script>
import Children4 from "@/components/Children4";
const table = document.getElementsByTagName("table")[0];
export default {
  name: "Tree",
  display: "Nested",
  order: 15,
  components: { Children4 },
  data() {
    return {
      list: [
        {
          id: "1",
          name: "1",
          show: false,
          children: [
            { id: 2, name: "1.2", show: false },
            {
              id: 3,
              name: "1.3",
              show: false,
              children: [
                {
                  id: 9,
                  name: "1.3.1",
                  show: false,
                  children: [
                    { id: 11, name: "1.3.1.1", show: false },
                    { id: 12, name: "1.3.1.2", show: false },
                    {
                      id: 13,
                      name: "1.3.1.3",
                      show: false,
                      children: [
                        {
                          id: 18,
                          name: "1.3.1.3.1",
                          show: false,
                          children: [
                            { id: 17, name: "1.3.1.3.1", show: false },
                            { id: 18, name: "1.3.1.3.2", show: false },
                            {
                              id: 19,
                              name: "1.3.1.3.3",
                              show: false,
                              children: [
                                { id: 20, name: "1.2", show: false },
                                {
                                  id: 21,
                                  name: "1.3",
                                  show: false,
                                  children: [
                                    {
                                      id: 9,
                                      name: "1.3.1",
                                      show: false,
                                      children: [
                                        {
                                          id: 22,
                                          name: "1.3.1.1",
                                          show: false,
                                        },
                                        {
                                          id: 23,
                                          name: "1.3.1.2",
                                          show: false,
                                        },
                                        {
                                          id: 24,
                                          name: "1.3.1.3",
                                          show: false,
                                          children: [
                                            {
                                              id: 18,
                                              name: "1.3.1.3.1",
                                              show: false,
                                              children: [
                                                {
                                                  id: 25,
                                                  name: "1.3.1.3.1",
                                                  show: false,
                                                },
                                                {
                                                  id: 26,
                                                  name: "1.3.1.3.2",
                                                  show: false,
                                                },
                                                {
                                                  id: 27,
                                                  name: "1.3.1.3.3",
                                                  show: false,
                                                  children: [
                                                    {
                                                      id: 2,
                                                      name: "1.2",
                                                      show: false,
                                                    },
                                                    {
                                                      id: 3,
                                                      name: "1.3",
                                                      show: false,
                                                      children: [
                                                        {
                                                          id: 9,
                                                          name: "1.3.1",
                                                          show: false,
                                                          children: [
                                                            {
                                                              id: 11,
                                                              name: "1.3.1.1",
                                                              show: false,
                                                            },
                                                            {
                                                              id: 12,
                                                              name: "1.3.1.2",
                                                              show: false,
                                                            },
                                                            {
                                                              id: 13,
                                                              name: "1.3.1.3",
                                                              show: false,
                                                              children: [
                                                                {
                                                                  id: 18,
                                                                  name: "1.3.1.3.1",
                                                                  show: false,
                                                                  children: [
                                                                    {
                                                                      id: 17,
                                                                      name: "1.3.1.3.1",
                                                                      show: false,
                                                                    },
                                                                    {
                                                                      id: 18,
                                                                      name: "1.3.1.3.2",
                                                                      show: false,
                                                                    },
                                                                    {
                                                                      id: 19,
                                                                      name: "1.3.1.3.3",
                                                                      show: false,
                                                                      children:
                                                                        [
                                                                          {
                                                                            id: 20,
                                                                            name: "1.2",
                                                                            show: false,
                                                                          },
                                                                          {
                                                                            id: 21,
                                                                            name: "1.3",
                                                                            show: false,
                                                                            children:
                                                                              [
                                                                                {
                                                                                  id: 9,
                                                                                  name: "1.3.1",
                                                                                  show: false,
                                                                                  children:
                                                                                    [
                                                                                      {
                                                                                        id: 22,
                                                                                        name: "1.3.1.1",
                                                                                        show: false,
                                                                                      },
                                                                                      {
                                                                                        id: 23,
                                                                                        name: "1.3.1.2",
                                                                                        show: false,
                                                                                      },
                                                                                      {
                                                                                        id: 24,
                                                                                        name: "1.3.1.3",
                                                                                        show: false,
                                                                                        children:
                                                                                          [
                                                                                            {
                                                                                              id: 18,
                                                                                              name: "1.3.1.3.1",
                                                                                              show: false,
                                                                                              children:
                                                                                                [
                                                                                                  {
                                                                                                    id: 25,
                                                                                                    name: "1.3.1.3.1",
                                                                                                    show: false,
                                                                                                  },
                                                                                                  {
                                                                                                    id: 26,
                                                                                                    name: "1.3.1.3.2",
                                                                                                    show: false,
                                                                                                  },
                                                                                                  {
                                                                                                    id: 27,
                                                                                                    name: "1.3.1.3.3",
                                                                                                    show: false,
                                                                                                  },
                                                                                                ],
                                                                                            },
                                                                                          ],
                                                                                      },
                                                                                    ],
                                                                                },
                                                                              ],
                                                                          },
                                                                        ],
                                                                    },
                                                                  ],
                                                                },
                                                              ],
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "5",
          name: "5",
          show: false,
          children: [
            {
              id: 6,
              name: "5.1",
              show: false,
              children: [
                { id: 14, name: "5.1.1", show: false },
                { id: 15, name: "5.1.2", show: false },
                { id: 16, name: "5.1.3", show: false },
              ],
            },
            { id: 7, name: "5.2", show: false, children: [] },
          ],
        },
      ],
    };
  },
  methods: {
    showAll() {
      this.$store.commit("showAll");
    },
    hideAll() {
      this.$store.commit("hideAll");
    },
  },
  mounted: function () {
    // wire up our listeners
    console.log("mounted");
    var tables = document.getElementsByTagName("table");
    for (var i = 0; i < tables.length; i++) {
      resizableGrid(tables[i]);
    }

    function resizableGrid(table) {
      var row = table.getElementsByTagName("tr")[0],
        cols = row ? row.children : undefined;
      if (!cols) return;

      table.style.overflow = "hidden";

      var tableHeight = table.offsetHeight;

      for (var i = 0; i < cols.length; i++) {
        var div = createDiv(tableHeight);
        cols[i].appendChild(div);
        cols[i].style.position = "relative";
        setListeners(div);
      }

      function setListeners(div) {
        var pageX, curCol, nxtCol, curColWidth, nxtColWidth;

        div.addEventListener("mousedown", function (e) {
          curCol = e.target.parentElement;
          nxtCol = curCol.nextElementSibling;
          pageX = e.pageX;

          var padding = paddingDiff(curCol);

          curColWidth = curCol.offsetWidth - padding;
          if (nxtCol) nxtColWidth = nxtCol.offsetWidth - padding;
        });

        div.addEventListener("mouseover", function (e) {
          e.target.style.borderRight = "2px solid #0000ff";
        });

        div.addEventListener("mouseout", function (e) {
          e.target.style.borderRight = "";
        });

        document.addEventListener("mousemove", function (e) {
          if (curCol) {
            var diffX = e.pageX - pageX;

            if (nxtCol) nxtCol.style.width = nxtColWidth - diffX + "px";

            curCol.style.width = curColWidth + diffX + "px";
          }
        });

        document.addEventListener("mouseup", function (e) {
          curCol = undefined;
          nxtCol = undefined;
          pageX = undefined;
          nxtColWidth = undefined;
          curColWidth = undefined;
        });
      }

      function createDiv(height) {
        var div = document.createElement("div");
        div.style.top = 0;
        div.style.right = 0;
        div.style.width = "5px";
        div.style.position = "absolute";
        div.style.cursor = "col-resize";
        div.style.userSelect = "none";
        div.style.height = height + "px";
        return div;
      }

      function paddingDiff(col) {
        if (getStyleVal(col, "box-sizing") == "border-box") {
          return 0;
        }

        var padLeft = getStyleVal(col, "padding-left");
        var padRight = getStyleVal(col, "padding-right");
        return parseInt(padLeft) + parseInt(padRight);
      }

      function getStyleVal(elm, css) {
        return window.getComputedStyle(elm, null).getPropertyValue(css);
      }
    }
  },
};
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
