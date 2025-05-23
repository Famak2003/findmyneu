import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BranchesType } from "./Location";

interface BranchesBarCardProps {
    obj: BranchesType
    idx?: number;
    setLocationData: (data: BranchesType) => void;
    setIsModalVisible: (visible: boolean) => void;
}

type openMapType = {
    lat: number;
    lon: number;
}


const BranchesBarCard = ({idx, setIsModalVisible, setLocationData, obj}: BranchesBarCardProps) => {

    const handleOpenMap = ({lon, lat}: openMapType) => {
        const url = `https://www.google.com/maps?q=${lat},${lon}`
        window.open(url, "_blank")
    }
    return (
        <div 
            onClick={() => {
                setLocationData(obj)
                return setIsModalVisible(true);
            }
            }
            key={idx} 
            className=" group barCard "
        >
            <figure className="  " >
                <FontAwesomeIcon className="cardIcon" icon={faBuildingColumns} />
            </figure>
            <div className=" flex flex-col gap-1 text-black ">
                <div className=" flex ">
                    <p>{obj?.country} / {obj?.country} </p> 
                </div>
                {/* <button className=" self-start cursor-pointer text-gray-500 underline hover:text-black duration-300 transition-all ease-in-out " onClick={() => handleOpenMap({lon: obj?.lon, lat: obj?.lat})} >Map View</button> */}
                {/* <MapView destination={{lat: obj?.lat, lon: obj?.lon}} userLocation={{lat: location?.lat, lon: location?.lon}} /> */}
            </div>
        </div>
    )
}

export default BranchesBarCard;