import Box from '@mui/material/Box';

export default function BroadContent() {
    return (
        <Box sx={{
            backgroundColor: 'primary.main',
            height: (theme) => `calc(100vh - ${theme.trello.broadBarHeight} - ${theme.trello.appBarHeight})`,
            width: '100%',
            display: 'flex',
            alignItems: 'center'
        }}>Content</Box>
    );
}
