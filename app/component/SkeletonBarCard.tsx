import SkeletonImage from "antd/es/skeleton/Image"
import SkeletonInput from "antd/es/skeleton/Input"

const SkeletonPersonelBarCard = () => {
    return(
        <li className=" flex gap-4 w-full" >
            <SkeletonImage className=" !h-[80px] !w-[80px] " active/>
            <div className=" flex flex-col gap-2 w-full ">
              <SkeletonInput className=" !w-full !h-2 " active/>
              <SkeletonInput className=" !w-[60%] !h-2 " active/>
              <SkeletonInput className=" !w-[40%] !h-2 " active/>
            </div>
        </li>
    )
}

export default SkeletonPersonelBarCard;