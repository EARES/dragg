<template>
  <div>
    <div v-if="gameList.length>0">
      <div v-for="rvalue in 9" :key="rvalue">
        <input style="width: 10px;" :key="column+'-'+rvalue" v-for="column in 9"
               :value="gameList.filter(x=>x.row === rvalue-1 && x.column===column-1)[0].value"
        />

      </div>
    </div>
    <button @click="fillData(1,1,5)">Ekle</button>
  </div>
</template>

<script>
export default {
  name: "Game",
  data() {
    return {
      gameList: []
    }
  },
  created() {
    // this.createTable();
  },
  beforeMount() {
    this.createTable();
  },
  mounted() {
    this.fillTable();
  },
  computed: {},
  methods: {
    createTable() {
      let i = 0;
      let j = 0;
      let square = 0;
      let counter = 1;
      for (i = 0; i < 9; i++) {
        if (i > 5)
          square = 6;
        else if (i <= 5 && i > 2)
          square = 3;
        else if (i <= 2)
          square = 0;


        for (j = 0; j < 9; j++) {
          this.gameList.push({row: i, column: j, square: square, value: 0});
          if (counter >= 3) {
            square++;
            counter = 0;
          }
          counter++;

        }
      }

    },
    fillTable() {
      let i = 0;
      let j = 0;
      let k = 0;
      let fillableList = [];
      for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
          let square = this.gameList.filter(x => x.row == i && x.column == j)[0].square;
          for (k = 1; k <= 9; k++) {
            if (this.rowControl(i, j, k) && this.columnControl(j, i, k) && this.squareControl(square, i, j, k)) {
              fillableList.push(k);
            }
          }
          let value = Math.ceil(Math.random() * fillableList.length);
          this.fillData(i, j, fillableList[value]);
        }
        let control = this.gameList.filter(x => x.row == i && (x.value == 0 || x.value == null)).length;
        if (control > 0) {
          console.log('aa');
          i = i - 1;
        }
      }
    },
    fillData(i, j, value) {
      let data = this.gameList.filter(x => x.row == i && x.column == j)[0];
      if (this.rowControl(i, j, value) && this.columnControl(j, i, value) && this.squareControl(data.square, i, j, value)) {
        data.value = value;
      }
    },
    rowControl(row, column, value) {
      if (this.gameList.filter(x => x.row == row && x.value == value).length > 0) {
        return false;
      }
      return true;
    },
    columnControl(column, row, value) {
      if (this.gameList.filter(x => x.column == column && x.value == value).length > 0) {
        return false;
      }
      return true;
    },
    squareControl(square, row, column, value) {
      if (this.gameList.filter(x => x.square == square && (x.row != row || x.column != column) && x.value == value).length > 0) {
        return false;
      }
      return true;
    }
    ,
  }
}
</script>

<style scoped>

</style>
