import {
    Container,
    ProfilePicture
} from './styles';

const UserPicture = props => (
    <Container>
        <ProfilePicture src={props.url} alt={props.alt} />
    </Container>
);

export default UserPicture;