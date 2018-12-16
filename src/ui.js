class UI{
  constructor(){
    this.list = document.getElementById('list');
    this.input = document.getElementById('search');
    this.dateEl = document.getElementById('date');
    this.selectEl = document.getElementById('option-search');
    this.searchingDiv = document.getElementById('searching'); 
    this.messageEl = document.getElementById('message');
  }

  showDate(){
    let date = `${new Date().getDate()}/${new Date().getMonth() +1}/${new Date().getFullYear()}`;
    this.dateEl.innerHTML = date; 
  }

  fieldState(par){
    this.searchingDiv.style.display = par; 
  }

  paint(employees){
    let output = '';

    employees.forEach(employe =>{
      output += `
      <tr>
        <td>${employe.name}</td>
        <td>${employe.phone}</td>
        <td>${employe.job}</td>
        <td>${employe.employe_number}</td>
        <td>${employe.car_number}</td>
      <tr>
      `;
    });
    this.list.innerHTML = output; 
  }

  paintIndividal(employe){
   const row = `
    <tr>
      <td>${employe.name}</td>
      <td>${employe.phone}</td>
      <td>${employe.job}</td>
      <td>${employe.employe_number}</td>
      <td>${employe.car_number}</td>
    <tr>
    `;
    this.list.innerHTML = row; 
  }

  clearInputField(){
    this.input.value = '';
  }

  clearList(){
    this.list.innerHTML = '';
  }

  refresh(){
    window.location.reload(); 
  }

  showAlert(message, className){
    this.clearAlert();
    this.messageEl.classList += className; 
    this.messageEl.appendChild(document.createTextNode(message));
    
    setTimeout(()=> {this.clearAlert()},3000); 
  }

  clearAlert(){
   const curAlert = document.querySelector('.alert');
    if(curAlert){
      curAlert.remove();
    }
  }

}

export const ui = new UI();