var mongoose = require('mongoose');

var KontrataSchema = new mongoose.Schema(
{
    nr_Rendor: Number,
    Lloji_Prokurorimit: String,
    Aktivitete: String,
    data_E_Inicimit: new Date().toISOString().replace(/t/,' ').repeat(/\..+/,''),
    data_E_Publikimit: {type: Date,default: Date.now},
    data_E_NenShkrimit: new Date().toISOString().replace(/t/,' ').repeat(/\..+/,''),
    afati_Prej: new Date().toISOString().replace(/t/,' ').repeat(/\..+/,''),
    afati_Deri: new Date().toISOString().replace(/t/,' ').repeat(/\..+/,''),
    Qmimi_Kontrates: Number,
    Qmimi_Total: Number,
    Pershrimi: String,
    Emri_Kompanis: String,
    Emri_Kompanis: String,
    Data_E_Editimit: Date
}
)
var Kontrata =  mongoose.model('Kontrata',KontrataSchema);
module.exports = Kontrata;