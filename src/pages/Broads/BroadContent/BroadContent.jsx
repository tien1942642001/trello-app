import Box from '@mui/material/Box';
import ListColumns from './ListColumns/ListColumns';
import { mapOrder } from '../../../utils/sort';

export default function BroadContent({ broad }) {
    const orderedColumns = mapOrder(broad?.columns, broad?.columnOrderIds, '_id');
    return (
        <Box sx={{
            bgcolor: (theme) => theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
            height: (theme) => theme.trello.broadContentHeight,
            width: '100%',
            p: '10px 0'
        }}>
            <ListColumns columns={orderedColumns} />
        </Box>
    );
}
