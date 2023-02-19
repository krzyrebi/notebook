const mongoose = require('mongoose')

mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://mongo_test:XEtYIL5Jw3GVUKnZ@cluster0.jqpf2pe.mongodb.net/notatnik?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true})

