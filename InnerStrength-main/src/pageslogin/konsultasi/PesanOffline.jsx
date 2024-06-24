import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../../components/HeaderLogin"
import Footer from "../../components/Footer"
import gracia from "./assets/gracia.jpg"
import { FaDollarSign, FaMapMarkerAlt, FaUserFriends, FaRegThumbsUp, FaBriefcase } from "react-icons/fa"
import iconharga from "./assets/harga.svg"
import iconlokasi from "./assets/lokasi.svg"
import iconsesi from "./assets/sesi.svg"
import iconbasic from "./assets/basic.svg"
import iconlike from "./assets/like.svg"
import iconpengalaman from "./assets/pengalaman.svg"
import axios from "axios"
import { format } from "date-fns"

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

    // const [showOptions, setShowOptions] = useState(false) // State untuk mengontrol visibilitas pilihan
    const [selectedOption, setSelectedOption] = useState(null) // State untuk menyimpan pilihan radio
    const navigate = useNavigate()
    const [showOptions, setShowOptions] = useState(false) // State untuk mengontrol visibilitas pilihan
    const [selectedDate, setSelectedDate] = useState(null) // State untuk menyimpan tanggal yang dipilih
    const [selectedTime, setSelectedTime] = useState("") // State untuk menyimpan waktu yang dipilih

    const toggleOptions = () => {
        setShowOptions(!showOptions) // Fungsi untuk mengubah state showOptions
        console.log(!showOptions)
    }
    const handleDateSelect = (date) => {
        // Find the selected date object from datajadwal based on date
        const selected = datajadwal.find((item) => item.tanggal === date)
        setSelectedDate(selected) // Set selectedDate to the found object
    }

    const handleTimeSelect = (time) => {
        setSelectedTime(time) // Fungsi untuk mengubah state selectedTime
        console.log(time)
    }
    const handlePaymentSuccess = async () => {
        const idlogin = localStorage.getItem("iduserlogin")
        if (!selectedDate || !selectedTime) {
            alert("Silakan pilih tanggal dan waktu kunjungan!")
            return
        }

        const formattedDate = format(new Date(selectedDate.tanggal), "yyyy-MM-dd")
        const formattedDateTime = `${formattedDate} ${selectedTime}`
        const formData = new FormData()
        formData.append("patient_name", mename)
        formData.append("phone_number", phone)
        formData.append("registration_date", formattedDateTime)
        formData.append("paket", "Basic")
        formData.append("complaints", "Kecemasan")
        formData.append("notes", "Sering merasa cemas")
        formData.append("type", "Offline")
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
    // const toggleOptions = () => {
    //     setShowOptions(!showOptions) // Fungsi untuk mengubah state showOptions
    // }

    const handleOptionChange = (value) => {
        setSelectedOption(value) // Fungsi untuk mengubah state selectedOption
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
    const newprice = parseInt(price)
    const layanan = parseInt(newprice * 0.3 + newprice)
    const pajakbayar = parseInt(newprice * 0.05 + newprice)
    const totalkabeh = parseInt(newprice + layanan + pajakbayar)

    const [mename, setmename] = useState("")
    const [phone, setphone] = useState("")

    const [datajadwal, setdatajadwal] = useState("")

    useEffect(() => {
        fetprofile()
        fetjadwal()
    }, [])

    const fetjadwal = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/jadwal/${dokter_id}`, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            const formattedData = formatData(response.data)

            console.log("data format data", formattedData)
            setdatajadwal(formattedData)
        } catch (error) {
            console.error("Error fetching jadwal:", error)
        }
    }

    const formatData = (data) => {
        // Inisialisasi objek untuk mengelompokkan data berdasarkan tanggal
        const groupedByDate = {}

        // Mengelompokkan data berdasarkan tanggal
        data.forEach((item) => {
            const date = format(new Date(item.tanggal), "dd/MM/yyyy")
            if (!groupedByDate[date]) {
                groupedByDate[date] = {
                    tanggal: item.tanggal,
                    sesi: {}
                }
            }
            // Menyimpan waktu dan sesi di dalam kelompok tanggal yang sesuai
            if (!groupedByDate[date].sesi[item.sesi]) {
                groupedByDate[date].sesi[item.sesi] = []
            }
            groupedByDate[date].sesi[item.sesi].push(item.waktu)
        })

        // Mengubah objek menjadi array untuk ditampilkan di UI
        const formattedArray = Object.keys(groupedByDate).map((date) => ({
            tanggal: date,
            sesi: groupedByDate[date].sesi
        }))

        console.log("data jadwal", formattedArray)

        return formattedArray
    }

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

    return (
        <div className="overflow-hidden">
            <Navbar />
            <div>
                {/* <h1 className='font-bold text-center pt-6'>Buat Janji</h1> */}
                <div className="bg-gray-100 mt-16 min-h-screen rounded-lg p-4 md:p-8">
                    <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                        <h1 className="font-bold mt-5 text-center text-3xl pt-5">Pembayaran</h1>
                        <div className="p-4 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                                        <p>{offline ? "Offline" : ""}</p>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <img src={iconlike} className="w-5 h-5 mr-2"></img>
                                        <p>{likes}%</p>
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
                                {/* Kolom 2 */}
                                <div className="p-4 border border-gray-200 rounded-lg">
                                    <h2 className="text-xl mb-4">Pilih tanggal dan waktu kunjungan</h2>
                                    <div className="flex mt-4">
                                        {Array.isArray(datajadwal) && datajadwal.length > 0 ? (
                                            datajadwal.map((card, index) => (
                                                <button
                                                    key={index}
                                                    className="px-4 py-2 bg-[#1572A1] text-white rounded-md mb-2 mr-2 hover:bg-blue-500"
                                                    onClick={() => {
                                                        toggleOptions()
                                                        handleDateSelect(card.tanggal)
                                                    }}
                                                >
                                                    {card.tanggal}
                                                </button>
                                            ))
                                        ) : (
                                            <p>No data available</p>
                                        )}
                                    </div>
                                    {/* Menampilkan waktu sesuai dengan tanggal yang dipilih */}
                                    {showOptions && selectedDate && (
                                        <div className="mt-4">
                                            <p className="text-gray-600 mt-2">Sesi: {Object.keys(selectedDate.sesi)}</p>
                                            {Object.values(selectedDate.sesi).map((times, sessionIndex) => (
                                                <div key={sessionIndex}>
                                                    {times.map((time, timeIndex) => (
                                                        <button
                                                            key={timeIndex}
                                                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mb-2 mr-2"
                                                            onClick={() => handleTimeSelect(time)}
                                                        >
                                                            {time}
                                                        </button>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Kolom 3 */}
                                <div className="p-4 border border-gray-200 rounded-lg">
                                    <h2 className="text-xl mb-4">Pembayaran</h2>
                                    <div className="flex flex-col space-y-4">
                                        <h2>Metode Pembayaran</h2>
                                        <div className="flex items-center">
                                            <input
                                                type="radio"
                                                id="BCA"
                                                name="payment"
                                                value="BCA"
                                                checked={selectedOption === "BCA"}
                                                onChange={() => handleOptionChange("BCA")}
                                            />
                                            <label htmlFor="BCA" className="ml-2 cursor-pointer">
                                                BCA
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                type="radio"
                                                id="DANA"
                                                name="payment"
                                                value="DANA"
                                                checked={selectedOption === "DANA"}
                                                onChange={() => handleOptionChange("DANA")}
                                            />
                                            <label htmlFor="DANA" className="ml-2 cursor-pointer">
                                                DANA
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                type="radio"
                                                id="BNI"
                                                name="payment"
                                                value="BNI"
                                                checked={selectedOption === "BNI"}
                                                onChange={() => handleOptionChange("BNI")}
                                            />
                                            <label htmlFor="BNI" className="ml-2 cursor-pointer">
                                                BNI
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                type="radio"
                                                id="Mandiri"
                                                name="payment"
                                                value="Mandiri"
                                                checked={selectedOption === "Mandiri"}
                                                onChange={() => handleOptionChange("Mandiri")}
                                            />
                                            <label htmlFor="Mandiri" className="ml-2 cursor-pointer">
                                                Mandiri
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                type="radio"
                                                id="BRI"
                                                name="payment"
                                                value="BRI"
                                                checked={selectedOption === "BRI"}
                                                onChange={() => handleOptionChange("BRI")}
                                            />
                                            <label htmlFor="BRI" className="ml-2 cursor-pointer">
                                                BRI
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p>Biaya Konsultasi : Rp {price}</p>
                                        <p>Biaya Layanan : Rp {layanan}</p>
                                        <p>Pajak : Rp {pajakbayar}</p>
                                        <p>Pembayaranmu : Rp {totalkabeh}</p>
                                        <p className="text-gray-600">Dipilih: {selectedOption}</p>
                                    </div>
                                    <button
                                        onClick={handlePaymentSuccess}
                                        className="mt-4 bg-[#1572A1] text-white py-2 px-4 rounded hover:bg-blue-500"
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
