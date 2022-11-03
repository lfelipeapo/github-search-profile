import {
    Section,
    Title,
    ListOfFollowingsContainer,
    Following,
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
import { Container } from "../userPicture/styles";

const FollowingsContainer = (props) => {
    console.log(props);
    const [followings, setFollowings] = useState(props?.followings);
    const [searchValue, setSearchValue] = useState("");
    const filters = [
        "Ordem Alfabética Decrescente",
        "Ordem Alfabética Crescente",
    ];
    const filterFollowings = () => {
        function findFollowingByName(value) {
            const valueSearched = String(value.login);
            let matchesRegex = valueSearched.match(searchValue);
            if (matchesRegex) return value;
        }
        let filteredFollowings = followings.filter(findFollowingByName);
        if (searchValue !== "") setFollowings(filteredFollowings);
        else setFollowings(props?.followings);
    };
    const onChangeFilter = (e) => {
        const filter = e.target.value;
        switch (filter) {
            case "Ordem Alfabética Decrescente":
                const arrFiltered = followings.filter(
                    (following) => following.login
                );
                setFollowings(
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
                setFollowings(props?.followings);
                let FollowingsFiltered = followings.filter((following) => following.login);
                setFollowings(
                    FollowingsFiltered.sort((a, b) => {
                        let x = a.login.toLowerCase(),
                            y = b.login.toLowerCase();
                        if (x < y) return -1;
                        if (x > y) return 1;
                        return 0;
                    })
                );
                break;
            default:
                setFollowings(props?.followings);
                break;
        }
    };

    return (
        <Section>
            <Title>Quem {props.name?.split(" ")[0]} está seguindo</Title>
            <ListOfFollowingsContainer>
                <InputContainer>
                    <Input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <SearchButton onClick={filterFollowings}>
                        <FiSearch size={15} />
                    </SearchButton>
                    <ClearFiltersButton
                        onClick={() => {
                            setFollowings(props?.followings);
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
                {followings.map((following) => (
                    <Following
                        onClick={() =>
                            window.location.replace(following?.html_url)
                        }
                        key={following?.id}
                    >
                        <UserPicture
                            url={following?.avatar_url}
                            alt={following?.login}
                        />
                        <Container>
                            <h2 style={{ cursor: "pointer" }}>
                                {following?.login}
                            </h2>
                            <p>{following?.type}</p>
                            <p>{following?.html_url}</p>
                        </Container>
                    </Following>
                ))}
            </ListOfFollowingsContainer>
        </Section>
    );
};

export default FollowingsContainer;
