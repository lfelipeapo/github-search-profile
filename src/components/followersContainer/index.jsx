import {
    Section,
    Title,
    ListOfFollowersContainer,
    Follower,
    InputContainer,
    Input,
    SearchButton,
    FiltersContainer,
    Filters,
    ClearFiltersButton,
} from "./styles";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import UserPicture from "../userPicture";
import { Container } from "./../userPicture/styles";

const FollowersContainer = (props) => {
    const [followers, setFollowers] = useState(props?.followers);
    const [searchValue, setSearchValue] = useState("");
    const filters = [
        "Ordem Alfabética Decrescente",
        "Ordem Alfabética Crescente",
    ];
    const filterFollowers = () => {
        function findFollowerByName(value) {
            const valueSearched = String(value.login);
            let matchesRegex = valueSearched.match(searchValue);
            if (matchesRegex) return value;
        }
        let filteredFollowers = followers.filter(findFollowerByName);
        if (searchValue !== "") setFollowers(filteredFollowers);
        else setFollowers(props?.followers);
    };
    const onChangeFilter = (e) => {
        const filter = e.target.value;
        switch (filter) {
            case "Ordem Alfabética Decrescente":
                const arrFiltered = followers.filter(
                    (follower) => follower.login
                );
                setFollowers(
                    arrFiltered.sort((a, b) => {
                        let x = a.login.toLowerCase(),
                            y = b.login.toLowerCase();
                        if (x > y) return -1;
                        if (x < y) return 1;
                        return 0;
                    })
                );
                break;
            case "Ordem Alfabética Crescente":
                setFollowers(props?.followers);
                let followersFiltered = followers.filter((follower) => follower.login);
                setFollowers(
                    followersFiltered.sort((a, b) => {
                        let x = a.login.toLowerCase(),
                            y = b.login.toLowerCase();
                        if (x < y) return -1;
                        if (x > y) return 1;
                        return 0;
                    })
                );
                break;
            default:
                setFollowers(props?.followers);
                break;
        }
    };

    return (
        <Section>
            <Title>Seguidores de {props.name?.split(" ")[0]}</Title>
            <ListOfFollowersContainer>
                <InputContainer>
                    <Input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <SearchButton onClick={filterFollowers}>
                        <FiSearch size={15} />
                    </SearchButton>
                    <ClearFiltersButton
                        onClick={() => {
                            setFollowers(props?.followers);
                            setSearchValue("");
                        }}
                    >
                        Limpar
                    </ClearFiltersButton>
                </InputContainer>
                <FiltersContainer>
                    <Filters onChange={onChangeFilter}>
                        {filters.map((filter, index) => (
                            <option
                                key={index}
                                value={filter}
                            >
                                {filter}
                            </option>
                        ))}
                    </Filters>
                </FiltersContainer>
                {followers.map((follower) => (
                    <Follower
                        onClick={() =>
                            window.location.replace(follower?.html_url)
                        }
                        key={follower?.id}
                    >
                        <UserPicture
                            url={follower?.avatar_url}
                            alt={follower?.login}
                        />
                        <Container>
                            <h2 style={{ cursor: "pointer" }}>
                                {follower?.login}
                            </h2>
                            <p>{follower?.type}</p>
                            <p>{follower?.html_url}</p>
                        </Container>
                    </Follower>
                ))}
            </ListOfFollowersContainer>
        </Section>
    );
};

export default FollowersContainer;
