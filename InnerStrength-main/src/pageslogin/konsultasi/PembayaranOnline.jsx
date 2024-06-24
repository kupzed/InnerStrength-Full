import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../../components/HeaderLogin"
import Footer from "../../components/Footer"
import gracia from "./assets/gracia.jpg"
// import { FaDollarSign, FaMapMarkerAlt, FaUserFriends, FaRegThumbsUp, FaBriefcase } from 'react-icons/fa';
import iconharga from "./assets/harga.svg"
import iconlokasi from "./assets/lokasi.svg"
import iconsesi from "./assets/sesi.svg"
import iconbasic from "./assets/basic.svg"
import iconlike from "./assets/like.svg"
import iconpengalaman from "./assets/pengalaman.svg"
import axios from "axios"

const PesanOffline = () => {
    const ListTerapis = [
        {
            name: "Gracia Stephanie, S.Psi, M.Psi",
            price: "Rp. 100.000",
            location: "Komplek Cindirela, Medan Amplas",
            mode: "Online/Offline",
            like: "70 Orang menyukai",
            experience: "6 Tahun pengalaman",
            expertise: ["Anxiety", "Bipolar", "Depresi", "Hubungan dan keluarga"],
            description:
                "Seorang psikolog berpengalaman dengan 6 tahun dedikasi dalam membantu individu dan keluarga mengatasi berbagai permasalahan psikologis, seperti kecemasan, bipolar, hubung..."
        }
    ]

    const [showOptions, setShowOptions] = useState(false) // State untuk mengontrol visibilitas pilihan
    const [selectedOption, setSelectedOption] = useState(null) // State untuk menyimpan pilihan radio
    const navigate = useNavigate()

    const toggleOptions = () => {
        setShowOptions(!showOptions) // Fungsi untuk mengubah state showOptions
    }

    const handleOptionChange = (value) => {
        setSelectedOption(value) // Fungsi untuk mengubah state selectedOption
    }

    const handlePaymentSuccess = () => {
        alert("Pembayaran berhasil!")
        navigate("/")
    }

    const [name, setname] = useState("")
    const [online, setonline] = useState("")
    const [offline, setoffline] = useState("")
    const [address, setaddress] = useState("")
    const [aboutme, setaboutme] = useState("")
    const [pengalamanprofesional, setpengalamanprofesional] = useState("")
    const [areafokus, setareafokus] = useState("")
    const [sertifikat, setsertifikat] = useState("")
    const [image, setimage] = useState("")
    const [price, setprice] = useState("")
    const [likes, setlikes] = useState("")
    const [pengalaman, setpengalaman] = useState("")

    const { dokter_id } = useParams()
    useEffect(() => {
        fetchDoctors()
    }, [])

    const fetchDoctors = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/doctors/${dokter_id}`)
            // Assuming the response data structure has a field `url` which is an array of image URLs
            const data = response.data
            setname(data.name)
            setonline(data.online)
            setoffline(data.offline)
            setaddress(data.address)
            setaboutme(data.about_me)
            setpengalamanprofesional(data.professional_experience)
            setareafokus(data.focus_area)
            setsertifikat(data.certificate_title)
            setimage(data.url)
            setprice(data.price)
            setlikes(data.likes_count)
            setpengalaman(data.experience)
            console.log("response data", response.data)
        } catch (error) {
            console.error("Error fetching doctors:", error)
        }
    }

    const handleMetodePembayaranClick = () => {
        navigate("/MetodePembayaran") // Navigasi ke halaman baru untuk menampilkan detail metode pembayaran
    }

    const newprice = parseInt(price)
    const layanan = parseInt(newprice * 0.3 + newprice)
    const pajakbayar = parseInt(newprice * 0.05 + newprice)
    const totalkabeh = parseInt(newprice + layanan + pajakbayar)

    const [mename, setmename] = useState("")
    const [phone, setphone] = useState("")

    useEffect(() => {
        fetprofile()
    }, [])

    const fetprofile = async () => {
        const token = localStorage.getItem("refresh_token")
        try {
            const response = await axios.get(`http://localhost:3001/me`, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            })
            setmename(response.data.full_name)
            setphone(response.data.phone_number)
        } catch (error) {
            console.error("Error fetching profile:", error)
        }
    }

    const save = async () => {
        const idlogin = localStorage.getItem("iduserlogin")

        const formData = new FormData()
        formData.append("patient_name", mename)
        formData.append("phone_number", phone)
        formData.append("registration_date", new Date().toISOString())
        formData.append("paket", "Basic")
        formData.append("complaints", "Kecemasan")
        formData.append("notes", "Sering merasa cemas")
        formData.append("type", "Online")
        formData.append("user_id", idlogin)
        formData.append("doctor_id", dokter_id)
        try {
            await axios.post(`http://localhost:3001/appointments`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            navigate("/LandingpageLogin")
        } catch (error) {
            console.error("Error fetching profile:", error)
        }
    }

    return (
        <div className="overflow-hidden">
            <Navbar />
            <div>
                {/* <h1 className='font-bold mt-24 text-center pt-6'>Buat Janji</h1> */}
                <div className="bg-gray-100 mt-16 min-h-screen rounded-lg p-4 md:p-8">
                    <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                        <h1 className="font-bold mt-5 text-center text-3xl pt-5">Pembayaran</h1>
                        <div className="p-4 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Kolom 1 */}
                                <div className="p-4 border border-gray-200 rounded-lg">
                                    <img src={image} alt="Sertifikat 1" className="w-full h-auto rounded-lg" />
                                    <h2 className="text-xl mt-4">{name}</h2>
                                    <div className="flex items-center mt-2">
                                        <img src={iconharga} className="w-5 h-5 mr-2"></img>
                                        <p>Rp. {price}</p>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <img src={iconlokasi} className="w-5 h-5 mr-2"></img>
                                        <p>{address}</p>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <img src={iconbasic} className="w-5 h-5 mr-2"></img>
                                        <p>Basic</p>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <img src={iconsesi} className="w-5 h-5 mr-2"></img>
                                        <p>{online ? "Online" : ""}</p>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <img src={iconlike} className="w-5 h-5 mr-2"></img>
                                        <p>{likes} %</p>
                                        <img src={iconpengalaman} className="w-5 h-5 ml-4 mr-2"></img>
                                        <p className="ml-1">{pengalaman} Tahun Pengalaman</p>
                                    </div>
                                    {ListTerapis.map((terapis, index) => (
                                        <div className="mt-2 space-y-1">
                                            {terapis.expertise.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    ))}
                                    <p className="text-gray-600 mt-2">{aboutme}</p>
                                </div>
                                {/* Kolom 3 */}
                                <div className="p-4 border border-gray-200 rounded-lg">
                                    <h2 className="text-xl mb-4">Ringkasan Pesanan</h2>
                                    <div className="flex flex-col space-y-4">
                                        <h2>Metode Pembayaran</h2>
                                        <button
                                            onClick={handleMetodePembayaranClick}
                                            className="mt-4 w-full bg-[#1572A1] text-white py-2 px-4 rounded hover:bg-blue-500"
                                        >
                                            Tambah Metode Pembayaran
                                        </button>
                                    </div>
                                    <div className="mt-4">
                                        <p>Biaya Konsultasi : Rp {price}</p>
                                        <p>Biaya Layanan : Rp {layanan}</p>
                                        <p>Pajak : Rp {pajakbayar}</p>
                                        <p>Pembayaranmu : Rp {totalkabeh}</p>
                                    </div>
                                    <button
                                        onClick={save}
                                        className="mt-4 w-full bg-[#1572A1] text-white py-2 px-4 rounded hover:bg-blue-500"
                                    >
                                        Bayar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PesanOffline
