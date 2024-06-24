import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import iconharga from "./assets/harga.svg"
import iconlokasi from "./assets/lokasi.svg"
import iconsesi from "./assets/sesi.svg"
import iconlike from "./assets/like.svg"
import iconpengalaman from "./assets/pengalaman.svg"
import axios from "axios"

const ListTerapis = () => {
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [sortOption, setSortOption] = useState("Rekomendasi")
    const [filters, setFilters] = useState({
        experience: null,
        priceRange: null,
        sessionType: null
    })

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
    }

    const handleSort = (option) => {
        setSortOption(option)
        setActiveDropdown(null)
    }

    const handleFilter = (type, value) => {
        setFilters({ ...filters, [type]: value })
        setActiveDropdown(null)
    }

    const optionsSort = ["Harga Tertinggi", "Harga Terendah", "Rekomendasi"]
    const optionsFilter = {
        experience: ["Di atas 5 tahun"],
        priceRange: ["Kurang dari 50 ribu", "50 sampai 100 ribu", "Lebih dari 100 ribu"],
        sessionType: ["Online", "Offline", "online/offline"]
    }

    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchDoctors()
    }, [])

    const fetchDoctors = async () => {
        try {
            const response = await axios.get("http://localhost:3001/doctors")
            setData(response.data)
            console.log("response data", response.data)
        } catch (error) {
            console.error("Error fetching doctors:", error)
        }
    }

    const filteredTerapis =
        data?.filter((terapis) => {
            if (filters.experience && terapis.experience <= 5) {
                return false
            }
            if (filters.priceRange === "Kurang dari 50 ribu" && terapis.price >= 50000) {
                return false
            }
            if (filters.priceRange === "50 sampai 100 ribu" && (terapis.price < 50000 || terapis.price > 100000)) {
                return false
            }
            if (filters.priceRange === "Lebih dari 100 ribu" && terapis.price <= 100000) {
                return false
            }
            if (filters.sessionType === "Online" && !terapis.online) {
                return false
            }
            if (filters.sessionType === "Offline" && !terapis.offline) {
                return false
            }
            if (filters.sessionType === "online/offline" && (!terapis.online || !terapis.offline)) {
                return false
            }
            return true
        }) || []

    const sortedTerapis = filteredTerapis.sort((a, b) => {
        if (sortOption === "Harga Tertinggi") {
            return b.price - a.price
        } else if (sortOption === "Harga Terendah") {
            return a.price - b.price
        } else {
            return b.like - a.like // Default to "Rekomendasi" based on likes
        }
    })

    return (
        <div>
            {/* Filter */}
            <section className="container mx-auto py-8">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex flex-wrap justify-between items-center space-x-4 relative">
                        {["Urutkan Berdasarkan", "Rentang Harga", "Jenis", "Terapis"].map((buttonText, index) => (
                            <div key={index} className="relative">
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                                    onClick={() => toggleDropdown(buttonText)}
                                >
                                    {buttonText}
                                </button>
                                {activeDropdown === buttonText && (
                                    <div className="absolute top-full mt-2 bg-white border rounded shadow-lg w-40 z-10">
                                        {buttonText === "Urutkan Berdasarkan" &&
                                            optionsSort.map((option, i) => (
                                                <button
                                                    key={i}
                                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                                    onClick={() => handleSort(option)}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        {buttonText === "Rentang Harga" &&
                                            optionsFilter.priceRange.map((option, i) => (
                                                <button
                                                    key={i}
                                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                                    onClick={() => handleFilter("priceRange", option)}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        {buttonText === "Jenis" &&
                                            optionsFilter.sessionType.map((option, i) => (
                                                <button
                                                    key={i}
                                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                                    onClick={() => handleFilter("sessionType", option)}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        {buttonText === "Terapis" &&
                                            optionsFilter.experience.map((option, i) => (
                                                <button
                                                    key={i}
                                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                                    onClick={() => handleFilter("experience", option)}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Terapis List */}
            <section className="container mx-auto px-8 py-8">
                {sortedTerapis.length > 0 ? (
                    sortedTerapis.map((terapis, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
                            <div className="flex flex-col md:flex-row">
                                <img
                                    src={terapis.url}
                                    alt={terapis.name}
                                    className="w-full md:w-48 h-48 mt-8 object-cover rounded-md"
                                />
                                <div className="mt-4 md:mt-0 md:ml-4">
                                    <h3 className="text-lg font-semibold">{terapis.name}</h3>
                                    <div className="inline-flex justify-normal items-center">
                                        <img src={iconharga} className="w-5 h-5 mr-2"></img>
                                        <p className="text-gray-600">Rp. {terapis.price}</p>
                                    </div>{" "}
                                    <br />
                                    <div className="inline-flex justify-normal items-center">
                                        <img src={iconlokasi} className="w-5 h-5 mr-2"></img>
                                        <p className="text-gray-600">{terapis.address}</p>
                                    </div>{" "}
                                    <br />
                                    <div className="inline-flex justify-normal items-center">
                                        <img src={iconsesi} className="w-5 h-5 mr-2"></img>
                                        <p className="text-gray-600">
                                            {terapis.offline && terapis.online
                                                ? "Offline/Online"
                                                : terapis.offline
                                                ? "Offline"
                                                : "Online"}
                                        </p>
                                    </div>{" "}
                                    <br />
                                    <div className="inline-flex justify-normal items-center">
                                        <img src={iconlike} className="w-5 h-5 mr-2"></img>
                                        <p className="text-gray-600">{terapis.like} Orang menyukai</p>
                                    </div>{" "}
                                    <br />
                                    <div className="inline-flex justify-normal items-center">
                                        <img src={iconpengalaman} className="w-5 h-5 mr-2"></img>
                                        <p className="text-gray-600">{terapis.experience} Tahun pengalaman</p>
                                    </div>{" "}
                                    <br />
                                    <div className="mt-2 space-y-1">
                                        {terapis.expertise?.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="mt-2 text-gray-600">{terapis.description}</p>
                                    <Link to="/DetailKonsultasi">
                                        <button className="w-full mt-4 bg-[#1572A1] text-white px-4 py-2 rounded hover:bg-blue-500">
                                            Konsultasi
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No therapists found.</p>
                )}
            </section>
        </div>
    )
}

export default ListTerapis
