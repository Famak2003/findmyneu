import Image from "next/image";
import SearchBar, { SearchBarProps } from "./SearchBar";

const Header = ({status, setData, setStatus, setSearchParms}: SearchBarProps) => {
    return (
        <div className=" flex flex-col gap-8 w-full ">
            <header className=" flex flex-col gap-4 justify-center items-center " >
                <figure className=" h-[70px] aspect-square rounded-full overflow-hidden " >
                    <img className=" w-full h-full" src={"./near_east_logo.png"} alt="Near East Logo" width={70} height={70} />
                </figure>
                <h1 className="text-4xl font-semibold text-center text-black">Find my NEU</h1>
            </header>
            <SearchBar status={status} setData={setData} setStatus={setStatus} setSearchParms={setSearchParms} />
        </div>
    );
}

export default Header;