import CustomModal, { CustomModalProps } from "./reuseable/CustomModal"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faBuilding, faBuildingColumns, faChair, faChartArea, faUser, faUserGear } from "@fortawesome/free-solid-svg-icons";
import api from "@/lib/axios";
import toast from "react-hot-toast";
import SkeletonModal from "./reuseable/SkeletonModal";

interface LocationsModalProps{
    data: any,
    isModalVisible: boolean;
    setIsModalVisible: (visible: boolean) => void;
}

type openMapType = {
    lat: number;
    lon: number;
}

const LocationsModal: React.FC<LocationsModalProps> = ({ isModalVisible, setIsModalVisible, data}) => {
    const [fetchedData, setFetchedData] = useState<any>({});
    const [status, setStatus] = useState("idle");

    const handleOpenMap = ({lon, lat}: openMapType) => {
        const url = `https://www.google.com/maps?q=${lat},${lon}`
        window.open(url, "_blank")
    }

    const LocationIcon = (type: string) => {
        switch (type) {
            case "branch":
                return <FontAwesomeIcon className=" !w-full !h-full  " icon={faBuildingColumns} />
            case "office":
                return <FontAwesomeIcon className=" !w-full !h-full  " icon={faBriefcase} />
            default:
                return <FontAwesomeIcon className=" !w-full !h-full  " icon={faUserGear} />
        }
    }

    useEffect(() => {
        const FetchModalData = async () => {
            try {
                setStatus("loading");
                const res = await api.get(`employee/find-my-neu/${data?.type ? data?.type : "office"}/${data?.id}`)
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
        <CustomModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} title={data?.type ? data?.type : "office"}>
            {
                status === "loading" ? (
                    <SkeletonModal/>
                ) : (
                    <div className=" skeletonModal ">
                        <figure className=" skeletonModalImageContainer ">
                            {LocationIcon(data?.type)}
                        </figure>
                        <div className=" flex flex-col gap-1 w-full text-black ">
                            {
                                data?.type === "branch" ? (
                                    <>
                                        <div className=" flex gap-2 ">
                                            <h1 className=" font-semibold capitalize ">Name</h1> : <p className=" capitalize ">{fetchedData?.name} </p> 
                                        </div>
                                        <div className=" flex gap-2 ">
                                            <h1 className=" font-semibold ">Location</h1> : <p className=" capitalize ">{fetchedData?.country || "..."} </p> /  <p className="capitalize" >{fetchedData?.city || "..."} </p> 
                                        </div>
                                        <button className=" self-start cursor-pointer text-gray-500 underline hover:text-black duration-300 transition-all ease-in-out " onClick={() => handleOpenMap({lon: fetchedData?.lon, lat: fetchedData?.lat})} >Map View</button>
                                    </>
                                ) : (
                                    <>
                                        <div className=" flex gap-2 ">
                                            <h1 className=" font-semibold ">Name</h1> : <p className="capitalize">{fetchedData?.name} </p> 
                                        </div>
                                        <div className=" flex gap-2 ">
                                            <h1 className=" font-semibold ">Branch Location</h1> : <p className="capitalize">{fetchedData?.Branch?.country || "..."} </p> /  <p className="capitalize">{fetchedData?.Branch?.city || "..."} </p> 
                                        </div>
                                        <div className=" flex gap-2 ">
                                            <h1 className=" font-semibold ">Branch Name</h1> : <p>{fetchedData?.Branch?.name} </p> 
                                        </div>
                                        {/* <button className=" self-start cursor-pointer text-gray-500 hover:text-black duration-300 transition-all ease-in-out " onClick={() => handleOpenMap({lon: fetchedData?.lon, lat: fetchedData?.lat})} >Branch <span className="underline ">Map View</span> </button> */}

                                    </>
                                )
                            }
                            
                        </div>
                    </div>
                )
            }
        </CustomModal>
    )
}

export default LocationsModal