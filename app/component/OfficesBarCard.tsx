import { faBuilding, faBuildingColumns } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { OfficesType } from "./Location";

interface OfficesBarCardType {
    obj: OfficesType
    idx?: number;
    setLocationData: (data: OfficesType) => void;
    setIsModalVisible: (visible: boolean) => void;
}

const OfficesBarCard = ({obj, setIsModalVisible, setLocationData, idx}: OfficesBarCardType) => {
    return(
        <div 
            onClick={() => {
                setLocationData(obj)
                return setIsModalVisible(true);
            }}
            key={idx} 
            className="group barCard">
            <figure>
                <FontAwesomeIcon className="cardIcon" icon={faBuilding} />
            </figure>
            <div key={idx} className=" flex flex-col gap-1 text-black " >

                <div className=" flex ">
                    <p>{obj?.name} </p> 
                </div>

                {/* <div className=" flex gap-2 ">
                    <h1 className=" font-semibold ">Branch</h1> : <p>{obj?.name} </p> 
                </div>

                <div className=" flex gap-2 ">
                    <h1 className=" font-semibold ">Location</h1> : <p>{obj?.Branch?.city} / {obj?.Branch?.country} </p> 
                </div> */}
            </div>
        </div>
    )
}


export default OfficesBarCard;