
//1.

// function array(arrs){
//     const newList=arrs.filter(function(a){
//      return a.age>18
//     })
//     return newList
// }
// const arrays=[
//     {name:'lada',age:20},
//     {name:'mey',age:20},
//     {name:'lin',age:15}
// ]
// console.log(array(arrays));


//2.


// let array = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
//     let uniqueArray= array.filter(function(element, index, self){
//          return self.indexOf(element)===index;
//         })
// console.log(uniqueArray);

//3.

// let user=[
//     {name:'len',aga:20},
//     {name:'ya',aga:22},
//     {name:'neth',aga:17}
// ]

// let newArray=user.map(function(e){
//     return e.name;
// })
// console.log(newArray);

//4.
// let date=["2024-01-01", "2024-02-02", "2024-04-04"] 

// let dates=date.map(function(element){
//       let array=element.split("-")
//       return `${array[2]}/${array[1]}/${array[0]}`
    
// })
// console.log(dates);

//.5

// let arrs=[200,12,43,23,45,65]

// let newArr=arrs.reduce(function(e1,e2){

//     if(e1>e2){
//         return e1
//     }else{

//         return e2
//     }
// },arrs[0])

// console.log(newArr);

//6.

// let arrays=[ 
//     {name: "Bread", category:"Grocery"},
//     {name: "Butter", category:"Grocery"}, 
//     {name:"Shampoo", category:"Personal Care"},

// ]

// let output=arrays.reduce(function(accum,current){
//   let {name,category}=current
//     if(!accum[category]){
//         accum[category]=[];
//     }
//     accum[category].push(name);   
//     return accum

// },{})
// console.log(output)

