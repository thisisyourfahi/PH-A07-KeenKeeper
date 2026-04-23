import FriendCard from "./FriendCard";

const friends = [
    {
        "id": 1,
        "name": "John Doe",
        "picture": "",
        "email": "john.doe@email.com",
        "days_since_contact": 12,
        "status": "overdue",
        "tags": ["college"],
        "bio": "Met in university. Love hiking together on weekends.",
        "goal": 14,
        "next_due_date": "2025-07-20"
    },
    {
        "id": 2,
        "name": "Sarah Chen",
        "picture": "",
        "email": "sarah.chen@email.com",
        "days_since_contact": 4,
        "status": "on-track",
        "tags": ["work", "mentor"],
        "bio": "Senior colleague from my first tech job. We grab coffee monthly.",
        "goal": 30,
        "next_due_date": "2025-08-18"
    },
    {
        "id": 3,
        "name": "Michael Rodriguez",
        "picture": "",
        "email": "m.rodriguez@email.com",
        "days_since_contact": 28,
        "status": "overdue",
        "tags": ["distant"],
        "bio": "Grew up together in the same neighborhood. Haven't caught up in a while.",
        "goal": 60,
        "next_due_date": "2025-06-10"
    },
    {
        "id": 4,
        "name": "Emma Williams",
        "picture": "",
        "email": "emma.w@email.com",
        "days_since_contact": 3,
        "status": "on-track",
        "tags": ["roommate", "close friend"],
        "bio": "Current roommate. We work out together and cook dinner most nights.",
        "goal": 7,
        "next_due_date": "2025-07-28"
    },
    {
        "id": 5,
        "name": "David Park",
        "picture": "",
        "email": "david.park@email.com",
        "days_since_contact": 18,
        "status": "almost due",
        "tags": ["online gaming"],
        "bio": "Met through gaming community 5 years ago. Lives in another country.",
        "goal": 21,
        "next_due_date": "2025-08-08"
    },
    {
        "id": 6,
        "name": "Jessica Martinez",
        "picture": "",
        "email": "jess.martinez@email.com",
        "days_since_contact": 7,
        "status": "on-track",
        "tags": ["new friend"],
        "bio": "Met at my yoga studio last year. Great energy and super supportive.",
        "goal": 14,
        "next_due_date": "2025-08-04"
    },
    {
        "id": 7,
        "name": "Thomas Anderson",
        "picture": "",
        "email": "t.anderson@email.com",
        "days_since_contact": 19,
        "status": "almost due",
        "tags": ["high school friend"],
        "bio": "Best friend from high school. We try to meet up a few times a year.",
        "goal": 30,
        "next_due_date": "2025-07-12"
    },
    {
        "id": 8,
        "name": "Priya Patel",
        "picture": "",
        "email": "priya.patel@email.com",
        "days_since_contact": 1,
        "status": "on-track",
        "tags": ["travel buddy",],
        "bio": "One of my best friends. We travel together and support each other through everything.",
        "goal": 10,
        "next_due_date": "2025-08-30"
    }
]

const FriendsContainer = () => {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold">Your Friends</h2>

            <div className='grid grid-cols-2 md:grid-cols-2 l lg:grid-cols-4 gap-8'>
                {
                    friends.map(friend => <FriendCard key={friend.id} friend={friend}></FriendCard>)
                }
            </div>
        </div>
    );
};

export default FriendsContainer;