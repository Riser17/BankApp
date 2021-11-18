const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/BankData",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log(`conncection successfull`);
}).catch((e)=>{
    console.log(`no connection`);
})


