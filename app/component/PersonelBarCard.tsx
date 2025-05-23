import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";
import PersonelModal from "./PersonelModal";
import { useState } from "react";

const PersonelBarCard = ({data, setPersonelData, setIsModalVisible, key}: {key: number, setPersonelData: ({}) => void, setIsModalVisible: (a: boolean) => void, data: any}) => {
    // const [isModalVisible, setIsModalVisible] = useState(false);
    return(
        <li 
            key={key} 
            className=" group barCard"
            onClick={() => {
                setPersonelData(data)
                return setIsModalVisible(true);
            }}
        >
            
             {/* <PersonelModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} title="Personel Modal">
                <div className=" flex flex-col gap-4 ">
                    <figure className=" w-full h-[400px] ">
                        {
                            data?.EmployeeOfficial?.avatar ? (
                                <img src={data?.EmployeeOfficial?.avatar} alt="prof" className=" transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl object-cover !h-full !w-full rounded-lg " />
                            ) : (
                                <FontAwesomeIcon className=" w-full h-full " icon={faUser} />
                            )
                        }
                    </figure>
                    <div className=" flex flex-col gap-1 w-full text-black ">
                        <div className=" flex gap-2 ">
                            <h1 className=" font-semibold ">Name</h1> : <p>{data?.name} {data?.surname} </p> 
                        </div>
                        <div className=" flex gap-2 ">
                            <h1 className=" font-semibold ">Email</h1> : <p>{data?.EmployeeOfficial?.companyEmail || "..."} </p> 
                        </div>
                    </div>
                </div>
            </PersonelModal> */}
            <figure>
                {
                    data?.EmployeeOfficial?.avatar ? (
                        <img src={data?.EmployeeOfficial?.avatar} alt="prof" className=" transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl object-cover !h-[40px] !w-[40px] rounded-lg " />
                    ) : (
                        <FontAwesomeIcon className=" cardIcon " icon={faUser} />
                    )
                }
            </figure>
            <div className=" flex flex-col gap-1 w-full text-black ">
                <div className=" flex gap-2 ">
                    <p>{data?.name} {data?.surname} </p> 
                </div>
                {/* <div className=" flex gap-2 ">
                    <h1 className=" font-semibold ">Email</h1> : <p>{data?.EmployeeOfficial?.companyEmail || "..."} </p> 
                </div>
                <div className=" flex gap-2 ">
                    <h1 className=" font-semibold ">Location</h1> : <p>{data?.EmployeeOfficial?.Branch?.name || "..."} </p> 
                </div>
                <div className=" flex gap-2 ">
                    <h1 className=" font-semibold ">Office</h1> : <p>{data?.EmployeeOfficial?.Office?.name || "... "} {`>`} {data?.EmployeeOfficial?.Seat?.name || "..."}</p> 
                </div> */}
            </div>
        </li>
    )
}

export default PersonelBarCard;