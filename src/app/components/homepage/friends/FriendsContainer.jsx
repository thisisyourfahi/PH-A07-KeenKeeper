import FriendCard from "./FriendCard";

const FriendsContainer = async() => {
    const res = await fetch('http://localhost:3000/friends.json')
    const friends = await res.json();
    
    return (
        <div className="space-y-8 mb-20">
            <h2 className="text-3xl font-bold">Your Friends</h2>

            <div className='grid grid-cols-2 md:grid-cols-2 l lg:grid-cols-4 gap-8'>
                {
                    friends?.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
                }
            </div>
        </div>
    );
};

export default FriendsContainer;