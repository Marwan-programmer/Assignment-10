let
digit=0;

let user=+prompt("any number")||0;
let usersrting =user.toString();


for(i=0;i<usersrting.length;i++){
digit+=usersrting[i]**[usersrting.length];

}

if(digit==user){

   alert(user+" is narcissistic")
}else{
   alert(user+" is not narcissistic")
}