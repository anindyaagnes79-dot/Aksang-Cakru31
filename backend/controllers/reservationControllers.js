import reservationModels from "../models/reservationModels.js";

const createReservation = async (req, res) => {
    try {
        const {nama, nim, fakultas, kontak, time, sakit, jenissakit, obat, darurat} = req.body;
        if (!nama || !nim || !fakultas || !kontak || !time || !sakit || !jenissakit || !obat || !darurat){
            return res.json({success: false, message: "All field require response"})
        }

        const newReservation = new reservationModels({nama, nim, fakultas, kontak, time, sakit, jenissakit, obat, darurat})
        await newReservation.save()
        return res.status(201).json({
            success: true,
            message: "Reservation created",
            reservationId: newReservation._id,
        });
    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }
}

const getAllReservation = async (req, res) => {
    try {
        const reservations = await reservationModels.find()
        res.json(reservations)
    } catch (error) {
        res.json({message: "Error fetching reservation"})
    }
}

const deleteReservation = async (req, res) => {
    try {
        const {id} = req.params;
        await reservationModels.findByIdAndDelete(id)
        res.json({message: "Reservation removed"})
    } catch (error) {
        res.json({error: "Error deleting reservations"})
    }
}

export {createReservation, getAllReservation, deleteReservation}