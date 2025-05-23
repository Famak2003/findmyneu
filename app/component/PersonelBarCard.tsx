import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Tooltip } from "antd";
import PersonelModal from "./PersonelModal";
import { useState } from "react";

const PersonelBarCard = ({data, setPersonelData, setIsModalVisible, idx}: {idx: number, setPersonelData: ({}) => void, setIsModalVisible: (a: boolean) => void, data: any}) => {
    // const [isModalVisible, setIsModalVisible] = useState(false);
    return(
        <li 
            key={idx} 
            className=" group barCard"
            onClick={() => {
                setPersonelData(data)
                return setIsModalVisible(true);
            }}
        >        
            <figure>
                <Tooltip title={"personel"} placement="top" color="#000000" >
                    {
                        data?.EmployeeOfficial?.avatar ? (
                            <img src={data?.EmployeeOfficial?.avatar} alt="prof" className=" transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl object-cover !h-[40px] !w-[40px] rounded-lg " />
                        ) : (
                            <FontAwesomeIcon className=" cardIcon " icon={faUser} />
                        )
                    }
                </Tooltip>
            </figure>
            <div className=" flex flex-col gap-1 w-full text-black ">
                <div className=" flex gap-2 ">
                    <p>{data?.name} {data?.surname} </p> 
                </div>                
            </div>
        </li>
    )
}

export default PersonelBarCard;