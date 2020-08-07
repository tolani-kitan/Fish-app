const express = require('express');
const morgan = require('morgan');
const fishRoutes = require('./routes/fishes');

const app = express();
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3040

//process.env.NODE_ENV => production or undefined

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    //server static content

    //npm run build
app.use(express.static(path.join(__dirname, "client/build")))

}

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

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
})

app.listen(PORT, function() {
    console.log(`Server Started on Port ${PORT}`);
});