function createperson(){
    var person= new object();
    person.name="siri";
    person.designation="Trainer";
    person.phno="1234567894";
    return person;
    
    
}

var siri=createperson();

function createperson2(){

var person= {};
person.name="siri";
person.designation="Trainer";
person.phno="1234567894";
return person;

}
siri=createperson2();

function createperson3(){
var person= {};
person['name']="sravani";
person['designation']="Trainer";
person['phno']="1234567894";
return person;
}
sravani=createperson3();
alert("name:"+sravani.name+"designation:"+sravani.designation+"phno:+sravani.phno");