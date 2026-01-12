import React, {useEffect, useState} from 'react'
import { backendUrl } from '../App'

const AdminTable = () => {
 const [reservations, setReservations] = useState([])

 const handleDelete = async (id) => {
    try {
        await axios.delete(`${backendUrl}/api/reservation/delete/${id}`)
        toast.success('Reservation removed')
    } catch (error) {
        console.log("Error deleting reservations");
    }
 }

 useEffect(()=> {

    const fetchReservations = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/reservation/get')
            setReservations(response.data)
            console.log(response.data);

        } catch (error) {
            console.log("Error fetching reservations");

        }
    }
    
    fetchReservations()
 }, [])
  return (
    <div>
        <h2>Reservation</h2>

        <div className='overflow-x-auto'>
            <table className='w-full shadow-lg rounded-xl'>
                <thead>
                    <tr className='bg-blue-500 text-left'>
                        <th className='p-3'>Nama</th>
                        <th className='p-3'>NIM</th>
                        <th className='p-3'>Fakultas</th>
                        <th className='p-3'>Kontak</th>
                        <th className='p-3'>Waktu</th>
                        <th className='p-3'>Status</th>
                        <th className='p-3'>Keterangan</th>
                        <th className='p-3'>Obat</th>
                        <th className='p-3'>Kontak Darurat</th>
                        <th className='p-3'>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        reservations.length === 0 ? (
                            <tr>
                                <td colSpan="10" className='p-4 text-center'>No reservations found</td>
                            </tr>
                        ) : (
                            reservations.map((res, index) => (
                                <tr key ={index} className='border-b hover:bg-gray-50'>
                                    <td className='p-3'>{res.nama}</td>
                                    <td className='p-3'>{res.nim}</td>
                                    <td className='p-3'>{res.fakultas}</td>
                                    <td className='p-3'>{res.kontak}</td>
                                    <td className='p-3'>{res.time}</td>
                                    <td className='p-3'>{res.sakit}</td>
                                    <td className='p-3'>{res.jenissakit}</td>
                                    <td className='p-3'>{res.obat}</td>
                                    <td className='p-3'>{res.darurat}</td>
                                    <td>
                                        <button onClick={handleDelete(res._id)} className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default AdminTable
