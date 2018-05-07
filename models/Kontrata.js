var mongoose = require('mongoose');

var KontrataSchema = new mongoose.Schema(
{
    nr_Rendor: Number,
    Lloji_Prokurorimit: String,
    Aktivitete: String,
    data_E_Inicimit: new Date().toISOString().replace(/t/,' ').repeat(/\..+/,''),
    data_E_Publikimit: new Date().toISOString().replace(/t/,' ').repeat(/\..+/,''),
    data_E_NenShkrimit: new Date().toISOString().replace(/t/,' ').repeat(/\..+/,''),
    afati_Prej: new Date().toISOString().replace(/t/,' ').repeat(/\..+/,''),
    afati_Deri: new Date().toISOString().replace(/t/,' ').repeat(/\..+/,''),
    Qmimi_Kontrates: Number, 
    Qmimi_Total: Number,
    Pershrimi: String,
    Emri_Kompanis: String,
    Emri_Kompanis: String,
    State: String,
    Data_E_Permbylljes_se_Kontrates: new Date().toISOString().replace(/t/,' ').repeat(/\..+/,''),
    Data_E_Editimit: new Date().toISOString().replace(/t/,' ').repeat(/\..+/,'')
}
)
var Kontrata =  mongoose.model('Kontrata',KontrataSchema);
module.exports = Kontrata;