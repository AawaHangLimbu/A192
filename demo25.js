// const Fname="abdul"
// const lName="kawari"
// const addName=()=>{
//     return `${Fname} rehman ${lName}`
// }
// console.log(addName())
// const arry1=[-3,-2,-1]
// const arr2=[0,1,2,3]

// const addArray=()=>{
//     const result=[...arry1,...arr2]
//     return result

// }
// const addArray2=()=>[...arry1,arr2]
// console.log(addArray())

// const userData={
//     name:"tripal",
//     email:"tripal123@gmail.com",
//     phn:123,
//     hasPassedOut:false,
//     occupation:undefined
// }

// console.log(0||"is not falsy")
// const filterFalsyVal=()=>{
//     let finalUserData={}
//     for(let key in userData){

//         if(userData[key]){
//             finalUserData={...finalUserData,[key]:userData[key]}
//         } 
//      }
//         return finalUserData
  
// }
// console.log(filterFalsyVal())




// const filterFalsyVal=()=>{
//     let finalUserData={}
//     for(let key in userData){

//         if(!userData[key]){
//             finalUserData={...finalUserData,[key]:userData[key]}
//         } 
//      }
//         return finalUserData
  
// }
// console.log(filterFalsyVal())




const userData={
    name:"tripal",
    email:"tripal123@gmail.com",
    phn:123,
    hasPassedOut:false,
    occupation:undefined
}
const apiResponse={
    status:404,
    message:"not found",
    data:{}
}
const thisIsFinalUserData={}