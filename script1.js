//[1,2,"3",4,591,"3",392,"2",391,2,5,10,2,1,"5",1,1,20,20,"2"];
//Question 1
let array1 =[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function answer(valor){
	let result =[];
	//order the array and reduce duplicate
	let rd = valor.sort((a,b)=> a-b).reduce((acum,number)=> {
		acum[number]=(acum[number] || 0 ) + 1;
		return acum;
	},{} ); 

	// using the keys values from rd that its reduce for navigate for each value in the
	// valor array
	Object.keys(rd).filter(n=>result.push(valor.filter(number => number==n)));

	return result;
}

//BONUS
const answer2 = valor =>{
	let arrayString=[];
	let arrayInt=[];
	let result =[];

	 valor.filter(n=> Number.isInteger(n)? 
	 	arrayInt.push(n): arrayString.push(n));

	 arrayInt.length!==0 ? result.push(answer(arrayInt)): "";
	 
	 arrayString.length!==0 ? result.push(answer(arrayString)) : "";
	 
	 return result;
}


////// Question 2

const resultado = (cadena,valor)=>{
	let resl =[];
	for (var i = 0; i < cadena.length; i++) {
		let resultado=0;
		 for (var j = i +1; j < cadena.length; j++) {
		 	resultado=cadena[i] + cadena[j];
		 	if (resultado===valor) {
		 		resl.push(cadena[i],cadena[j]);
		 		break;
		 	}
		 }
	}

	return resl;
}

/////// Question 3
const color = value =>{
	let val = value.includes("#") ? hextToRGB(value.substring(1,7)) : RGBToHex(value);
 	return val;
 }

function hextToRGB(Hex){
	return parseInt(Hex.substring(0,2),16)+','+parseInt(Hex.substring(2,4),16)+','+parseInt(Hex.substring(4,6),16);
}

function RGBToHex(RGB){
	let hex =[];
	RGB.split(",").filter(n=> hex.push(toHex(n)));
	return '#'+hex.join('');
}

function toHex(val){
	val = parseInt(val,10);
	if (isNaN(val)) return "00";
	val = Math.max(0,Math.min(val,255));

	return "0123456789ABCDEF".charAt((val-val%16)/16) 
			+ "0123456789ABCDEF".charAt(val%16);
}