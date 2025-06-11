import { useState } from "react";
import BranchesBarCard from "./BranchesBarCard";
import OfficesBarCard from "./OfficesBarCard";
import LocationsModal from "./LocationsModal";

export interface OfficesType{
    name: string, 
    type: string,
    branch: {name: string}
    matchPosition: number
}

export interface BranchesType{
    name: string,
    type: string,
    lon: number,
    lat: number,
    city: string,
    country: string,
    matchPosition: number
}

type LocationType = (OfficesType | OfficesType)[]


type LocationProps = {
    data: LocationType,
}

const Location = ({data}: LocationProps) => {

    const [isLocationModalVisible, setIsLocationModalVisible] = useState(false);
    const [locationData, setLocationData] = useState({});

    return (
        <>
            <LocationsModal isModalVisible={isLocationModalVisible} setIsModalVisible={setIsLocationModalVisible} data={locationData}  />
            {
                 data.map((obj: any, idx: number) => {
                        if (obj?.type === "branch") {
                            return <BranchesBarCard key={idx} setLocationData={setLocationData} setIsModalVisible={setIsLocationModalVisible} obj={obj} idx={idx} />;
                        } else {
                            return <OfficesBarCard key={idx} setLocationData={setLocationData} setIsModalVisible={setIsLocationModalVisible} obj={obj} idx={idx} />;
                        }
                })
            }
        </>
  );


}

export default Location;