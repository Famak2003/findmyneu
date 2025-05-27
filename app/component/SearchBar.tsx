import api from "@/lib/axios"
import debounce from "@/utils/debounce"
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Input } from "antd"
import { useEffect, useRef } from "react"
import toast from "react-hot-toast"

export type SearchBarProps = {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setSearchParms: React.Dispatch<React.SetStateAction<string>>;
  searchParms: string;
  setData: React.Dispatch<React.SetStateAction<any>>;
  status: string;
}


const SearchBar = ({setStatus, setSearchParms, searchParms, setData, status}: SearchBarProps) => {
    const abortControllerRef = useRef<AbortController | null>(null);
    const fetchData = async (searchParams: string) => {
        // About Previous Request
        if (abortControllerRef.current){
            abortControllerRef.current.abort
        }

        //Creat new AbortController for new request
        const controller = new AbortController();
        abortControllerRef.current = controller;
        if (!searchParams) {
            setStatus("idle");
            setData({});
            return;
        }
        try {
            const res = await api.get(`employee/find-my-neu/autocomplete/${searchParams}`,{
                signal: controller.signal
            })
            const data = res.data.data
            setStatus("result");
            setData({
                personel: data?.personel,
                location: [
                    ...data?.offices,
                    ...data?.branches
                ]
            })
            return
    
        } catch (error) {
            setStatus("idle");
            toast.error("Something went wrong, please try again later")
            // console.error("Error fetching data:", error);
            console.error("Error fetching data:");
        }
    }
    const debouncedFetchDataRef = useRef(debounce(fetchData, 200));

    const handleSearch = async (event: any) => {
        const searchParms = event.target.value;
        setSearchParms(searchParms);
        setStatus("loading");
        if (!searchParms) {
            abortControllerRef?.current?.abort
            setStatus("idle");
            setData({});
            return;
        }         
    };

    useEffect(() => {
        debouncedFetchDataRef.current(searchParms);
    }, [searchParms]);

    return (
        <div className=" flex items-center gap-2 pl-3 w-full overflow-hidden">
            <Input
                value={searchParms}
                onChange={handleSearch}
                className=" !ring-0 !border-0 !w-[85%] sm:!w-[93%] !min-h-[40px] " placeholder=" Search by your prof name... " 
            />
            <button className={` flex justify-center items-center w-[15%] sm:w-[7%] h-full duration-300 transition-all hover:scale-110 cursor-pointer ${status === "loading" && "animate-spin"} `} >
                {
                    status === "loading" ? (
                        <FontAwesomeIcon className=" text-gray-500 w-full h-full  " icon={faSpinner} />                            
                    ) : (
                        <FontAwesomeIcon 
                            className=" text-gray-500 w-full h-full  " icon={faSearch} 
                            onClick={() => {
                                setStatus("loading");
                                fetchData(searchParms);
                            }}
                        />
                    )
                }
            </button>
        </div>
    )
}


export default SearchBar