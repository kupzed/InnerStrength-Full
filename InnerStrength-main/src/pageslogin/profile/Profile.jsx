import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Profile = () => {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [lastName, setLastName] = useState("")
    const [gender, setGender] = useState("Pria")
    const [profileImage, setProfileImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)

    const [name, setName] = useState("")
    const [no_telp, setTelp] = useState("")
    const [alamat, setAlamat] = useState("")
    const [iduser, setId] = useState("")
    const [usersData, setUsersData] = useState([])
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        fetprofile()
        loadPersonalInfo()
        loadProfileImage()
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
            setUsersData(response.data)
            setAlamat(response.data.alamat)
            setTelp(response.data.phone)
            setEmail(response.data.email)
            setName(response.data.name)
            setImagePreview(response.data.url)
            setId(response.data.id)
        } catch (error) {
            console.error("Error fetching profile:", error)
        }
    }

    const newPasswords = async () => {
        const idlogin = localStorage.getItem("iduserlogin")
        const formData = new FormData()

        formData.append("email", email)
        formData.append("password", newPassword)
        try {
            const response = await axios.put(`http://localhost:3001/newpassword/${idlogin}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                    // Authorization: `Bearer ${token}`
                }
            })

            console.log("sukses", response)
            navigate("/Login")
        } catch (error) {
            console.error("Error fetching profile:", error)
        }
    }

    const loadPersonalInfo = () => {
        const personalInfo = JSON.parse(localStorage.getItem("personalInfo"))
        if (personalInfo) {
            setFirstName(personalInfo.firstName)
            setMiddleName(personalInfo.middleName)
            setLastName(personalInfo.lastName)
            setGender(personalInfo.gender)
        }
    }

    const loadProfileImage = () => {
        const profileImage = localStorage.getItem("profileImage")
        if (profileImage) {
            setProfileImage(profileImage)
        }
    }

    const handlePersonalInfoUpdate = () => {
        const personalInfo = {
            firstName,
            middleName,
            lastName,
            gender
        }
        localStorage.setItem("personalInfo", JSON.stringify(personalInfo))
        alert("Personal information updated successfully!")
    }

    const handlePasswordUpdate = () => {
        // Add your password update logic here
        console.log("Password updated")
    }

    const handleImageUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                const base64String = reader.result
                setProfileImage(base64String)
                localStorage.setItem("profileImage", base64String)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="w-full md:w-full p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Profile akun</h2>
            <div className="mb-8">
                <h3 className="text-xl font-semibold">Informasi login</h3>
                <p className="text-gray-700">{email}</p>
                <button className="text-blue-500 hover:underline mt-2">Ubah Sandi</button>
            </div>
            <div className="mb-8">
                <h3 className="text-xl font-semibold">Ubah Sandi</h3>
                <div className="mt-4">
                    <input
                        type="password"
                        placeholder="Verifikasi password lama"
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Buat password baru"
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Masukkan kembali password baru"
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button className="w-full p-2 bg-blue-500 text-white rounded-md" onClick={newPasswords}>
                        Update Password
                    </button>
                </div>
            </div>
            <div className="mb-8">
                <h3 className="text-xl font-semibold">Personal informasi</h3>
                <div className="mt-4">
                    <input
                        type="text"
                        placeholder="Nama Depan (opsional)"
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Nama Tengah (opsional)"
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Nama Belakang (opsional)"
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <select
                        className="w-full p-2 border border-gray-300 rounded-md mb-2"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="Pria">Pria</option>
                        <option value="Wanita">Wanita</option>
                        <option value="Lainnya">Lainnya</option>
                    </select>
                    <button className="w-full p-2 bg-blue-500 text-white rounded-md" onClick={handlePersonalInfoUpdate}>
                        Update Personal Info
                    </button>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold">Foto profilku</h3>
                <div className="mt-4 flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mb-4">
                        {profileImage && (
                            <img src={profileImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
                        )}
                    </div>
                    <input type="file" accept="image/*" className="hidden" id="upload" onChange={handleImageUpload} />
                    <label htmlFor="upload" className="cursor-pointer p-2 bg-blue-500 text-white rounded-md">
                        Upload foto
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Profile
