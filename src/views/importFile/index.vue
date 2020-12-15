<template>
  <div class="page">
      <h1>文件导入</h1>
      <input type="file" ref="inputer" @change="importf" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
      <ul>
        <li v-for="(item,i) in importData" :key="i" @mouseover="onMouseHover" @mouseout="onMouseOut">
          <p style="position:relative">{{item.name}}</p>
        </li>
      </ul>
  </div>
</template>

<script>
import XLSX from 'xlsx'
export default {
  components: {

  },
  data() {
    return {
      file:null,
      importData:[
        {name:'hello'},
        {name:'bye'},
        {name:'呵呵呵'},
      ]
    };
  },
  created() {

  },
  mounted() {

  },
  methods: {
    onMouseHover(e) {
				 console.log(e.target.innerText);
         let oDiv = document.createElement('div'); 
         oDiv.style = "height:40px;line-height:40px;border:1px solid #000;max-width: 200px;position: absolute; left: 50px; padding:0 15px;background: #fff;z-index:1"; 
				 oDiv.className = "tip";
				 oDiv.innerText=e.target.innerText;
				 e.target.appendChild(oDiv)
			},
			onMouseOut(e) {
        var oDiv = document.querySelector(".tip");
        e.target.removeChild(oDiv);
			},
    importf(e){
      console.log(e.target.files[0]);
      // this.$refs.inputer.files == e.target.files
      let _this = this;
      this.file = e.target.files[0];  
      let fileReader = new FileReader();
      fileReader.onload = res=>{
        let data = res.target.result
        let workbook  = XLSX.read(data,{type:'binary'})
        let wsname = workbook.SheetNames[0]; //取第一张表
        let ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); //生成json表格内容
        this.importData = ws
        console.log('读取成功',workbook.Sheets[wsname]);
      }
      fileReader.readAsBinaryString(this.file)
    }
  },
};
</script>
<style lang="scss" scoped>
</style>