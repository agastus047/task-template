import React from "react";
import Image from "next/image";
import EventIcon from "public/images/event_icon.svg";
import Calender from "public/images/calender.svg";
import Notification from "public/images/notification.svg";

const LeveloneCard = () => {
    return(
        <div className="w-full flex gap-2 md:gap-5 bg-[#121212] p-2 md:p-5 rounded-md border border-gray-600">
            <Image src={EventIcon} alt=""></Image>
            <div className="flex flex-col gap-2">
                <div>Robosoccer lorem Ipsum</div>
                <div className="text-sm">Some Description About the Organisation</div>
                <div className="flex gap-2 text-sm">
                    <Image src={Calender} alt=""></Image>
                    <div className="opacity-60">Date</div>
                </div>
            </div>
            <Image src={Notification} alt="" className="ml-auto"></Image>
        </div>
    );
};

export default LeveloneCard;
