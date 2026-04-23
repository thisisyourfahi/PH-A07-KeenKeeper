import ProfileAction from "./ProfileAction";
import Top from "./Top";

const ProfileRight = ({ friend }) => {
    return (
        <div>
            <Top friend={friend} />

            {/* actions here */}
            <div>
                <ProfileAction friend={friend}/>
            </div>
        </div>
    );
};

export default ProfileRight;