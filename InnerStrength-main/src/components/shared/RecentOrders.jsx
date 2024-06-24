import axios from "axios"
import React, { useEffect, useState } from "react"
import { HiOutlineChat, HiOutlinePencilAlt } from "react-icons/hi"
import { useNavigate } from "react-router-dom"

const recentOrderData = [
    {
        id: "1",
        product_id: "12345678",
        customer_name: "Putri Helena",
        customer_diagnosis: "Anxiety",
        order_paket: "Basic",
        order_status: "Sedang Berlangsung",
        order_aksi: "PLACED"
    },
    {
        id: "2",
        product_id: "12345678",
        customer_name: "Putri Helena",
        customer_diagnosis: "Anxiety",
        order_paket: "Basic",
        order_status: "Sedang Berlangsung",
        order_aksi: "CONFIRMED"
    },
    {
        id: "3",
        product_id: "12345678",
        customer_name: "Putri Helena",
        customer_diagnosis: "Anxiety",
        order_paket: "Basic",
        order_status: "Sedang Berlangsung",
        order_aksi: "SHIPPED"
    },
    {
        id: "4",
        product_id: "12345678",
        customer_name: "Putri Helena",
        customer_diagnosis: "Anxiety",
        order_paket: "Basic",
        order_status: "Sedang Berlangsung",
        order_aksi: "SHIPPED"
    },
    {
        id: "5",
        product_id: "12345678",
        customer_name: "Putri Helena",
        customer_diagnosis: "Anxiety",
        order_paket: "Basic",
        order_status: "Sedang Berlangsung",
        order_aksi: "OUT_FOR_DELIVERY"
    },
    {
        id: "6",
        product_id: "12345678",
        customer_name: "Putri Helena",
        customer_diagnosis: "Anxiety",
        order_paket: "Basic",
        order_status: "Sedang Berlangsung",
        order_aksi: "DELIVERED"
    }
]

function RecentOrders() {
    const [data, setdata] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        fetprofile()
    }, [])

    const fetprofile = async () => {
        const token = localStorage.getItem("iddoctor")
        try {
            const response = await axios.get(`http://localhost:3001/appointmentsallsdoctor/${token}`, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            setdata(response.data)
            console.log(response.data)
        } catch (error) {
            console.error("Error fetching profile:", error)
        }
    }

    let no = 1

    return (
        <div className="bg-white px-4 pt-4 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-400 font-medium px-8">Janji temu hari ini</strong>
            <div className="mt-4 mb-4">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-b-gary-700">
                            <td>No</td>
                            <td>No Rekam Medis</td>
                            <td>Nama Pasien</td>
                            <td>Diagnosis</td>
                            <td>Paket</td>
                            <td>Status</td>
                            {/* <td>Aksi</td> */}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((order) => (
                            <tr key={order.id}>
                                <td>{no++}</td>
                                <td>{order.medical_record_no}</td>
                                <td>{order.patient_name}</td>
                                <td>{order.complaints}</td>
                                <td>{order.paket}</td>
                                <td className="text-blue-600">{order.status}</td>
                                {/* <td className="p-2 flex justify-center space-x-2">
                                    <HiOutlineChat className="w-6 h-6 text-blue-500 cursor-pointer" />
                                    <HiOutlinePencilAlt className="w-6 h-6 text-yellow-500 cursor-pointer" />
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecentOrders
