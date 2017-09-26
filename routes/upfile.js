var fileUpload = require('express-fileupload');
var express = require('express');
var router = express.Router();


router.use(fileUpload());

router.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
  let sampleFile = req.files.sampleFile;
  var datetime = new Date();
  var strName = datetime.toString();
  var newName = strName.replace(/\s/g, '').replace("+","_").replace(":","_").replace(":","_").replace("(","").replace(")","");

 
  // Use the mv() method to place the file somewhere on your server 
  sampleFile.mv(`./src/assets/excelFiles/${ newName }_rfid_nodevh_${ sampleFile.name }`, function(err) {
    if (err)
      return res.status(500).send(err);
    // res.send('File uploaded!');
    res.redirect('/');
    
  });
});

// var formatName = (name) => {
//     name
// }

module.exports = router;