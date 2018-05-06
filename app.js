const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const mongoose = require('mongoose');
const DB_URI = "mongodb://localhost:27017/projekti"
const bodyParser = require('body-parser');
var Kontrata = require('./models/Kontrata')
const router = express.Router();
const ObjectId = mongoose.Types.ObjectId;


app.set('views', path.join(__dirname,'view'));
app.set('view engine', 'ejs');



app.use(express.static(path.join(__dirname,'/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongoose.connect(DB_URI);





app.post('/add',(req,res) =>{
   var KontrataERe = Kontrata({
    nr_Rendor: req.body.nrRendor,
    Lloji_Prokurorimit: req.body.LlojiIProkurorimit,
    Aktivitete: req.body.Aktivitetet,
    data_E_Inicimit:req.body.DataEInicimit,
    data_E_NenShkrimit:req.body.DataENenshkrimit,
    afati_Prej: req.body.AfatiPrej,
    afati_Deri:req.body.AfatiDeri,
    Qmimi_Kontrates:req.body.QmimiIKontrates,
    Qmimi_Total: req.body.QmimiIPaguar,
    Pershrimi: req.body.Pershkrimi,
    Emri_Kompanis:req.body.EmriIKontrates,
    });
    KontrataERe.save(err => {
        if (err) {
            console.log(err);
        }
        res.redirect('/');
        console.log(KontrataERe);
    });
})
app.get('/shto',(req,res) => {
    res.render('post');
})
app.get('/',(req,res) => {

    Kontrata.find({}).exec((err,docs) => {
     if (err) {
         console.log(err);
     }
     res.render('show', {docs:docs});
    }); 
 });
 app.get('/showOne/:id',(req,res) => {
     Kontrata.findOne({_id: ObjectId(req.params.id)},(err,docs) => {
            if(err) {console.log(err);}
        res.render('ShowOne',{docs:docs});
     });
 });



 //Vazhdo edit side  edhe show a single one
 app.get('/edito/:id', (req,res) => {

   
     Kontrata.findById({_id: ObjectId (req.params.id)}, (err,docs) => {
         if (err) {
             console.log(err);
         }

         console.log(docs);
         res.render('edit', {docs:docs});
     })
 })

        app.post('/editume/:id',(req,res) => {
            Kontrata.updateOne({_id: ObjectId(req.params.id)}, 
        {$set: {
            nr_Rendor: req.body.nrRendor,
            Lloji_Prokurorimit: req.body.LlojiIProkurorimit,
            Aktivitete: req.body.Aktivitetet,
            data_E_Inicimit:req.body.DataEInicimit,
            data_E_NenShkrimit:req.body.DataENenshkrimit,
            afati_Prej: req.body.AfatiPrej,
            afati_Deri:req.body.AfatiDeri,
            Qmimi_Kontrates:req.body.QmimiIKontrates,
            Qmimi_Total: req.body.QmimiIPaguar,
            Pershrimi: req.body.Pershkrimi,
            Emri_Kompanis:req.body.EmriIKontrates,
            Data_E_Editimit: Date.now}},
            (err,docs) => {
                if (err) {
                        console.log(err);
                }
                res.redirect('/');
            }
    )
              
        })





app.get('/delete/:id', (req,res) => {
  
    Kontrata.remove({_id: ObjectId(req.params.id)}, err => {
        if (err) {
            console.log(err);
        }
        console.log(req.params.id)
        res.redirect('/');
    })
})
app.listen(3000,'localhost',(err) => {
    if(err) {
        console.log(err);
    }
    else{
        console.log("Server is connected " + DB_URI);
        
    }
})