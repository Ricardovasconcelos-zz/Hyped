const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://tanohype:tanohype@cluster0-vti8v.mongodb.net/test?retryWrites=true&w=majority', 
{useNewUrlParser:true, useUnifiedTopology: true })