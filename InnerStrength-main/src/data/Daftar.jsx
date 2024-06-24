import React, { useState } from "react"
import iconlogin from "../assets/iconlogin.png"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Daftar = () => {
    const navigate = useNavigate()
    const [full_name, setfull_name] = useState("")
    const [gender, setgender] = useState("")
    const [birth_place, setbirth_place] = useState("")
    const [birth_date, setbirth_date] = useState("")
    const [email, setemail] = useState("")
    const [phone_number, setphone_number] = useState("")
    const [password, setpassword] = useState("")

    const Register = async (e) => {
        e.preventDefault()

        try {
            await axios.post("http://localhost:3001/users", {
                full_name: full_name,
                gender: gender,
                birth_place: birth_place,
                birth_date: birth_date,
                email: email,
                phone_number: phone_number,
                password: password
            })
            navigate("/Login")
        } catch (error) {
            console.log("Error data: ", error)
        }
    }

    return (
        <div className="flex min-h-screen">
            {/* Left Side - Image */}
            <div className="hidden md:block w-1/2 bg-cover bg-center my-auto">
                <img src={iconlogin} alt="Login Icon" className="object-center mx-auto" />
            </div>

            {/* Right Side - Registration Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-14 bg-[#1572A1]">
                <div className="max-w-xl w-full space-y-5 border-2 p-10 rounded-lg bg-white">
                    <div>
                        <h2 className="mt-4 text-center text-3xl font-extrabold text-[#008DDA]">Buat Akun</h2>
                    </div>
                    <form className="mt-6 gap-y-6" onSubmit={Register}>
                        <div className="rounded-md shadow-sm gap-y-6">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                                    Nama Lengkap
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    value={full_name}
                                    onChange={(e) => setfull_name(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                                    Jenis Kelamin
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="gender"
                                    name="gender"
                                    value={gender}
                                    onChange={(e) => setgender(e.target.value)}
                                >
                                    <option value="" disabled>
                                        Pilih Jenis Kelamin
                                    </option>
                                    <option value="male">Laki-laki</option>
                                    <option value="female">Perempuan</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthPlace">
                                    Tempat Lahir
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="birthPlace"
                                    name="birthPlace"
                                    type="text"
                                    value={birth_place}
                                    onChange={(e) => setbirth_place(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthDate">
                                    Tanggal Lahir
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="birthDate"
                                    name="birthDate"
                                    type="date"
                                    value={birth_date}
                                    onChange={(e) => setbirth_date(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                    Nomor Telepon
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={phone_number}
                                    onChange={(e) => setphone_number(e.target.value)}
                                    placeholder="Nomor Telepon"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setpassword(e.target.value)}
                                    placeholder="Password"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmpassword">
                                    Konfirmasi Password
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="confirmpassword"
                                    type="password"
                                    placeholder="Konfirmasi Password"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#1572A1] hover:bg-[#008DDA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#008DDA]"
                            >
                                Daftar
                            </button>
                        </div>
                    </form>
                    <div className="text-center mt-4">
                        <Link to="/Login" className="text-[#1572A1] hover:text-[#008DDA]">
                            Sudah punya akun? Masuk di sini
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Daftar
