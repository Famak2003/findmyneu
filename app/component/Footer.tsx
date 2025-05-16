import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="text-[14px] h-[4dvh] flex flex-col pb-5 gap- justify-center items-center text-gray-300 ">
            <Link href={"https://punica.app/"} target="_blank" className=" flex gap-1 items-center justify-center " >
            <small className="  font-semibold  ">
                Powered by 
                {/* <span className="text-red-800">PUNICA</span> */}
            </small>
            <Image src={"https://punica.app/assets/punica-logo-LtvqPgT7.png"} alt="punica-logo" width={80} height={80} />
            </Link>
            <small className="">&copy; 2025 . All rights reserved.</small>
        </footer>
    );
}

export default Footer;