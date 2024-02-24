import Box from '@mui/material/Box';
import ModeSelect from '../ModeSelect/ModeSelect';
import AppsIcon from '@mui/icons-material/Apps';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { ReactComponent as TrelloIcon } from '../../assets/trello.svg';
import SvgIcon from '@mui/material/SvgIcon';
import Workspaces from './Menus/Workspaces';
import Recent from './Menus/Recent';
import Templates from './Menus/Templates';
import Starred from './Menus/Starred';
import TextField from '@mui/material/TextField';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import Profiles from './Menus/Profiles';

function AppBar() {
    return (
        <Box px={2} sx={{
            backgroundColor: 'white',
            height: (theme) => theme.trello.appBarHeight,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <AppsIcon sx={{ color: 'primary.main' }} />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <SvgIcon component={TrelloIcon} inheritViewBox sx={{ color: 'primary.main' }} />
                    <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>Trello</Typography>
                </Box>

                <Workspaces/>
                <Recent/>
                <Starred/>
                <Templates/>
                <Button variant='outlined'>Created</Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <TextField size='small' id="outlined-search" label="Search" type='search' variant="outlined" />
                <Tooltip title='notification'>
                    <Badge color='secondary' variant='dot' sx={{ cursor: 'pointer' }}>
                        <NotificationsNoneIcon />
                    </Badge>
                </Tooltip>
                <Tooltip title='help'>
                    <HelpOutlineIcon sx={{ cursor: 'pointer' }}/>
                </Tooltip>
                <Profiles/>
                <ModeSelect />
            </Box>
            <ModeSelect />
        </Box>
    );
}

export default AppBar;