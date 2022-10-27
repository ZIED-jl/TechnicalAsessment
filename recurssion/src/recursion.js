// 1. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
    
        if (array.length === 0){
            return 0 ;
        }
        return array[0]+sum (array.slice(1));
};

// 2. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
   
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            if(typeof array[i]==="number"){
                sum+=array[i]}
          else  if (array[i] instanceof Array) {
             sum =sum +  arraySum(array[i]);}
        }
       return sum;
      
};

// 3. Check if a number is even.
var isEven = function(n) {
  
        if((n -2)===0){
            return true;}else if((n-2)=== 1){return false;}
        return isEven(n-2);
};

// 4. Write a function that reverses a string.
var reverse = function(string) {

};


// 5. Reverse the order of an array
var reverseArr = function(array) {
    
        var newarray= [];
        for (var i = 0; i<array.length;i++){
            var x = array[0];
            
            if (x < array[i]){
                return newarray.unshfit(array[i])}
            return reversearray(array.slice(1));}

};


// 6. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) { if (n < 2) {
    return [1];   
}
if (n < 3) {
    return [1, 1];
}

var a = fibonacci(n - 1);
a.push(a[n - 2] + a[n - 3]);
return a;
};

// 7. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    if (n === array.length){
    return array.length-1;}
    return  nthFibo(n-1)

 
};



// 8. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
    var result = 0;
    for (var key in obj)
        if (key === "number"){
    if((key-2)===0){
        return result = result + key;}
        else if((key-2)=== 1){
            return false;}
    return result = result + isEven(key-2);
}   return result;
}


// 9. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
    for (var i =0;i<array.length;i++){
        var s = (min + max)/2;
            if (target === s ){return array[s];}
            else if (target <s){
                return binarySearch (array,target,min,max/2);
            }
            return binarySearch(array,target,max/2 ,max )
    }
};

// 10. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
    
        var result = [];
        for (var i = 0; i<array.length;i++){
            var x  = array[0];
            if (x > array[i]){
               return result.unshift(x);
            }
        return result += mergeSort(array.slice(1)) ;
    };

};


