let 
items=["H",2,3,5,5,"H",6,"H","H"];
let m=0;
let mf=1;
let frequent=" all items"; 

for(i=0;i<items.length;i++){

for(j=i;j<items.length;j++){
if(items[i]==items[j]){
m++;}
}
if(m>mf){
   mf=m;
   frequent=items[i];
}



m=0;
}


alert(frequent+" is most frequent item " + "(" +mf+ " times)")

