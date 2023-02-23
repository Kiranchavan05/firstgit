var items=document.getElementsByClassName('list-group-item');

console.log(items);
console.log(items[2]);

//items.style.fontWeight='bold';-----=> it is comming error

items[2].style.backgroundColor='Green';
//items[2].textContent='Hello';   
items[2].textContent='kiranchavan';

///items.style.fontWeight='boldcolor';  => it is commimg error

for(var i=0; i<items.length; i++){
    items[2].style.fontWeight='bold';
}
for(var i=0; i<items.length; i++){
    items[0].style.fontWeight='bold';
}
for(var i=0; i<items.length; i++){
    items[1].style.fontWeight='bold';
}
for(var i=0; i<items.length; i++){
    items[3].style.fontWeight='bold';
}


