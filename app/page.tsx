"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import SkeletonBarCard from "./component/SkeletonBarCard";
import Header from "./component/Header";
import Footer from "./component/Footer";
import React, { useState } from "react";
import PersonelBarCard from "./component/PersonelBarCard";
import BranchesBarCard from "./component/BranchesBarCard";
import OfficesBarCard from "./component/OfficesBarCard";
import SearchBar from "./component/SearchBar";



type AccordionState = {
  id: number | string;
};


export default function Home() {
    const accordionRef = React.useRef<HTMLDivElement>(null);
    const [data, setData] = useState<any>({
        personel: [],
        offices: [],
        branches: []
    });
    const [status, setStatus] = useState<string>("idle");
    const [searchParams, setSearchParms] = useState<string>("");
    const [accordion, setAccordion] = useState<AccordionState>({id: ""})

    return (
        <div className=" flex flex-col items-center justify-between gap-[30px] w-full min-h-[100dvh] bg-gray-300 ">
            <main className=" flex flex-col items-center sm:pt-[80px] px-[20px] pb-5 gap-2 w-full max-w-[800px] h-fit 0 " >
                <Header status={status} setData={setData} setStatus={setStatus} setSearchParms={setSearchParms} />
                <div className=" w-full flex flex-col gap-4 bg-white rounded-lg shadow-lg p-4 " >
                    {
                        Object.keys(data).map((item, idx) => {
                            return (
                                <div
                                    key ={idx}
                                    ref={accordionRef}
                                    className=" w-full h-fit "
                                >
                                    <div 
                                        className=" flex items-center gap-4 p-2 cursor-pointer relative "
                                        onClick={() => {
                                            setAccordion((prev) => {
                                            return {
                                                id: prev?.id === idx ? "" : idx,
                                            }
                                            })
                                        } 
                                    }
                                    >
                                        {/* <FontAwesomeIcon className={` font-semibold text-black transition-all duration-500 ${accordion.id === idx ? "rotate-0" : "rotate-90"} `} icon={faArrowDown} /> */}
                                        <p className=" capitalize text-black text-[13px] ">{`${item} Information `} 
                                        <span className=" absolute right-10 top-[50%] translate-y-[-50%] talic text-[12px] p-1 ">{`${data[item].length < 1 ? '0' : data[item].length}`}</span> </p>
                                    </div>
                                    <ul className={` flex flex-col w-full gap-4 overflow-y-scroll transition-all duration-300 ease-in-out ${accordion.id === idx ? " max-h-[800px] " : " max-h-0"} `} >
                                        {
                                            ( 
                                                status === "loading" ? (
                                                    <>
                                                        {
                                                            Array.from({length: 5}).map((_, idx) => {
                                                                return (
                                                                <SkeletonBarCard key={idx} />
                                                                )
                                                            })
                                                        }
                                                    
                                                    </>
                                                ) : data[item]?.length ? (
                                                    <>
                                                        {
                                                            data[item]?.map((obj: any, idx: number) => {
                                                                return (
                                                                    item === "personel" ? (
                                                                        <PersonelBarCard key={idx} data={obj} />
                                                                    ) : (
                                                                        item === "offices" ? (
                                                                            <OfficesBarCard obj={obj} idx={idx} />                                                            
                                                                        ) : (
                                                                            item === "branches" ? (
                                                                                <BranchesBarCard idx={idx} obj={obj} />
                                                                            ) : (
                                                                                <></>
                                                                            )
                                                                        )
                                                                    )
                                                                    
                                                                )
                                                            })
                                                        }
                                                    </>
                                                ) : (
                                                        <>
                                                            <div>
                                                                <h1 className=" text-2xl font-semibold text-black " >Looking for something?</h1>
                                                            </div>
                                                            <div className=" " >
                                                                <p className=" text-gray-500 " >Please enter your professor name to find your NEU</p>
                                                            </div>
                                                        </>
                                                )
                                            )
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </main>
            <Footer/>
        </div>
    );
}
