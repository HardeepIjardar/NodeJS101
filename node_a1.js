//const fs = require("fs");
//Q1.
//i.  fs.mkdirSync("space_project");

// ii. fs.mkdir("space_project",(err)=>{
//     if(err){
//         throw err
//     }
//     console.log("File created")
// })
//------------------------------------------------------------------------------------------------------------------------------------//

//Q2.
// data = "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.";
//i.   fs.writeFileSync("./space_project/log.txt",data);

//ii.  fs.writeFile("./space_project/log.txt",data,(err)=>{
//     if(err){
//         throw err
//     }
//     console.log("File created and line added.")
// })
//------------------------------------------------------------------------------------------------------------------------------------//

//Q3.
// data = "ISRO has started working on Gaganyaan.";
//i.  fs.writeFileSync("./space_project/log.txt",data);

//ii. fs.writeFile("./space_project/log.txt",data,(err)=>{
//     if(err){
//         throw err
//     }
//     console.log("Data replaced")
// })
//------------------------------------------------------------------------------------------------------------------------------------//

//Q4.
// data = "The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.";
//i.   fs.appendFileSync("./space_project/log.txt",data);

//ii.  fs.appendFile("./space_project/log.txt",data,(err)=>{
//     if(err){
//         throw err
//     }
//     console.log("line appended")
// })
//------------------------------------------------------------------------------------------------------------------------------------//

//Q5.
//i.  fs.renameSync("./space_project/log.txt","./space_project/update.txt");
//ii. fs.rename("./space_project/log.txt","./space_project/update.txt",(err)=>{
//     if(err){
//         throw err
//     }
//     console.log("file renamed")
// })
//------------------------------------------------------------------------------------------------------------------------------------//

//Q6.
//i.   let x = fs.readFileSync("./space_project/update.txt")
//     console.log(x.toString())
//     console.log("We are excited")

//ii.  fs.readFile("./space_project/update.txt",(err)=>{
//     if(err){
//         throw err
//     }
//     console.log(x.toString())
// })
// console.log("We are excited")
//------------------------------------------------------------------------------------------------------------------------------------//

//Q7.
//i.  fs.unlinkSync("./space_project/update.txt");

//ii. fs.unlink("./space_project/update.txt",(err=>{
//     if(err){
//         throw err
//     }
//     console.log("File deleted Successfully")
// }))
//------------------------------------------------------------------------------------------------------------------------------------//

//Q8.
//i.   fs.rmdirSync("space_project");

//ii.  fs.rmdir("space_project",(err)=>{
//     if(err){
//         throw err
//     }
//     console.log("Folder deleted Successfully")
// })
//------------------------------------------------------------------------------------------------------------------------------------//