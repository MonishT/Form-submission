const formElement = document.getElementById('form');
const h1Element = document.createElement('h1');
h1Element.id = 'title';
h1Element.innerText = "Details";
const table = document.getElementById('table');
formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e);
  let data = {};
  try{
  Array.from(e.target.elements).forEach((element) => {
    if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA' ) {
      if(element.value === '' || element.value === 'undefined'){
        throw BreakError;
      }
      data[element.name] = element.value;
    }
  });
} catch(BreakError){
  alert("Please provide all details");
}
var checked = document.getElementById('cuisine');
var selectedCuisine = [...checked.selectedOptions].map(option => option.value);
data['cuisine']=selectedCuisine;
if(data['cuisine'].length < 2){
  alert("Please select atleast 2 cuisines");
}
console.log(data);
  
  const tr = document.createElement('tr');
  const tdFirstName = document.createElement('td');
  tdFirstName.innerText = data.FirstName;
  const tdLastName = document.createElement('td');
  tdLastName.innerText = data.LastName;
  const tdChoiceOfFood = document.createElement('td');
  tdChoiceOfFood.innerText = data.cuisine;
  const tdAddress = document.createElement('td');
  tdAddress.innerText = data.address;
  const tdState = document.createElement('td');
  tdState.innerText = data.state;
  const tdCountry = document.createElement('td');
  tdCountry.innerText = data.country;
  tr.append(tdFirstName,tdLastName,tdAddress,tdChoiceOfFood,tdState,tdCountry);
  table.appendChild(tr);
  document.body.append(h1Element,table);
  e.target.reset(); // resetting form
})