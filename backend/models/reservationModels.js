import mongoose from 'mongoose'

const reservationSchema = new mongoose.Schema({
    nama: {type: String, require: true},
    nim: {type: Number, require: true},
    fakultas: {type: String, require: true},
    sakit: {type: String, require: true},
    jenissakit: {type: String, require: true},
    obat: {type: String, require: true},
    kontak: {type: String, require: true},
    darurat: {type: String, require: true},
    time: {type: String, require: true},
})

export default mongoose.model("Reservation", reservationSchema)