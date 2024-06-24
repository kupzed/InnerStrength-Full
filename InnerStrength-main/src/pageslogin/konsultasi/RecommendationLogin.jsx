import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import rt1 from "./assets/gracia.jpg"
import rt2 from "./assets/vinna.png"
import rt3 from "./assets/gladies.png"
import iconharga from "./assets/harga.svg"
import iconlokasi from "./assets/lokasi.svg"
import iconsesi from "./assets/sesi.svg"
import iconlike from "./assets/like.svg"
import iconpengalaman from "./assets/pengalaman.svg"
import axios from "axios"

const Recommendation = () => {
    {
        /* Recommendasi Teratas */
    }
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetchDoctors()
    }, [])

    const fetchDoctors = async () => {
        try {
            const response = await axios.get("http://localhost:3001/doctors")
            // Assuming the response data structure has a field `url` which is an array of image URLs
            setData(response.data)

            console.log("response data", response.data)
        } catch (error) {
            console.error("Error fetching doctors:", error)
        }
    }

    return (
        <div>
            {/* Rekomendasi Teratas Start*/}
            <section className="container mx-auto px-32 py-8">
                <h2 className="text-xl font-semibold mb-4">Rekomendasi teratas</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data.map((rec, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <img src={rec.url} alt={rec.name} className="w-full h-48 object-cover rounded-md" />
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">{rec.name}</h3>
                                <div className="inline-flex justify-normal items-center">
                                    <img src={iconharga} className="w-5 h-5 mr-2"></img>
                                    <p className="text-gray-600">{rec.price}</p>
                                </div>{" "}
                                <br />
                                <div className="inline-flex justify-normal items-center">
                                    <img src={iconlokasi} className="w-5 h-5 mr-2"></img>
                                    <p className="text-gray-600">{rec.address}</p>
                                </div>{" "}
                                <br />
                                <div className="inline-flex justify-normal items-center">
                                    <img src={iconsesi} className="w-5 h-5 mr-2"></img>
                                    <p className="text-gray-600">
                                        {rec.offline ? "Offline" : ""} / {rec.online ? "Online" : ""}
                                    </p>
                                </div>{" "}
                                <br />
                                <div className="inline-flex justify-normal items-center">
                                    <img src={iconlike} className="w-5 h-5 mr-2"></img>
                                    <p className="text-gray-600">{rec.likes_count} Orang menyukai</p>
                                </div>{" "}
                                <br />
                                <div className="inline-flex justify-normal items-center">
                                    <img src={iconpengalaman} className="w-5 h-5 mr-2"></img>
                                    <p className="text-gray-600">{rec.experience} Tahun pengalaman</p>
                                </div>{" "}
                                <br />
                                <Link to={`/DetailKonsultasi/${rec.id}`}>
                                    <button className="w-full item-center mt-4 bg-[#1572A1] text-white px-4 py-2 rounded hover:bg-blue-500">
                                        Konsultasi
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Rekomendasi Teratas End */}
        </div>
    )
}

export default Recommendation
