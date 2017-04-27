var jsonStr = JSON.stringify([
  {
    "name" : "Mohan Kumar Guruswamy",
    "company" : "CTS"
  },{
    "name" : "Nathiya Annamalai",
    "company" : "House Wife"
  }
]);

console.log(jsonStr);

var json = JSON.parse(jsonStr);

console.log(json.length);

var getNameList = function(json, getName){
  var names = [];
  json.forEach(function(person){
    names.push(getName(person));
  });

  document.write(names);
}

getNameList(json, function(person){
  return person.name;
})
