import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const PersonelBarCard = ({data, key}: {key: number, data: any}) => {
    return(
        <li key={key} className=" group barCard" >
            <figure>
                {
                    data?.EmployeeOfficial?.avatar ? (
                        <img src={data?.EmployeeOfficial?.avatar} alt="prof" className=" transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl object-cover !h-[90px] !w-[90px] rounded-lg " />
                    ) : (
                        <FontAwesomeIcon className=" cardIcon " icon={faUser} />
                    )
                }
            </figure>
            <div className=" flex flex-col gap-1 w-full text-black ">
                <div className=" flex gap-2 ">
                    <h1 className=" font-semibold ">Name</h1> : <p>{data?.name} {data?.surname} </p> 
                </div>
                <div className=" flex gap-2 ">
                    <h1 className=" font-semibold ">Email</h1> : <p>{data?.EmployeeOfficial?.companyEmail || "..."} </p> 
                </div>
                <div className=" flex gap-2 ">
                    <h1 className=" font-semibold ">Location</h1> : <p>{data?.EmployeeOfficial?.Branch?.name || "..."} </p> 
                </div>
                <div className=" flex gap-2 ">
                    <h1 className=" font-semibold ">Office</h1> : <p>{data?.EmployeeOfficial?.Office?.name || "... "} {`>`} {data?.EmployeeOfficial?.Seat?.name || "..."}</p> 
                </div>
            </div>
        </li>
    )
}

export default PersonelBarCard;