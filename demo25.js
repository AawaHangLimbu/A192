const UserData=[
    {id:1, name:"abdul", gender:"male",age:20,occupation:undefined},
    {id:2, name:"surendra", gender:"male",age:16,occupation:"intern"},
    {id:3, name:"Kavi", gender:"male",age:21,occupation:"streamer"},
    {id:4, name:"Sabina", gender:"female",age:18,occupation:undefined},
    {id:5, name:"rabina", gender:"female",age:19,occupation:"SWE"},
    {id:6, name:"tripal", gender:"male",age:19,occupation:undefined},
]
const response={
    status:200,
    message:"user data fetched sucessfylly",
    data:UserData
}
const fetchUserNames=()=>{
    if(response.status === 200){
        const result=response.data
        .filter((user)=> user.occupation||user.age >30)
        .map((user)=> user.name)
        return result
    }else{
        const message="API fetch failed"
        return message
    }
}
console.log(fetchUserNames())