// const express = require('express')
// const personalData = require('./personal_data') // to import data from file location directive and store in variable personalData
// const app = express()
// app.get('/',(req,res)=>{
//     res.send((personalData))
// })
// const port = 5000
// app.listen(port,()=>{
//     console.log(`running the browser online in ${port}`)
// })

//=======================================================================================================

//TO COLOR THE TEXT USING NODE THROUGH NPM MODULE

// const color = require('colors')
// console.log("Mohsin".red)  // to get colored hext from module 
// =======================================================================================================

// const fs = require('fs')
//  const input = process.argv;
// fs.writeFileSync("hellow.txt","this is mohsin")
// console.log(process.argv[2])

// ===================================================================================================
// how to create and remove file 

// const fs = require('fs')
// const data = process.argv;

//  to get the data from the terminal where we enter
//  ex:- node express apple fruits.txt 'grapes'

// if(data[2] == 'apple'){fs.writeFileSync(data[3],data[4])}
//   here file is created if condition is satisfies
//   name index3 and remaining data is sent to index 4
// else if(data[2]=='mango'){
//     fs.unlinkSync(data[3])  
//     to remove the file from folder if condition satisfies using keyword "unlinksync"
// }
// else {
//     console.log('invalid input please check')
// }

// ====================================================================================================

//                  To Create Multiple Files in Respective Folder Using Directory Path
//              -------- ----- ---- ---- ------ ----- ----- ------- ------ ------- ----

// const fs = require('fs')
// const paths = require('path') //to require the path of folder
// const directoryPath = paths.join(__dirname) //to get the directory of path of the folder and stored
// console.log(directoryPath) //it prints the directory path
// for(var i = 0; i <5 ; i++){
//     fs.writeFileSync(directoryPath+"/hello"+i+"txt","this is for practice purpose only")
//     to create 5 files using loops
// }
// how to read the number of files in the directory path

//  fs.readdir(directoryPath,(err,data)=>{
//     data.forEach((items)=>{ //it gives the list of files in single not in array
// console.log(items)
//     })
//  })

// ======================================================================================================

// files directory file cannot be accessed from Drives 
// path can be get with in the browser environment

// CRUD with FILE SYSTEM (Create file,Read & Rename file,Update file,Delete file)

//===============================================================================================================================

//                       TO CREATE A FILE WITH SOME TEXT FOR FURTHER OPERATIONS

// const fs = require('fs')
// const paths = require('path') 
// const directoryPath = paths.join(__dirname,"creating file") 
// const fullPath = `${directoryPath}/apple.txt`
// fs.writeFileSync(fullPath,"it is for practice purpose only")

//===============================================================================================================================

//                                 TO READ THE FILE
//                         ------------------------------------

// const paths = require('path') 
// const directoryPath = paths.join(__dirname,"creating file") 
// const fullPath = `${directoryPath}/apple.txt`
// fs.writeFileSync(fullPath,"it is for practice purpose only")
// fs.readFile(fullPath,"utf8",(req,res)=>{
//     console.log(res)
//  })
//===============================================================================================================================

//                            TO UPDATE/ADD TEXT TO EXISTING FILE 
//                          --------------------------------------

// const paths = require('path') 
// const directoryPath = paths.join(__dirname,"creating file") 
// const fullPath = `${directoryPath}/apple.txt`
// fs.writeFileSync(fullPath,"it is for practice purpose only")
// fs.appendFile(fullPath," hence it is appended successfully",(err)=>{
//     if(!err)console.log("successful")
// })

//===============================================================================================================================

//                              TO RENAME  THE FILE
//                             --------------------------

// const paths = require('path') 
// const directoryPath = paths.join(__dirname,"creating file") 
// const fullPath = `${directoryPath}/apple.txt`
// fs.writeFileSync(fullPath,"it is for practice purpose only")
// fs.rename(fullPath,`${directoryPath}/Mohsin.txt`,(err)=>{
//     if(!err)console.log("successful")
// })

//===============================================================================================================================

//                               TO DELETE / REMOVE THE FILE
//                             --------------------------------

// const paths = require('path') 
// const directoryPath = paths.join(__dirname,"creating file") 
// const fullPath = `${directoryPath}/apple.txt`
// fs.writeFileSync(fullPath,"it is for practice purpose only")
// fs.unlinkSync(`${directoryPath}/apple.txt`)

//=========================All in one fs requirement ============================================

// const fs = require('fs')
// const path = require('path')
// const fullPath = path.join(__dirname)
// fs.writeFileSync('hello.txt', 'hello')
// fs.readFile(dir, 'utf8', (res, req) => {
//   console.log(req)
// })
// const dir = `${fullPath}/hello.txt`
// fs.appendFile(dir, "Assalamualikum mera name Mohsin", (err) => {
//   if (!err) { console.log("apended") }
// })
// fs.rename(dir, `${fullPath}/Mohsin.txt`, (err) => {
//   if (!err) { console.log("changed name") }
// })
// fs.unlinkSync(dir, (err) => {
//   if (!err) { console.log("deleted") }
// })

//===============================================================================================================================

//                                      MAIN KEYWORDS
//                                    -------------------

// 0.[variable.name(fs)].writeFileSync([full_filepath],"[fileName.txt(any)]","[Text to be written]")
// 1.[variable.name(fs)].readFile(fullPath,"utf8",(req,res)=>{
//     console.log(res)
//  })

