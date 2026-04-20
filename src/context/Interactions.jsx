import { useState } from "react";
import { createContext } from 'react';
import { toast } from "react-toastify";
import { addTOLocalDB, getFromLocalDB } from "../utils/localDB";

export const FriendContext = createContext();

const Interactions = ({ children }) => {

    const [timeline, setTimeline] = useState(() => getFromLocalDB());

    const handleInteraction = (friend, type) => {
        const newInteraction = {
            friend: `${friend.name}`,
            type: `${type}`,
            date: Date.now(),
            id: Date.now()
        }

        addTOLocalDB(newInteraction);
        setTimeline(prev => [newInteraction, ...prev]);
        toast.success(`Successfully started ${type} with ${friend.name}`);
    }



    const data = {
        timeline,
        handleInteraction,
    }

    return (
        <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
    );
};

export default Interactions;