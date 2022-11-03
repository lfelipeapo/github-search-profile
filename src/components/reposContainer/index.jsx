import {
    Section,
    Title,
    ListOfReposContainer,
    Repo,
    InputContainer,
    Input,
    SearchButton,
    FiltersContainer,
    Filters,
    ClearFiltersButton,
} from "./styles";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const ReposContainer = (props) => {
    const [repos, setRepos] = useState(props?.repos);
    const [searchValue, setSearchValue] = useState("");
    const filters = [
        "Arquivados",
        "Ativos",
        "Ordem Alfabética Decrescente",
        "Ordem Alfabética Crescente",
        "Por Data do Últ. Commit",
    ];
    const filterRepos = () => {
        function findRepoByName(value) {
            const valueSearched = String(value.name);
            let matchesRegex = valueSearched.match(searchValue);
            if (matchesRegex) return value;
        }
        let filteredRepos = repos.filter(findRepoByName);
        if (searchValue !== "") setRepos(filteredRepos);
        else setRepos(props?.repos);
    };
    const onChangeFilter = (e) => {
        const filter = e.target.value;
        switch (filter) {
            case "Arquivados":
                setRepos(repos.filter((repo) => repo.archived === true));
                break;
            case "Ativos":
                setRepos(props?.repos);
                setRepos(repos.filter((repo) => repo.archived === false));
                break;
            case "Ordem Alfabética Decrescente":
                const arrFiltered = repos.filter((repo) => repo.name);
                setRepos(
                    arrFiltered.sort((a, b) => {
                        let x = a.name.toLowerCase(),
                            y = b.name.toLowerCase();
                        if (x > y) return -1;
                        if (x < y) return 1;
                        return 0;
                    })
                );
                break;
            case "Ordem Alfabética Crescente":
                setRepos(props?.repos);
                const reposWithFilter = repos.filter((repo) => repo.name);
                setRepos(
                    reposWithFilter.sort((a, b) => {
                        let x = a.name.toLowerCase(),
                            y = b.name.toLowerCase();
                        if (x < y) return -1;
                        if (x > y) return 1;
                        return 0;
                    })
                );
                break;
            case "Por Data do Últ. Commit":
                const reposFiltered = repos.filter((repo) => repo.pushed_at);
                setRepos(
                    reposFiltered.sort((x, y) => {
                        let a = new Date(x.pushed_at),
                            b = new Date(y.pushed_at);
                        return b - a;
                    })
                );
                break;
            default:
                setRepos(props?.repos);
                break;
        }
    };

    return (
        <Section>
            <Title>Repositórios de {props.name?.split(" ")[0]}</Title>
            <ListOfReposContainer>
                <InputContainer>
                    <Input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <SearchButton onClick={filterRepos}>
                        <FiSearch size={15} />
                    </SearchButton>
                    <ClearFiltersButton
                        onClick={() => {
                            setRepos(props?.repos);
                            setSearchValue("");
                        }}
                    >
                        Limpar
                    </ClearFiltersButton>
                </InputContainer>
                <FiltersContainer>
                    <Filters
                        onChange={onChangeFilter}
                        defaultValue={filters[4]}
                    >
                        {filters.map((filter, index) => (
                            <option key={index} value={filter}>
                                {filter}
                            </option>
                        ))}
                    </Filters>
                </FiltersContainer>
                {repos.map((repo) => (
                    <Repo
                        onClick={() => window.location.replace(repo?.html_url)}
                        key={repo?.id}
                    >
                        <h2 style={{ cursor: "pointer" }}>{repo?.name}</h2>
                        <p>{repo?.description}</p>
                    </Repo>
                ))}
            </ListOfReposContainer>
        </Section>
    );
};

export default ReposContainer;
