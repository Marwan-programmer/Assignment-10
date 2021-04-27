
let 
items=["H",2,3,5,5,"H",6,"H","H"];
let m=0;
let mf=1;
 

for(i=0;i<items.length;i++){

for(j=i;j<items.length;j++){
if(items[i]==items[j]){
m++;}
}
if(m>mf){
   mf=m;
   items.splice(i,i);
}

m=0;
mf=1;
}


alert(items + " (array  without duplicate )");

