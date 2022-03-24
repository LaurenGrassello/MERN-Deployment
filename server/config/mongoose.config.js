const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/authors_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('Established connection to the database'))
.catch(()=> console.log('Error with connection to the database', err))