// 2.[variable.name(fs)].appendFile(fullPath," hence it is appended successfully",(err)=>{
//     if(!err)console.log("successful")
// })
// 3.[variable.name(fs)].rename(fullPath,`${directoryPath}/Mohsin.txt`,(err)=>{
//     if(!err)console.log("successful")
// 4.[variable.name(fs)].unlinkSync(`${directoryPath}/[fileName]`)

//========================================================================

// TO HANDLE THE DATA IN NODE EXPRESS()  USING ROUTES TO GET DATA FROM DIFFERENT FILES WHILE EXPORTING
//---------------------------------------------------------------------------------------------------

// const express = require('express')

// const dataRoutes = require('./data')
// const commentRoutes = require('./comment')

// const app = express()

// const PORT = 5000;

// app.use('/data',dataRoutes)
// app.use('/comments',commentRoutes)

// app.listen(PORT, (req,res)=>{
//     console.log(`Your server is running on port ${PORT} Mohsin Boss`)
// })
// ========================================================================================

// app.use(express.static(folderPath));
// use to show the about.html or any file on URL but on URL it should be
//      written as" localhost:5000/about.html "instead of showing like this it can be shown as
//      localhost:5000/about" without " .html "as blow code

//     app.get('',(req,res)=>{
//     res.sendFile(`${folderPath}/about.html`)
//     })


//============================================================================

//            MONGO DB DETAILS
//           ------------------

// Command line for getting DB collection -->  mongosh --show dbs
// to create a new collection  -->  use [name of database]  --> db,createCollection('[filename]')


// don't enter the id in the db it will automatically create the ket/id just enter the data
//   To enter the data in the database [filename] --> use [db collection name] -->db.[filename].insertOne({name:"mohsin",age:21})
// example --> use mohsin --> db.ahmad.insertOne({name:"Mohsin",age:21,college:"MGIT"})  press enter
//   my mondodb url = mongodb://localhost:27017

// ------MONGO DB QUERY COMPARISON OPERATORS--    -------------EVALUATION-------------
//   $eq -->equal to                                           $expr
//   $gt -->greater than                                       $jsonSchema
//   $gte --> greater than or equal to                         $mod
//   $in -->                                                   $regex
//   $lt -->lower than                                         $text
//   $lte -->lower than or equal to                            $where
//   $ne -->not equal
//   $nin
//    -------LOGICS---------                     -------------ARRAY--------------------------

//   $and -->AND operator                                      $all
//   $not -->NOT operator                                      $eleMatch
//   $nor -->NOR operator                                      $size
//   $or -->OR operator

//   ----ELEMENTS----

//   $exists
//   $type

// -------------------MONGODB----------------
// const {MongoClient} = require('mongodb'); 
// const dataBaseName = 'mohsin'

// const client = new MongoClient('mongodb://localhost:27017')

// async function getData(){
//    let result = await client.connect();
//    collectionName = result.db(dataBaseName)
//    return collectionName.collection('ahmad')
// }
// getData()

// module.exports= getData

// 


//======================    MONGOOSE  ===============================================================

// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/mohsin');

// const ProductSchema = mongoose.Schema({
//     name: String,
//     branch: String,
//     section: String,
//     marks: Number
// });

// const main = async () => {
//     const Product = mongoose.model('ahmad', ProductSchema)
//     let Data = Product(
//         {
//             name: "Mohmmad Mohsin Ahmad",
//             branch:"EEE",
//             section:"EEE-2"

//         })
//     let result = await Data.save() // save only when data is entering not for updates or delete
//     // console.log(result)
// }
// main()

//========================== OS MODULE =================
// const os =require('os')
// console.log(os.arch())
// console.log(os.freemem()/(1024*1024*1024))
// console.log(os.totalmem()/(1024*1024*1024))
// console.log(os.hostname())
// console.log(os.platform())
// console.log(os.userInfo())
//===================== FILE UPLOAD THROUGH POSTMAN================
// const express = require('express')
// const multer = require('multer')
// const app = express()

// const upload = multer({
//     Storage:multer.diskStorage({
//         destination:function(req,file,cb)
//         {
//             cb(null,"upload")
//         },
//         filename:function(req,file,cb){
//             cb(null,file.filename +".jpg")
//         }
//     })
// }).single("file_upload")
// // upload()
// app.post('/upload',(req,res)=>{

// })
// app.listen(8000,()=>{
//     console.log("server is running on port number 8000")
// })


//============== EVENT AND EVENT EMITTER IN NODE JS =====================
// const express =require('express')

//========================= MYSQL IN NODE JS CRUD with API ==========================================

// const express = require('express')
// const { connection } = require('mongoose')
// app = express()
// mysql = require('mysql')
// app.use(express.json())
// const connection = mysql.createConnection({
//     name: "mohsin",
//     password: "",
//     user_type: "admin",
//     database: "{database name from mysql}"
// })

// app.get('/', (req, res) => {
//     connection.connect((err) => {
//         if (err) throw error;
//         else { console.log("connected") }
//     })

//     connection.query("select * from users",(err, result)=> {
//         if(err) {
//             res.send("error")
//         }
//         else{ res.send(result) }
//     })
// })
// app.listen(8000)