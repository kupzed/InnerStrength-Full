import React from "react";
import anxiety from "../assets/anxiety.png";
import bipolar from "../assets/bipolar.png";
import depression from "../assets/depression.png";
import anxiety2 from "../assets/anxiety.gif";
import bipolar2 from "../assets/bipolar.gif";
import depression2 from "../assets/depression.gif";
import { Link } from "react-router-dom";

const Layanan = () => {
    return (
    <div className="pt-32">
        <h3 className="font-bold text-center">Layanan</h3>
        <br></br><h1 className="font-bold text-3xl text-center">Layanan Masalah Kesehatan Mental yang Kami Sediakan</h1>
        <div className="flex justify-center px-8 pt-6">
        <div>
            <Link to="/Anxiety">
            <img src={anxiety} alt="" className="pt-6 px-14 flex-direction justify-center shadow hover:shadow-lg" />
            </Link>
        </div>
        <div>
            <Link to="/Bipolar">
            <img src={bipolar} alt="" className="pt-6 px-14 flex-direction shadow hover:shadow-lg"/>
            </Link>
        </div>
        <div>
            <Link to="/Depression">
            <img src={depression} alt="" className="pt-6 px-14 flex-direction shadow hover:shadow-lg"/>
            </Link>        
        </div>
    </div>
    </div>
);
};

export default Layanan;