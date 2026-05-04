'use client'
import { createContext, useState } from "react";
export const FriendsContexts = createContext();

const FriendProvider = ({children}) => {
    const [timeline, setTimeline] = useState([])
    const info = {timeline, setTimeline}
    return (
        <FriendsContexts.Provider value={info}>
            {children}
        </FriendsContexts.Provider>
    )
}

export default FriendProvider;