import React, { useEffect, useState } from "react"
import { FaRegStar, FaStar } from "react-icons/fa"
import Navbar from "../../components/HeaderLogin"
import Footer from "../../components/Footer"
import ppdokter from "./assets/gracia.jpg"
import sertifikat1 from "./assets/sertifikat1.png"
import sertifikat2 from "./assets/sertifikat2.png"
import ulasan1 from "./assets/ulasan1.png"
import ulasan2 from "./assets/ulasan2.png"
import ulasan3 from "./assets/ulasan3.png"
import ulasan4 from "./assets/ulasan4.png"
import ulasan5 from "./assets/ulasan5.png"
import ulasan6 from "./assets/ulasan6.png"
import { Link, useNavigate, useParams } from "react-router-dom"
import iconsesi from "./assets/sesi.svg"
import iconpesan from "./assets/pesan.svg"
import iconlokasi from "./assets/lokasi.svg"
import axios from "axios"

const DetailKonsultasi = () => {
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

    const [name, setname] = useState("")
    const [online, setonline] = useState("")
    const [offline, setoffline] = useState("")
    const [address, setaddress] = useState("")
    const [aboutme, setaboutme] = useState("")
    const [pengalamanprofesional, setpengalamanprofesional] = useState("")
    const [areafokus, setareafokus] = useState("")
    const [sertifikat, setsertifikat] = useState("")
    const [image, setimage] = useState("")

    const navigate = useNavigate()
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
            console.log("response data", response.data)
        } catch (error) {
            console.error("Error fetching doctors:", error)
        }
    }

    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState("")

    const toggleDropdown = (option) => {
        if (option === selectedOption) {
            setDropdownOpen(false)
            setSelectedOption("")
        } else {
            setDropdownOpen(true)
            setSelectedOption(option)
        }
    }

    const aboutMeList = aboutme.split(";").map((item, index) => (
        <p key={index} className="text-gray-700 mb-2">
            {item.trim()}
        </p>
    ))

    const sertiflist = sertifikat.split(";").map((item, index) => (
        <li key={index} className="text-gray-700 mb-2">
            {item.trim()}
        </li>
    ))
    const pengalamanprofesionallist = pengalamanprofesional.split(";").map((item, index) => (
        <p key={index} className="text-gray-700 mb-2">
            {item.trim()}
        </p>
    ))

    return (
        <div className="overflow-hidden">
            <Navbar />
            <div className="bg-gray-100 mt-16 min-h-screen p-4 md:p-8">
                <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
                    <div className="p-4 md:p-8 flex flex-col items-center">
                        <img src={image} alt="Gracia Stephanie" className="w-48 h-48 rounded-full object-cover mb-4" />
                        <h1 className="text-2xl font-bold my-4">{name}</h1>
                        <div className="text-gray-600 flex items-center space-x-2">
                            <span>
                                <img src={iconsesi} className="w-5 h-5"></img>
                            </span>
                            <span>{online ? "Online" : "" || offline ? "Offline" : ""} </span>
                            <span>
                                <img src={iconpesan} className="w-5 h-5"></img>
                            </span>
                            <span>Pesan</span>
                        </div>
                        <div className="text-gray-600 flex text-center">
                            <img src={iconlokasi} className="w-5 h-5 mr-2"></img>
                            {address}
                        </div>
                        <div className="relative mt-4">
                            <button
                                onClick={() => toggleDropdown("online")}
                                className="px-6 py-2 bg-[#1572A1] text-white rounded-md hover:bg-blue-500"
                            >
                                Pesan sekarang
                            </button>
                            {dropdownOpen && selectedOption === "online" && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                                    <Link
                                        to={`/PesanOnline/${dokter_id}`}
                                        className="block px-4 py-2 text-gray-800 hover:bg-neutral-200"
                                    >
                                        Pesan Online
                                    </Link>
                                    <Link
                                        to={`/PesanOffline/${dokter_id}`}
                                        className="block px-4 py-2 text-gray-800 hover:bg-neutral-200"
                                    >
                                        Pesan Offline
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="px-4 md:px-8 py-4 border-t">
                        <ul className="flex justify-center space-x-4 border-b pb-2">
                            <li className="border-b-2 border-blue-500 pb-2">Tentang saya</li>
                            <li className="cursor-pointer hover:border-b-2 hover:border-blue-500 pb-2">
                                Pengalaman Profesional
                            </li>
                            <li className="cursor-pointer hover:border-b-2 hover:border-blue-500 pb-2">Sertifikat</li>
                            <li className="cursor-pointer hover:border-b-2 hover:border-blue-500 pb-2">Ulasan</li>
                        </ul>
                        <div className="mt-4">
                            <h2 className="text-xl font-bold mb-2">Tentang saya</h2>
                            <p className="text-gray-700">{aboutMeList}</p>
                            {/* <ul className="list-disc pl-6 mt-4 text-gray-700">
                                <li>Pengalaman bertahun-tahun dalam bidang psikologi klinis</li>
                                <li>Spesialis dalam terapi kognitif-behavioral (CBT)</li>
                                <li>Terapi untuk anak-anak, remaja, dan dewasa</li>
                                <li>Konsultasi pernikahan dan keluarga</li>
                                <li>Pelatihan manajemen stres dan pengembangan diri</li>
                            </ul>
                            <div className="mt-4">
                                <p className="text-gray-700">
                                    Untuk konsultasi lebih lanjut, Anda dapat menghubungi saya melalui:
                                </p>
                                <p className="text-gray-700">Email: gracia.stephanie@example.com</p>
                                <p className="text-gray-700">Telepon: +62 123 4567 890</p>
                            </div> */}
                        </div>

                        <div className="mt-4">
                            <h2 className="text-xl font-bold mb-2">Pengalaman Profesional</h2>
                            <p className="text-gray-700">{pengalamanprofesionallist}</p>
                            {/* <ul className="list-disc pl-6 mt-4 text-gray-700">
                                <li>RSIA Mitra Medika Premiere, Medan Tembung</li>
                                <li>Klinik Sehat Sentosa, Jakarta</li>
                                <li>RS Hermina, Bekasi</li>
                            </ul> */}
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
                            <div className="mt-4">
                                <h3 className="text-lg font-bold mb-2">Area Fokus</h3>
                                {/* <h3 className="text-md font-bold mb-2">Kesehatan Mental</h3>
                                <p className="text-gray-700 mb-4">
                                    Membantu pasien mengatasi masalah kesehatan mental seperti depresi, kecemasan, dan
                                    stres.
                                </p>
                                <h3 className="text-md font-bold mb-2">Psikologi Anak</h3>
                                <p className="text-gray-700 mb-4">
                                    Spesialis dalam terapi untuk anak-anak dan remaja, termasuk masalah perkembangan dan
                                    perilaku.
                                </p>
                                <h3 className="text-md font-bold mb-2">Konseling Keluarga</h3>
                                <p className="text-gray-700 mb-4">
                                    Memberikan konseling dan dukungan untuk keluarga dalam mengatasi konflik dan
                                    meningkatkan komunikasi.
                                </p> */}
                                <p>{areafokus}</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h2 className="text-xl font-bold mb-2">Sertifikat</h2>
                            <ul className="list-disc pl-6 mt-4 text-gray-700">
                                <li>{sertiflist}</li>
                            </ul>
                            <div className="flex justify-center mt-4">
                                <img src={sertifikat1} alt="Sertifikat 1" className="w-1/2 h-auto mr-2" />
                                <img src={sertifikat2} alt="Sertifikat 2" className="w-1/2 h-auto ml-2" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <h2 className="text-xl font-bold mb-2">Ulasan</h2>
                            <div className="flex items-center mt-2">
                                <p className="text-gray-700 mt-2">
                                    Kutipan ini hanya mewakili sedikit dari sekian banyak ulasan positif yang kami
                                    terima untuk Gracia Stephanie, S.Psi,. M.Psi . Kami tidak membayar siapa pun untuk
                                    memberikan ulasannya dan semuanya dibuat secara sukarela. Pengalaman beberapa orang
                                    menerima terapi dengan BetterHelp mungkin berbeda.
                                </p>
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-4">
                                <img src={ulasan1} alt="Ulasan 1" className="ps-24" />
                                <img src={ulasan2} alt="Ulasan 2" className="pe-4" />
                                <img src={ulasan3} alt="Ulasan 3" className="ps-24" />
                                <img src={ulasan4} alt="Ulasan 4" className="pe-4" />
                                <img src={ulasan5} alt="Ulasan 5" className="ps-24" />
                                <img src={ulasan6} alt="Ulasan 6" className="pe-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DetailKonsultasi
