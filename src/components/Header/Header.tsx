import React from "react";
import SoundControl from "../SoundControl/SoundControl";
import {useNavigate} from "react-router";
import image from "../../assets/christmas-bg.png";

const Header: React.FC = () => {
    const nav = useNavigate();
    return (
        <div
            className="flex relative justify-between items-center bg-white bg-opacity-30 p-4 shadow fixed top-0 max-w-[100vw] z-20">
            <label
                className="text-[30px] text-red-200 cursor-pointer transition duration-500 ease-linear hover:underline"
                onClick={() => nav("/")}
            >
                Đi ước
            </label>
            <SoundControl/>
            <label
                className="text-[30px] text-red-200 cursor-pointer transition duration-500 ease-linear hover:underline"
                onClick={() => nav("/wishes")}
            >
                Lời ước
            </label>
            <img
                src={image}
                alt={"bg"}
                className="absolute object-cover top-0 left-0 -z-50 w-full"
            />
        </div>
    );
};

export default Header;
