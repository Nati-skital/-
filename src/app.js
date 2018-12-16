import {http} from './http'; 
import {ui} from './ui'; 

// init
document.addEventListener('DOMContentLoaded',()=>{
  ui.showDate();
  ui.fieldState('none');
});

// Refresh the page
document.querySelector('.clear-btn').addEventListener('click', ui.refresh);

// get all employees 
function paintAll(){
  http.get(`http://localhost:3000/employees`)
  .then(res => {
    ui.showAlert('נמצאו תוצאות לבקשתך', 'alert success');
    ui.paint(res)
  })
  .catch(err => console.log(err));
}
//----------------------------------------------
// Get singel employed by identifier
function check(val){
  http.get(`http://localhost:3000/employees`)
  .then(res => {
    const arr = res;
    arr.forEach(item => {
      if(val === item.name || val === item.phone ||Number(val) === item.car_number){
       ui.paintIndividal(item);
       ui.showAlert('נמצאו תוצאות לבקשתך', 'alert success');
      }
    })
  })
  .catch(err => console.log(err));
}
//----------------------------------------------------------- 
function getValue(){
 const input = document.getElementById('search-btn');input.addEventListener('click', (e) =>{
    const inputValue = document.getElementById('search').value;
    if(inputValue){
     check(inputValue);
     ui.clearInputField();
    }else{
      ui.showAlert('מועסק לא נמצא', 'alert err');
    }
  });
}
//------------------------------------------------
const selectEl = document.getElementById('option-search');
selectEl.addEventListener('change', () => {
  if(selectEl.value === 'all'){
    paintAll();
  }else if(selectEl.value === 'defualt'){
    ui.fieldState('none');
    ui.clearList();
  }else{
    ui.fieldState('block');
    getValue();
    ui.clearList();
  }
});

