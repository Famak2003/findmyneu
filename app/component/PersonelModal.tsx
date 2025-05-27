import { Modal } from "antd"
import CustomModal, { CustomModalProps } from "./reuseable/CustomModal"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import api from "@/lib/axios";
import SkeletonModal from "./reuseable/SkeletonModal";
import toast from "react-hot-toast";

interface PersonelModalProps{
    data: any,
    isModalVisible: boolean;
    setIsModalVisible: (visible: boolean) => void;
}

const PersonelModal: React.FC<PersonelModalProps> = ({ isModalVisible, setIsModalVisible, data}) => {
    const [fetchedData, setFetchedData] = useState<any>({});
    const [status, setStatus] = useState("idle");

    useEffect(() => {
        const FetchModalData = async () => {
            try {
                setStatus("loading");
                const res = await api.get(`employee/find-my-neu/personel/${data?.id}`)
                const fetchedData = res.data.data
                
                setStatus("idle");
                setFetchedData(fetchedData);
        
            } catch (error) {
                setStatus("idle");
                toast.error("Oops, something went wrong please try again later")
                // console.error("Error fetching data:", error);
                console.error("Error fetching data:");
            }
        }
        FetchModalData()
        
    }, [data])

    return (
        <>
            <CustomModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} title="Personel">
                {
                    status === "loading" ? (
                        <SkeletonModal/>
                    ) : (
                        <div className=" skeletonModal ">
                            <figure className=" skeletonModalImageContainer ">
                                {
                                    data?.EmployeeOfficial?.avatar ? (
                                        <img src={data?.EmployeeOfficial?.avatar} alt="prof" className=" transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl object-cover !h-full !w-full rounded-lg " />
                                    ) : (
                                        <FontAwesomeIcon className=" !w-full !h-full  " icon={faUser} />
                                    )
                                }
                                <span className={` absolute top-3 right-3 h-[8px] aspect-square rounded-full ${fetchedData?.EmployeeOfficial?.status === "active" ? "bg-green-600" : fetchedData?.EmployeeOfficial?.status === "public-requestor" ? "bg-yellow-400" : " bg-red-600 "} `}></span>
                            </figure>
                            <div className=" flex flex-col gap-1 w-full text-black text-[14px] ">
                                <div className=" flex gap-2 ">
                                    <h1 className=" font-semibold ">Name</h1> : <p>{fetchedData?.name} {fetchedData?.surname} </p> 
                                </div>
                                <div className=" flex gap-2 ">
                                    <h1 className=" font-semibold  ">Email</h1> : <p className="overflow-x-clip w-[70%] sm:w-full">{fetchedData?.EmployeeOfficial?.companyEmail || "..."} </p> 
                                </div>
                                <div className=" flex gap-2 ">
                                    <h1 className=" font-semibold ">Position</h1> : <p>{fetchedData?.EmployeeOfficial?.Position?.name_en || "..."} </p> 
                                </div>
                                <div className=" flex gap-2 ">
                                    <h1 className=" font-semibold ">Office</h1> : <p> {fetchedData?.EmployeeOfficial?.Branch?.name || "..."} {">"} {fetchedData?.EmployeeOfficial?.Office?.name || "..."} </p>
                                </div>
                                {/* <div className=" flex gap-2 ">
                                    <h1 className=" font-semibold ">Seat Number</h1> : <p> {fetchedData?.EmployeeOfficial?.Seat?.name || "..."} </p>
                                </div> */}
                            </div>
                        </div>

                    )
                }
            </CustomModal>
        </>
    )
}

export default PersonelModal