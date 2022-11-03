import React, { useState, createContext } from 'react';

export const context = createContext();

export const ContextProvider = (props) => {
    const [userData, setUserData] = useState({});
    const [userRepos, setUserRepos] = useState([]);
    const [userFollowers, setUserFollowers] = useState([]);
    const [userFollowing, setUserFollowing] = useState([]);

    return (
        <context.Provider
            value={{
                userData,
                userRepos,
                userFollowers,
                userFollowing,
                setUserData,
                setUserRepos,
                setUserFollowers,
                setUserFollowing,
            }}
        >
            {props.children}
        </context.Provider>
    );
}
