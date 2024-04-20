import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import CloudIcon from '@mui/icons-material/Cloud';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from '@mui/material/ListItemText';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import AddCardIcon from '@mui/icons-material/AddCard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Button from '@mui/material/Button';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ListCard from './ListCards/ListCard';
import { mapOrder } from '../../../../../utils/sort';

export default function Column({ column }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // this comment build fenkins

    return (
        <Box sx={{
            minWidth: '300px',
            maxWidth: '300px',
            bgcolor: (theme) => theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
            ml: 2,
            borderRadius: '6px',
            height: 'fit-content',
            maxHeight: (theme) => `calc(${theme.trello.broadContentHeight} - ${theme.spacing(5)})`
        }}>
            { /* Box column header */}
            <Box sx={{
                height: (theme) => theme.trello.broadContentHeaderHeight,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Typography variant='h6' sx={{ fontWeight: 'bold', cursor: 'pointer' }}>{column?.title}</Typography>
                <Tooltip title="more options">
                    <ExpandMoreIcon
                        sx={{ color: 'text.primary', cursor: 'pointer' }}
                        id="basic-column-dropdown"
                        aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    />
                </Tooltip>
                <Menu
                    id="basic-menu-workspaces"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button-workspaces'
                    }}
                >
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon><AddCardIcon fontSize='small' /></ListItemIcon>
                        <ListItemText>Add column</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon><ContentCutIcon fontSize='small' /></ListItemIcon>
                        <ListItemText>Cut this column</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon><ContentCopyIcon fontSize='small' /></ListItemIcon>
                        <ListItemText>Copy this column</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon><ContentPasteIcon fontSize='small' /></ListItemIcon>
                        <ListItemText>Paste this column</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon><DeleteIcon fontSize='small' /></ListItemIcon>
                        <ListItemText>Delete this column</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon><CloudIcon fontSize='small' /></ListItemIcon>
                        <ListItemText>Archive this column</ListItemText>
                    </MenuItem>
                </Menu>
            </Box>
            <ListCard cards={orderedCard} />
            { /* Box column footer */}
            <Box sx={{
                height: (theme) => theme.trello.broadContentFooterHeight,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Button startIcon={<AddCardIcon />}>Add new card</Button>
                <Tooltip title="Drap to move">
                    <DragHandleIcon sx={{ cursor: 'pointer' }} />
                </Tooltip>
            </Box>
        </Box>
    );
}
