import { Modal } from "antd"
import CustomModal, { CustomModalProps } from "./reuseable/CustomModal"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faUser } from "@fortawesome/free-solid-svg-icons";

interface LocationsModalProps{
    data: any,
    isModalVisible: boolean;
    setIsModalVisible: (visible: boolean) => void;
}

const LocationsModal: React.FC<LocationsModalProps> = ({ isModalVisible, setIsModalVisible, data}) => {
    
    return (
        <CustomModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} title="Personel Modal">
            <div className=" flex flex-col gap-4 ">
                <figure className=" w-full h-[400px] ">
                    <FontAwesomeIcon className=" !w-full !h-full  " icon={faBuildingColumns} />
                </figure>
                <div className=" flex flex-col gap-1 w-full text-black ">
                    <div className=" flex gap-2 ">
                        <h1 className=" font-semibold ">Name</h1> : <p>{data?.name} </p> 
                    </div>
                    <div className=" flex gap-2 ">
                        <h1 className=" font-semibold ">Location</h1> : <p>{data?.country || "..."} </p> /  <p>{data?.city || "..."} </p> 
                    </div>
                </div>
            </div>
        </CustomModal>
    )
}

export default LocationsModal