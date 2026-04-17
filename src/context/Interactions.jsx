import { useState } from "react";
import { createContext } from 'react';

export const FriendContext = createContext();

const Interactions = ({ children }) => {

    const [timeline, setTimeline] = useState([]);

    const handleInteraction = (friend, type) => {
        const newInteraction = {
            friend: `${friend.name}`,
            type: `${type}`,
            date: Date.now(),
            id: Date.now()
        }

        setTimeline(prev => [newInteraction, ...prev])
    }

    const data = {
        timeline,
        handleInteraction
    }

    return (
        <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
    );
};

export default Interactions;