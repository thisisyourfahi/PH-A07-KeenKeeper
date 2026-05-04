import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { IoArchiveOutline } from "react-icons/io5";

const ProfileLeftBottom = () => {
    return (
        <div className="space-y-4 mt-4">
            <button className="flex items-center justify-center p-2 gap-1 border border-neutral-200 rounded-md w-full">
                <HiOutlineBellSnooze size={20} />
                <p className="font-bold">Snooze 2 Weeks</p>
            </button>
            <button className="flex items-center justify-center p-2 gap-1 border border-neutral-200 rounded-md w-full">
                <IoArchiveOutline size={20} />
                <p className="font-bold">Archive</p>
            </button>
            <button className="flex items-center justify-center p-2 gap-1 border border-neutral-200 rounded-md w-full btn-error">
                <FaRegTrashAlt size={20} />
                <p className="font-bold">Delete</p>
            </button>
        </div>
    );
};

export default ProfileLeftBottom;