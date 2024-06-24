import React, { useEffect, useState } from "react"
import Sidebar from "./Sidebar"
import Headerdash from "./Headerdash"
import axios from "axios"

export default function Profile() {
    const [image, setimage] = useState("")
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [alamat, setalamat] = useState("")

    useEffect(() => {
        fetprofile()
    }, [])
    const fetprofile = async () => {
        const token = localStorage.getItem("iddoctor")
        try {
            const response = await axios.get(`http://localhost:3001/doctors/${token}`, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })

            setimage(response.data.url)
            setname(response.data.name)
            setemail(response.data.email)
            setalamat(response.data.address)
            console.log("response data", response.data)
        } catch (error) {
            console.error("Error fetching profile:", error)
        }
    }

    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen">
            <Sidebar />
            <div className="p-4 flex flex-col flex-1">
                <Headerdash />
                <div className="px-8 pt-8 text-xl">Profile</div>
                <div className="h-full w-full flex flex-col items-center bg-gray-100 pt-12">
                    <div className="bg-white w-full p-6 rounded-md shadow-md max-w-4xl">
                        <div className="flex justify-center mb-6">
                            <div
                                className="h-24 w-24 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                                style={{ backgroundImage: `url("${image}")` }}
                            ></div>
                        </div>
                        <div className=" mb-4">
                            <div>
                                <label className="block text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 p-2 border rounded-md"
                                    placeholder="Nama Awal"
                                    value={name}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                className="w-full mt-1 p-2 border rounded-md"
                                placeholder="Email"
                                value={email}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Alamat</label>
                            <input
                                type="text"
                                className="w-full mt-1 p-2 border rounded-md"
                                placeholder="Alamat"
                                value={alamat}
                            />
                        </div>
                        <div className="flex justify-center w-full">
                            <button className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
