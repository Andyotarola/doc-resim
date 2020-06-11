const express = require("express"),
      app = express(),
      path = require("path");

// Setings

app.set("port", process.env.PORT || 8000);
app.set("views", path.join(__dirname, "views"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// statict-files
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use(require('./routes'));

// Listenig the server
app.listen(app.get('port'), ()=>{
   console.log(`Server on port ${app.get('port')}`);
})