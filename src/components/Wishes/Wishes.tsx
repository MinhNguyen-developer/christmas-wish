import React from "react";
import { useRecoilValue } from "recoil";
import { getTasks } from "../../recoil";
import { Typography } from "antd";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";
import { deleteDoc, doc, getFirestore, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const { Text } = Typography;

const Wishes: React.FC = () => {
  const wishes = useRecoilValue(getTasks);

  const handleReject = (id: string) => {
    const ref = doc(getFirestore(), `wishes`, id);
    deleteDoc(ref).then(() =>
      toast("Oops! Điều ước của bạn không thể thực hiện được ngay lúc này")
    );
  };

  const handleAccept = (id: string) => {
    const ref = doc(getFirestore(), `wishes`, id);
    updateDoc(ref, { isAccepted: true }).then(() =>
      toast("Điều ước của bạn sẽ trở thành hiện thực", { type: "success" })
    );
  };

  return (
    <div className="flex items-center justify-center flex-col mt-40 relative z-20">
      {wishes.map((wish) => {
        return (
          <div
            className="flex items-center justify-between p-4 min-w-[400px] bg-gradient-to-r from-red-200 to-purple-300 bg-opacity-10
 mb-4 rounded"
            key={wish.id}
          >
            <div className="flex flex-col">
              <Text className="text-[22px]">Tên: {wish.name}</Text>
              <Text className="text-[22px]">
                Điều ước của bạn: {wish.wishes}
              </Text>
            </div>

            <div className="flex flex-col items-center justify-between min-h-[60px]">
              <BsCheckCircleFill
                className="text-green-400 text-[25px] cursor-pointer"
                onClick={() => handleAccept(wish.id)}
              />
              <MdOutlineDoNotDisturbOn
                className="text-red-700 text-[28px] cursor-pointer"
                onClick={() => handleReject(wish.id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Wishes;
