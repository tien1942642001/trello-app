import Container from '@mui/material/Container';
import AppBar from '../../components/AppBar/AppBar';
import BroadBar from './BroadBar/BroadBar';
import BroadContent from './BroadContent/BroadContent';

function Broad() {
    return (
        <>
            <Container disableGutters maxWidth='false' sx={{ height: '100vh', backgroundColor: 'primary.main' }}>
                <AppBar />
                <BroadBar />
                <BroadContent />
            </Container>
        </>
    );
}

export default Broad;