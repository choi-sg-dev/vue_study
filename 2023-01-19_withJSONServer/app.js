new Vue({
  el: '#app',
  data: {
    employees: [],
    employee: {id:0, name:'', email:''},
    isUpdate: false,
    show: false,
    send: false,
  },
  methods: {
    showForm(emp){
      this.show = true;
    },
    btnOK(){
      this.send = true;
      if(this.isUpdate == false) this.addEmployee();
    },
    btnCancel(){
      this.show = false; this.send = false;
    },
    addEmployee(){
      if(this.send == true){
        axios.post('http://localhost:3000/employees',
          {"id": this.employee.id, "name": this.employee.name, "email": this.employee.email})
          .then((res)=>{console.log(res)})
          .catch((err)=>{console.log(err)})
          this.show = false;
          this.send = false;
      }
    }
  },
  created(){
    axios.get('http://localhost:3000/employees') // 서버에 요청하기
    .then((res)=>{
      console.log(res); // 성공 시
      this.employees = res.data;
    })
    .catch((err)=>{console.log(err);}) // 에러 발생
  }
})