const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
});
  
const upload = multer({ storage: storage }); 

app.post("/create", upload.single("file"), (req, res)=>{  
  console.log(req.body);
  res.send(req.body);
});


app.listen(5000, ()=>{
  console.log("start server");
});

