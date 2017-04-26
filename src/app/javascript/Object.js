var myObj = {
	daysForMeeting : ['Wednesday'],
	"wed call time" : ['7:00'],
	team : 'TechUpgrade',
	techUpgradeAllocation : 0,
	optional: true
} 

var obj_func1 = function(){
	document.writeln("myObj.daysForMeeting = " + myObj.daysForMeeting);
	document.writeln("obj['wed call time'] = " + myObj["wed call time"]);
	document.writeln("myObj.optional = " + myObj.optional);
	delete myObj.optional;
	document.writeln("myObj.optional = " + myObj.optional);
	document.writeln("team in myObj = " + "team" in myObj)
	document.writeln(typeof myObj.daysForMeeting);

	var obj1 = {value : 1};
	var obj2 = {value : 1};

	var str = '10';
	var num10 = 10;
	var obj3  =  new String('10');
	console.log(obj1 == obj2);
	console.log(str === num10);
	console.log(obj3 === num10);	
}

//obj_func1();