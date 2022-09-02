person ={
  firstname: 'Jade',
lastname: 'Smith'
}
function addFullNameProperty(obj) {
  obj.fullName = person.firstname + " " + person.lastname;
return obj
}
console.log(addFullNameProperty(person,'fullName'));