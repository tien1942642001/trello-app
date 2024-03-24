import Container from '@mui/material/Container';
import AppBar from '../../components/AppBar/AppBar';
import BroadBar from './BroadBar/BroadBar';
import BroadContent from './BroadContent/BroadContent';
import { mockData } from '../../apis/mock-data';
function Broad() {
    return (
        <>
            <Container disableGutters maxWidth='false' sx={{ height: '100vh', backgroundColor: 'primary.main' }}>
                <AppBar />
                <BroadBar broad={mockData?.board} />
                <BroadContent broad={mockData?.board} />
            </Container>
        </>
    );
}

export default Broad;