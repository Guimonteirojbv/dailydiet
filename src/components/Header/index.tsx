import { Container, Logo, ProfileImage } from "./styles";
import logo from '@/assets/Logo.png'
import userImage from '@/assets/Ellipse.png'

export function Header () {
    return (
        <Container>
            <Logo source={logo}/>
            <ProfileImage source={userImage}/>
        </Container>
    )
}