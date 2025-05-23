import { faBriefcase, faBuilding, faBuildingColumns, faUserGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { OfficesType } from "./Location";
import { Tooltip } from "antd";

interface OfficesBarCardType {
    obj: OfficesType
    idx?: number;
    setLocationData: (data: OfficesType) => void;
    setIsModalVisible: (visible: boolean) => void;
}

const OfficesBarCard = ({obj, setIsModalVisible, setLocationData, idx}: OfficesBarCardType) => {

    const OfficeBarCardIcon = (type: string) => {
        switch (type) {            
            case "office":
                return <FontAwesomeIcon className=" cardIcon  " icon={faBriefcase} />
            default:
                return <FontAwesomeIcon className=" cardIcon  " icon={faUserGear} />
        }
    }

    return(
        <div 
            onClick={() => {
                setLocationData(obj)
                return setIsModalVisible(true);
            }}
            key={idx} 
            className="group barCard">
            <figure>
                <Tooltip title={obj?.type} placement="top" color="#000000" >
                    {
                        OfficeBarCardIcon(obj?.type)
                    }
                </Tooltip>
            </figure>
            <div key={idx} className=" flex flex-col gap-1 text-black " >

                <div className=" flex ">
                    <p>{obj?.name} </p> 
                </div>
            </div>
        </div>
    )
}


export default OfficesBarCard;