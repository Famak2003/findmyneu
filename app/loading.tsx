const PUNICALOGO = '/punica-loading.gif'

const Loading = () => {
    return(
        <div className=" flex justify-center items-center w-screen h-[100dvh] ">
            <img className=" w-full h-full object-cover " src={PUNICALOGO} alt="punica loading screen" />
        </div>
    )
}
export default Loading