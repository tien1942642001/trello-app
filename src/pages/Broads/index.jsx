import Box from '@mui/material/Box';

export default function BroadBar() {
    return (
        <Box sx={{
            backgroundColor: 'primary.dark',
            height: (theme) => theme.trello.broadBarHeight,
            width: '100%',
            display: 'flex',
            alignItems: 'center'
        }}>
            Broad bar
        </Box>
    );
}
