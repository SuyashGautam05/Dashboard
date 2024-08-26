import React, { useState } from 'react';
import { Box, CssBaseline, Typography, IconButton, Avatar, Menu, MenuItem, InputBase, Tooltip } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FeedbackIcon from '@mui/icons-material/Feedback';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkIcon from '@mui/icons-material/Work';
import ReceiptIcon from '@mui/icons-material/Receipt';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import PeopleIcon from '@mui/icons-material/People';
import ForumIcon from '@mui/icons-material/Forum';
import DescriptionIcon from '@mui/icons-material/Description';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const SidebarItem = ({ icon, text, isActive, onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      display: 'flex',
      alignItems: 'center',
      mb: 1,
      p: 1.5,
      cursor: 'pointer',
      bgcolor: isActive ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
      '&:hover': { bgcolor: 'rgba(25, 118, 210, 0.08)' },
      borderRadius: 1,
      transition: 'background-color 0.3s',
    }}
  >
    {React.cloneElement(icon, { sx: { color: isActive ? '#1976d2' : '#757575', fontSize: 22 } })}
    <Typography sx={{ ml: 2, color: isActive ? '#1976d2' : '#757575', fontSize: 14, fontWeight: isActive ? 600 : 400 }}>{text}</Typography>
  </Box>
);

function App() {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#f5f5f5' }}>
      <CssBaseline />
      <Box sx={{ width: 60, bgcolor: '#1976d2', display: 'flex', flexDirection: 'column', alignItems: 'center', py: 2 }}>
        <Typography sx={{ fontWeight: 'bold', mb: 3, color: '#fff', fontSize: 20 }}>ZH</Typography>
        <Tooltip title="Apps" placement="right">
          <IconButton sx={{ mb: 2, color: '#fff' }}><AppsIcon /></IconButton>
        </Tooltip>
        <Tooltip title="People" placement="right">
          <IconButton sx={{ mb: 2, color: '#fff' }}><PeopleIcon /></IconButton>
        </Tooltip>
        <Tooltip title="Messages" placement="right">
          <IconButton sx={{ mb: 2, color: '#fff' }}><ForumIcon /></IconButton>
        </Tooltip>
        <Tooltip title="Documents" placement="right">
          <IconButton sx={{ color: '#fff' }}><DescriptionIcon /></IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ width: 250, bgcolor: '#fff', borderRight: '1px solid #e0e0e0', p: 2, overflowY: 'auto', boxShadow: 1 }}>
        {[
          { icon: <DashboardIcon />, text: 'Dashboard' },
          { icon: <FeedbackIcon />, text: 'Feedbacks' },
          { icon: <EventNoteIcon />, text: 'Leaves' },
          { icon: <AccessTimeIcon />, text: 'Attendance' },
          { icon: <WorkIcon />, text: 'Daily Timesheet' },
          { icon: <WorkIcon />, text: 'Work Log' },
          { icon: <ReceiptIcon />, text: 'Reimbursements' },
          { icon: <BarChartIcon />, text: 'Reports' },
          { icon: <AccountBalanceWalletIcon />, text: 'My Expenses' },
          { icon: <AttachMoneyIcon />, text: 'Income' },
          { icon: <CategoryIcon />, text: 'Categories' },
          { icon: <SettingsIcon />, text: 'Settings' },
        ].map((item) => (
          <SidebarItem 
            key={item.text}
            icon={item.icon} 
            text={item.text} 
            isActive={activeItem === item.text}
            onClick={() => setActiveItem(item.text)}
          />
        ))}
      </Box>
      <Box sx={{ flexGrow: 1, bgcolor: '#fff', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2, borderBottom: '1px solid #e0e0e0', bgcolor: '#fff', boxShadow: 1 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ mr: 2, color: '#757575', fontSize: 14 }}>00:03:20</Typography>
            <IconButton onClick={handleClick}>
              <Avatar src="/path-to-profile-image.jpg" sx={{ width: 40, height: 40 }}>JD</Avatar>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
                <PersonIcon sx={{ mr: 1 }} /> John Doe
              </MenuItem>
              <MenuItem>UI/UX Designer</MenuItem>
              <MenuItem>
                <AccountCircleIcon sx={{ mr: 1 }} /> Profile
              </MenuItem>
              <MenuItem>Account Setting</MenuItem>
              <MenuItem>
                <ExitToAppIcon sx={{ mr: 1 }} /> Logout
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        <Box sx={{ p: 3, flexGrow: 1, overflowY: 'auto' }}>
          {/* Main content area */}
          <Typography variant="h4" sx={{ mb: 2 }}>Welcome to {activeItem}</Typography>
          <Typography variant="body1">This is the main content area for {activeItem}. Add your specific content here.</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default App;