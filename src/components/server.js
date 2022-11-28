var express = require('express')
var app = express();
const cors = require('cors');
var bodyparser = require('body-parser')
var urlencode = bodyparser.urlencoded({ extended: true })
var Notes = require('./mongo')
var mongoose = require('mongoose')

var uri = 'mongodb://localhost:27017/notes'
mongoose.connect(uri)

app.use(cors())
app.use(express.json());


app.post('/notes', urlencode, (req, res) => {
    let name = req.body.nam;
    console.log(name)

    var note = new Notes({
        name: name,
    })
    note.save()

    res.send('submitted')
})
app.get('/notes', (req, res) => {
    Food.find(function (err, response) {

        console.log(response)
        {
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write('<center>')
            res.write('<table>')

            response.forEach(value => {
                res.write('<tr>')

                res.write(`<td>${value.name}</td>`)


                res.write('</tr>')

            })
            res.write('<table>')
            res.write('</center>')
            res.end()
        }
    })


})

app.post('/get', urlencode, (req, res) => {

    Notes.find(function (err, response) {

        if (err) {
            return err
        }
        else {

            console.log(response)
            res.send(response)

        }
    })
})

app.post('/delete', function (req, res) {
    let name = req.body.name;

    Notes.deleteOne({ name: name }, (err, doc) => {
        if (err) return err;
        res.json(doc)

    })
})
app.post('/update', function (req, res) {
    let oldname=req.body.oldname;
    let newname=req.body.newname;

    console.log(oldname)
    console.log(newname)
    
    Notes.updateOne({ name:oldname }, { $set: { name: newname } }, (err, doc) => {
        if (err) return err;
        res.json(doc)

    })
})

app.listen(3001)
{
    console.log('server is running on 3001')
}