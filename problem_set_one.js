function addList(array){
    var newArr=[];
    var strArr =[" Steph Curry", " Klay Thompson", " Harrison Barnes", " Draymond Green", " Festus Ezili"];
    for (var i= 0; i < arr.length; i++){
        newArr.push(array[i] + strArr[i]);
    }
    return newArr;
}

function modArray(an_array,a_function){
    return a_function(an_array);
}
modArray(numbers,addList)
