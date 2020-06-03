const express = require('express');
const morgan = require('morgan');
const fishRoutes = require('./routes/fishes');

const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(cors());
app.use(morgan('tiny'));
app.use('/fishes', fishRoutes);

app.use(function(req, res, next) {
    const error = new Error();
    error.status = 404;
    next(error)
})

if(app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            message: err.message,
            error: err
        });
    });
}

app.listen(3040, function() {
    console.log("Server Started!");
});