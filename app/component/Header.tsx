import Image from "next/image";

const Header = () => {
    return (
        <header className=" flex flex-col gap-4 justify-center items-center " >
            <figure className=" " >
                <Image src={"./radar1.svg"} alt="radar" width={70} height={70} />
            </figure>
            <h1 className="text-4xl font-semibold text-center text-black">Find my NEU</h1>
        </header>
    );
}

export default Header;