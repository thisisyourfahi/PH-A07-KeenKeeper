import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { IoArchiveOutline } from "react-icons/io5";

const ProfileLeftBottom = () => {
    return (
        <div className="space-y-4 mt-4">
            <div className='rounded-md border border-neutral-300 px-4 py-2 flex items-center justify-center gap-2'>
                <HiOutlineBellSnooze size={20} />
                <p className="font-bold">Snooze 2 Weeks</p>
            </div>
            <div className='rounded-md border border-neutral-300 px-4 py-2 flex items-center justify-center gap-2'>
                <IoArchiveOutline size={20} />
                <p className="font-bold">Archive</p>
            </div>
            <div className='rounded-md border border-neutral-300 px-4 py-2 flex items-center justify-center gap-2 text-red-500'>
                <FaRegTrashAlt size={20} />
                <p className="font-bold">Delete</p>
            </div>
        </div>
    );
};

export default ProfileLeftBottom;