import api from "@/lib/axios"
import debounce from "@/utils/debounce"
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Input } from "antd"

type SearchBarProps = {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setSearchParms: React.Dispatch<React.SetStateAction<string>>;
  setData: React.Dispatch<React.SetStateAction<any>>;
  status: string;
}

const SearchBar = ({setStatus, setSearchParms, setData, status}: SearchBarProps) => {
    const handleSearch = async (event: any) => {
        setSearchParms(event.target.value);
        setStatus("loading");
        const searchParams = event.target.value;
        if (!searchParams) {
            setStatus("idle");
            setData({
                personel: [],
                branches: [],
                offices: []
            });
            return;
        }
        try {
            const res = await api.get(`employee/find-my-neu/${searchParams}`)
            setStatus("result");
            const data = res.data.data
            console.log(data)
            setData(data)
        
        
        } catch (error) {
            setStatus("idle");
            console.error("Error fetching data:", error);
        }
        
    };

    const debouncedSearch = debounce(handleSearch, 500)

    return (
        <div className=" ring-1 ring-gray-400 flex items-center rounded-lg gap-2 pl-3 bg-white max-w-[800px] w-full overflow-hidden ">
            <Input 
              onChange={debouncedSearch}
              className=" !ring-0 !border-0 !w-[85%] sm:!w-[93%] !min-h-[40px] " placeholder=" Search by your prof name... " 
            />
            <button className={` flex justify-center items-center w-[15%] sm:w-[7%] h-full duration-300 transition-all hover:scale-110 cursor-pointer ${status === "loading" && "animate-spin"} `} >
                {
                    status === "loading" ? (
                        <FontAwesomeIcon className=" text-gray-500 w-full h-full  " icon={faSpinner} />                            
                    ) : (
                        <FontAwesomeIcon className=" text-gray-500 w-full h-full  " icon={faSearch} />
                    )
                }
            </button>
        </div>
    )
}


export default SearchBar