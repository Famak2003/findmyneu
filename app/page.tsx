"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faSadCry, faSadTear, faUser } from "@fortawesome/free-solid-svg-icons";
import SkeletonBarCard from "./component/reuseable/SkeletonBarCard";
import Header from "./component/Header";
import Footer from "./component/Footer";
import React, { useState } from "react";
import PersonelBarCard from "./component/PersonelBarCard";
import BranchesBarCard from "./component/BranchesBarCard";
import OfficesBarCard from "./component/OfficesBarCard";
import SearchBar from "./component/SearchBar";
import SkeletonInput from "antd/es/skeleton/Input";
import Location from "./component/Location";
import { Modal } from "antd";
import PersonelModal from "./component/PersonelModal";



export default function Home() {
    const accordionRef = React.useRef<HTMLDivElement>(null);
    const [data, setData] = useState<any>({});
    const [status, setStatus] = useState<string>("idle");
    const [searchParms, setSearchParms] = useState<string>("");

    const [isPersonelModalVisible, setIsPersonelModalVisible] = useState(false);
    const [personelData, setPersonelData] = useState({});

    // console.log(personelData)
    console.log(data)
    console.log(status)

    return (
        <div className=" flex flex-col items-center justify-between gap-[30px] w-full min-h-[100dvh] bg-gray-200 ">
            <main className=" flex flex-col items-center sm:pt-[80px] px-[20px] py-5 gap-8 w-full max-w-[800px] h-fit 0 " >
                <Header/>
                <div className=" flex flex-col max-w-[800px] w-full rounded-2xl py-2 bg-white h-fit duration-300 transition-all  " >
                    <SearchBar status={status} setData={setData} setStatus={setStatus} setSearchParms={setSearchParms} searchParms={searchParms} />
                    {
                        status === "loading" ? (
                            <div className=" flex flex-col p-4 gap-2 ">
                                <div className="w-full h-fit" >
                                    <div className=" flex items-center gap-4 p-2 ">
                                        <SkeletonInput className=" !w-full !h-2 " active/>
                                    </div>
                                    <ul className="flex flex-col w-full gap-2 p-4 transition-all duration-300 ease-in-out max-h-[800px]">
                                        {
                                            Array.from({length: 5}).map((_, idx) => {
                                                return (
                                                    <SkeletonBarCard key={idx} />
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="w-full h-fit" >
                                    <div className=" flex items-center gap-4 p-2 ">
                                        <SkeletonInput className=" !w-full !h-2 " active/>
                                    </div>
                                    <ul className="flex flex-col w-full gap-2 p-4 transition-all duration-300 ease-in-out max-h-[800px]">
                                        {
                                            Array.from({length: 5}).map((_, idx) => {
                                                return (
                                                    <SkeletonBarCard key={idx} />
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        ) : status === "idle" ? (
                            <ul className=" flex gap-2 items-center px-5 py-3 " >                                
                                <li
                                    className=" px-3 py-1 rounded-2xl bg-gray-700 bg-opacity-50 hover:bg-opacity-70 hover:shadow-2xl text-[12px] cursor-pointer transition-all duration-300 "
                                    onClick={() => {
                                        setSearchParms("Prof")
                                    }}
                                >
                                    Prof
                                </li>
                                <li
                                    className=" px-3 py-1 rounded-2xl bg-gray-700 bg-opacity-50 hover:bg-opacity-70 hover:shadow-2xl text-[12px] cursor-pointer transition-all duration-300 "
                                    onClick={() => {
                                        setSearchParms("Dr")
                                    }}
                                >
                                    Dr
                                </li>
                                <li
                                    className=" px-3 py-1 rounded-2xl bg-gray-700 bg-opacity-50 hover:bg-opacity-70 hover:shadow-2xl text-[12px] cursor-pointer transition-all duration-300 "
                                    onClick={() => {
                                        setSearchParms("Mr")
                                    }}
                                >
                                    Mr
                                </li>
                                <li
                                    className=" px-3 py-1 rounded-2xl bg-gray-700 bg-opacity-50 hover:bg-opacity-70 hover:shadow-2xl text-[12px] cursor-pointer transition-all duration-300 "
                                    onClick={() => {
                                        setSearchParms("Mrs")
                                    }}
                                >
                                    Mrs
                                </li>
                            </ul>
                        ) : (
                            <div className=" w-full flex flex-col gap-4 p-4 overflow-y-scroll max-h-[520px] DisableScrollBar " >
                                <PersonelModal isModalVisible={isPersonelModalVisible} data={personelData} setIsModalVisible={setIsPersonelModalVisible}/>
                                {
                                    data?.personel.length || data?.location.length ? (
                                        Object.keys(data).map((item, idx) => {
                                            return (
                                                <div key={idx} className=" w-full h-fit " >
                                                    {
                                                        data[item]?.length ? (
                                                            <div
                                                                key={idx}
                                                                ref={accordionRef}
                                                                className=" w-full h-fit "
                                                            >
                                                                <div 
                                                                    className=" flex items-center gap-4 p-2 cursor-pointer relative "                                                                
                                                                >                                                                
                                                                    <p className=" capitalize text-gray-500 text-[13px] ">{`${item} Information `} 
                                                                        <span className=" absolute right-10 top-[50%] translate-y-[-50%] talic text-[12px] p-1 ">{`${data[item].length < 1 ? '0' : data[item].length}`}</span> 
                                                                    </p>
                                                                </div>
                                                                <ul className={` flex flex-col w-full gap-1 transition-all duration-300 ease-in-out  `} >
                                                                    {
                                                                        data[item]?.length ? (
                                                                            <>
                                                                                {
                                                                                    item === "personel" ? (
                                                                                        data[item]?.map((obj: any, idx: number) => {
                                                                                            return (
                                                                                                <PersonelBarCard idx={idx} setPersonelData={setPersonelData} setIsModalVisible={setIsPersonelModalVisible} data={obj} />
                                                                                            )
                                                                                        })
                                                                                    ) : (
                                                                                            item === "location" ? (
                                                                                                <Location data={data[item]} key={idx} />
                                                                                            ) : (
                                                                                                <></>
                                                                                            )
                                                                                        )
                                                                                }
                                                                            </>
                                                                        ) : (
                                                                            <div className="barCard">
                                                                                <div>
                                                                                    <h1 className=" text-2xl text-[14px] font-semibold text-black " >Looking for something?</h1>
                                                                                    <p className=" text-gray-500 text-[14px] " >Please enter your professor name in the search bar</p>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                        
                                                                    }
                                                                </ul>
                                                            </div>
                                                        ) : (
                                                            <></>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <div className=" flex gap-2 text-gray-400 justify-center items-center w-full h-fit p-4 " >
                                            <p className="  " >
                                                Sorry, No data found
                                            </p>
                                            <FontAwesomeIcon icon={faSadCry} />
                                        </div>
                                    )
                                    
                                }
                            </div>                           
                        )
                    }
                </div>
            </main>
            <Footer/>
        </div>
    );
}
