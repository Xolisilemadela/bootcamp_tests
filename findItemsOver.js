
var itemsOver20 = [];
for(let i=0; i<list.length; i++){
const listItem = list[i];
if(listItem.qty > 20){
    itemsOver20.push(listItem);
}
}
return itemsOver20;

function findItemsOver(list, threshold){
var itemsOverThreshold = [];
for(let j=0; j<list.length; j++){
    var item = list[j];
  if(item.qty > threshold){
    itemsOverThreshold.push(list[j]);
  }
}
return itemsOverThreshold;
}