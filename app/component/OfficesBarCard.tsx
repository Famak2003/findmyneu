import { faBuilding, faBuildingColumns } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface OfficesBarCardType {
    obj: {
        id: number;
        name: string;
        Branch: {
            id: number;
            name: string;
            city: string;
            country: string;
        };
    };
    idx?: number;
}

const OfficesBarCard = ({obj, idx}: OfficesBarCardType) => {
    return(
        <div key={idx} className="group barCard">
            <figure>
                <FontAwesomeIcon className="cardIcon" icon={faBuilding} />
            </figure>
            <div key={idx} className=" flex flex-col gap-1 text-black " >

                <div className=" flex gap-2 ">
                    <h1 className=" font-semibold ">Office</h1> : <p>{obj?.name} </p> 
                </div>

                <div className=" flex gap-2 ">
                    <h1 className=" font-semibold ">Branch</h1> : <p>{obj?.Branch?.name} </p> 
                </div>

                <div className=" flex gap-2 ">
                    <h1 className=" font-semibold ">Location</h1> : <p>{obj?.Branch?.city} / {obj?.Branch?.country} </p> 
                </div>
            </div>
        </div>
    )
}


export default OfficesBarCard;