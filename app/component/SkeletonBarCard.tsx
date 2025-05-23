import SkeletonImage from "antd/es/skeleton/Image"
import SkeletonInput from "antd/es/skeleton/Input"

const SkeletonPersonelBarCard = () => {
    return(
        <li className=" flex justify-center items-center gap-4 w-full pl-3" >
            <SkeletonImage className=" !h-[40px] !w-[40px] px-1 " active/>
            <SkeletonInput className=" !w-full !h-2 " active/>
            {/* <div className=" flex flex-col gap-2 w-full ">
              <SkeletonInput className=" !w-[60%] !h-2 " active/>
              <SkeletonInput className=" !w-[40%] !h-2 " active/>
            </div> */}
        </li>
    )
}

export default SkeletonPersonelBarCard;