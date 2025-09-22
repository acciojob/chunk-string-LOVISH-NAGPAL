function stringChop(str, size) {
	if (!str) return [];
let arr=[]
	let str1=""
	
  for(let i=0;i<str.length;i++){
	  if(str1.length<size){
		  str1+=str[i]
		  
		 
		  continue
	  }
	  
	  arr.push(str1)
	  str1=str[i]
	  
  }
	if(str1.length>0){arr.push(str1)}
	return arr
}


// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
