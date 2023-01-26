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
      if(emp !== undefined){
        this.employee.id = emp.id;
        this.employee.name = emp.name;
        this.employee.email = emp.email;
        this.isUpdate = true;
      }
    },
    btnOK(){
      this.send = true;
      //if(this.isUpdate == false) this.addEmployee();
      (this.isUpdate == false)? this.addEmployee() : this.updateEmployee(this.employee.id)
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
    },
    updateEmployee(id){
      axios.put('http://localhost:3000/employees/'+id,{
        "id": this.employee.id,
        "name": this.employee.name,
        "email": this.employee.email,
      })
      .then((res)=>{
        console.log(res); // 성공 시
        this.isUpdate = false;
      })
      .catch((err)=>{
        console.log(err); // 에러 발생 시
      })
    },
    deleteEmployee(id){
      console.log("id: " + id);
      axios({method: 'delete', url:'http://localhost:3000/employees/'+id})
      .then((res)=>{this.employee.splice(id, 1)})
      .catch((err)=>console.log(err))
    }
  },
  created(){
    axios.get('http://localhost:3000/employees') // 서버에 요청하기
    .then((res)=>{
      //console.log(res); // 성공 시
      this.employees = res.data;
    })
    .catch((err)=>{console.log(err);}) // 에러 발생
  }
})