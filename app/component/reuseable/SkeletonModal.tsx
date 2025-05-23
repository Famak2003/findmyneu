import SkeletonImage from "antd/es/skeleton/Image"
import SkeletonInput from "antd/es/skeleton/Input"

const SkeletonModal = () => {
    return (
        <div className=" skeletonModal " >
            <figure className=" skeletonModalImageContainer " >
                <SkeletonImage className=" !w-full !h-full " active />
            </figure>
             <div className=" flex flex-col gap-3 w-full text-black ">
                <SkeletonInput className=" !w-[90%] !h-[8px] " active />
                <SkeletonInput className=" !w-[85%] !h-[8px] " active />
                <SkeletonInput className=" !w-[60%] !h-[8px] " active />
                <SkeletonInput className=" !w-[80%] !h-[8px] " active />
                <SkeletonInput className=" !w-[75%] !h-[8px] " active />
            </div>
        </div>
    )
}

export default SkeletonModal