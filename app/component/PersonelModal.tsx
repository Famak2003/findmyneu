import { Modal } from "antd"
import CustomModal, { CustomModalProps } from "./reuseable/CustomModal"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import api from "@/lib/axios";

interface PersonelModalProps{
    data: any,
    isModalVisible: boolean;
    setIsModalVisible: (visible: boolean) => void;
    title: string
}

const PersonelModal: React.FC<PersonelModalProps> = ({ isModalVisible, setIsModalVisible, title, data}) => {
    const [fetchedData, setFetchedData] = useState<any>({});
    const [status, setStatus] = useState("idle");

    console.log(data?.id)

    useEffect(() => {
        const FetchModalData = async () => {
            try {
                setStatus("loading");
                const res = await api.get(`employee/find-my-neu/personel/${data?.id}`)
                const fetchedData = res.data.data
                console.log(fetchedData)
                
                setStatus("idle");
                setFetchedData(fetchedData);
        
            } catch (error) {
                setStatus("idle");
                console.error("Error fetching data:", error);
            }
        }
        FetchModalData()
        
    }, [data])
    return (
        <CustomModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} title="Personel Modal">
            <div className=" flex flex-col gap-4 ">
                <figure className=" relative w-full h-[400px] ">
                    {
                        data?.EmployeeOfficial?.avatar ? (
                            <img src={data?.EmployeeOfficial?.avatar} alt="prof" className=" transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl object-cover !h-full !w-full rounded-lg " />
                        ) : (
                            <FontAwesomeIcon className=" !w-full !h-full  " icon={faUser} />
                        )
                    }
                    <span className={` absolute top-4 right-4 h-[8px] aspect-square rounded-full ${fetchedData?.EmployeeOfficial?.status === "active" ? "bg-green-600" : fetchedData?.EmployeeOfficial?.status === "public-requestor" ? "bg-yellow-400" : " bg-red-600 "} `}></span>
                </figure>
                <div className=" flex flex-col gap-1 w-full text-black ">
                    <div className=" flex gap-2 ">
                        <h1 className=" font-semibold ">Name</h1> : <p>{fetchedData?.name} {fetchedData?.surname} </p> 
                    </div>
                    <div className=" flex gap-2 ">
                        <h1 className=" font-semibold ">Email</h1> : <p>{fetchedData?.EmployeeOfficial?.companyEmail || "..."} </p> 
                    </div>
                    <div className=" flex gap-2 ">
                        <h1 className=" font-semibold ">Position</h1> : <p>{fetchedData?.EmployeeOfficial?.Position} </p> 
                    </div>
                </div>
            </div>
        </CustomModal>
    )
}

export default PersonelModal