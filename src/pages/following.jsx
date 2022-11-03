import React, { useContext } from "react";

import Container from "../components/container";
import FollowingsContainer from "../components/followingContainer";

import { context } from "../context";

const Followings = () => {
    const ctx = useContext(context);

    return (
        <Container>
            <FollowingsContainer
                name={ctx.userData.name}
                followings={ctx.userFollowing}
            />
        </Container>
    );
};

export default Followings;
