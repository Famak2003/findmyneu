import Image from "next/image"

const PUNICALOGO = '/punica-loading.gif'

const Loading = () => {
    return(
        <div className=" flex justify-center items-center w-screen h-[100dvh] ">
            <Image className=" w-full h-full " src={PUNICALOGO} alt="punica loading screen" />
        </div>
    )
}
export default Loading