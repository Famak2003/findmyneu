import api from "@/lib/axios"
import debounce from "@/utils/debounce"
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Input } from "antd"
import { useEffect, useRef } from "react"

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
        // Check if the searchParams is empty
        // if (!searchParms) {
        //     console.log("searchParms is empty", status);
        //     // abortControllerRef?.current?.abort
        //     setStatus("idle");
        //     setData({});
        //     return;
        // }

        // About Previous Request
        if (abortControllerRef.current){
            abortControllerRef.current.abort
        }

        //Creat new AbortController for new request
        const controller = new AbortController();
        abortControllerRef.current = controller;
        try {
            const res = await api.get(`employee/find-my-neu/autocomplete/${searchParams}`,{
                signal: controller.signal
            })
            const data = res.data.data
            // console.log(data)
            if(searchParams !== "") {
                setStatus("result");
                setData({
                    personel: data?.personel,
                    location: [
                        ...data?.offices,
                        ...data?.branches
                    ]
                })
            }else {
                setStatus("idle");
                setData({});
            }
    
    
        } catch (error) {
            setStatus("idle");
            console.error("Error fetching data:", error);
        }
    }
    const debouncedFetchDataRef = useRef(debounce(fetchData, 200));

    const handleSearch = async (event: any) => {
        const searchParms = event.target.value;
        setSearchParms(searchParms);
        setStatus("loading");
        if (!searchParms) {
            console.log("searchParms is empty");
            abortControllerRef?.current?.abort
            setStatus("idle");
            setData({});
            return;
        }

        // debouncedFetchDataRef.current(searchParms);

        // try {
        //     const res = await api.get(`employee/find-my-neu/autocomplete/${searchParams}`)
        //     setStatus("result");
        //     const data = res.data.data
        //     console.log(data)
        //     setData({
        //         personel: data?.personel,
        //         location: [
        //             ...data?.offices,
        //             ...data?.branches
        //         ]
        //     })
        
        
        // } catch (error) {
        //     setStatus("idle");
        //     console.error("Error fetching data:", error);
        // }
        
    };

    useEffect(() => {
        if (searchParms) {
            debouncedFetchDataRef.current(searchParms);
        }
    }, [searchParms]);

    // const debouncedSearch = debounce(handleSearch, 500)

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