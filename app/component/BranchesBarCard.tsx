import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BranchesBarCardProps {
    obj: {
        name: string;
        country: string;
        lat: number;
        lon: number;
    };
    idx?: number;
}

type openMapType = {
    lat: number;
    lon: number;
}


const BranchesBarCard = ({idx, obj}: BranchesBarCardProps) => {

    const handleOpenMap = ({lon, lat}: openMapType) => {
        const url = `https://www.google.com/maps?q=${lat},${lon}`
        window.open(url, "_blank")
    }
    return (
        <div key={idx} className=" group barCard " >
            <figure className="  " >
                <FontAwesomeIcon className="cardIcon" icon={faBuildingColumns} />
            </figure>
            <div className=" flex flex-col gap-1 text-black ">
                
                <div className=" flex gap-2 ">
                    <h1 className=" font-semibold ">Branch</h1> : <p>{obj?.name} </p> 
                </div>

                <div className=" flex gap-2 ">
                    <h1 className=" font-semibold ">Location</h1> : <p>{obj?.country} / {obj?.country} </p> 
                </div>
                <button className=" self-start cursor-pointer text-gray-500 underline hover:text-black duration-300 transition-all ease-in-out " onClick={() => handleOpenMap({lon: obj?.lon, lat: obj?.lat})} >Map View</button>
                {/* <MapView destination={{lat: obj?.lat, lon: obj?.lon}} userLocation={{lat: location?.lat, lon: location?.lon}} /> */}
            </div>
        </div>
    )
}

export default BranchesBarCard;