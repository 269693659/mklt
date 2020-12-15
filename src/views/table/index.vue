<template>
  <div class="page">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-success="handleAvatarSuccess"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传 xlsx / xls文件，且不超过500kb</div>
      </el-upload>
      <el-button type="primary" @click="export2Excel">导出</el-button>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
import  XLSX from 'xlsx'
export default {
  components: {

  },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎3333',
          address: '上海市普陀区金沙江路 1517 弄6666666666'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      fileList:[]
    };
  },
  created() {

  },
  mounted() {

  },
  methods: {
    handleAvatarSuccess(res,file ){
      let filedata = file.raw
      this.importFile(filedata)
    },
    // 导出
    export2Excel(){
      require.ensure([],()=>{
        console.log(8888888888);
        // const { export_json_to_excel } = require('../../export-JS/Export2Excel');
        const tHeader = ['日期','姓名','地址']
        const tHeaderlabel = ['date','name','address']
        const list = this.tableData
        const data = this.formatJson(tHeaderlabel, list);   
        import("@/export-JS/Export2Excel").then(excel =>{
          // excel.export_json_to_excel({
          //               header: tHeader,
          //               data,
          //               filename: '列表excel',
          //               autoWidth: true,
          //               bookType: "xlsx"
          //           });
          excel.export_json_to_excel(tHeader, data, '列表excel');

        })
      })
    },
    formatJson(tHeaderlabel, jsonData) {
        return jsonData.map(v => tHeaderlabel.map(j => v[j]))
 
      },
    // 导入
    importFile(file){
      let fileReader = new FileReader()
      fileReader.readAsBinaryString(file)
      fileReader.onload = res=>{
        let data = res.target.result
        let workbook = XLSX.read(data,{type:'binary'})
        let wsname = workbook.SheetNames[0]; //取第一张表名
        let ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname])
        ws.forEach(res=>{
          let second = 25569,day_timestamp = 24 * 60 * 60 * 1000,time = res['日期'];
          let d = new Date((time-second)*day_timestamp).toLocaleString().split(' ')[0]
          let obj = {
            date:d.replace(/\//gi,'-'),
            name:res['姓名'],
            address:res['地址'],
          }
          this.tableData.push(obj)
        })
      }
    }

  },
};
</script>
<style lang="scss" scoped>
.page{
  padding: 10px;
}
</style>