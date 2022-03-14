//delete a given element from array 
var array=[26,12,14,18,1,21,17,18,19,16,141,7,18,19,16,15];
console.log("array before deleting the element"+array);
function deleteelement(arr,element){
      for (let i=0;i<arr.length ;i++){
            if (arr[i]==element ){
                index =i;
            }
      }
      for(i=index;i<arr.length;i++){
          arr[i]=arr[i+1];
      }
      return arr;
}
console.log("array after deleting the element "+deleteelement(array,12));
/*array=deleteelement  (array,14);
for (i=0;i<array.length ;i++){
    console.log (array[i]);
}*/
//delete duplicates elements in an array 
var array2=[11,11,11,11,12,12,12,13,12,14,15,14,14,15,11];
console.log("array before deleting"+array2);
function deleteduplicates(arr){
      for (let i=0;i<arr.length ;i++){
            for (let index=i+1 ;index<arr.length;index++){
                if(arr[i]==arr[index]){
                 for(k=index; k < arr.length- 1; k++)
                {
                    arr[k] = arr[k + 1];
                }
               arr.length--;
                index--;
                }
            }
      }
     
      return arr;
}
console.log("array after deleting"+deleteduplicates(array2));
 
