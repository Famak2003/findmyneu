// import I18N from "@/i18n";
import { Modal } from "antd"
import { ReactNode } from "react";

export interface CustomModalProps {
    isModalVisible: boolean;
    setIsModalVisible: (visible: boolean) => void;
    // handleSubmit: () => void;
    title?: string
    loading?: boolean;
    children: ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ isModalVisible, setIsModalVisible, title, children}) => {

    return(
        <Modal 
            // title={ <h1 className=" uppercase font-bold text-[20px] "><I18N>{title}</I18N></h1> }
            title={ <h1 className=" uppercase font-bold text-[20px] ">{title}</h1> }
            open={isModalVisible}
            className=' !w-[90%] mobile:!w-[400px] sm:!w-[650px] '           
            cancelButtonProps={{ style: { display: 'none' } }}
            okButtonProps={{ style: { backgroundColor: 'black', color: "white" } }}
            okText={"close"}
            onCancel={() => setIsModalVisible(false)}
            onOk={() => setIsModalVisible(false)}
        >
            <div className=" flex gap-6 min-h-[150px] ">
                {children}
            </div>
        </Modal>
    )
}

export default CustomModal