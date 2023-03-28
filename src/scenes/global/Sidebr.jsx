import {useState} from 'react';
import {useProSidebar,Sidebar,Menu,MenuItem,SubMenu} from 'react-pro-sidebar';
//import 'react-pro-sidebar/dist/styles';
import { Box,IconButton,Typography,useTheme } from '@mui/material';
import {Link} from 'react-router-dom';
import { tokens } from '../../theme';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { borderRight } from '@mui/system';


const Item =({title,to,icon,selected,setSelected}) =>{
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <MenuItem active = {selected === title}
    style ={{color:colors.grey[100]}}
    onClick = {()=>setSelected(title)}
    icon = {icon}
    component={<Link to={to} />}
    >
    <Typography>{title}</Typography>
    
    </MenuItem>
  )


}

const Sidebr = ()=>{
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    
    const [selected,setSelected] = useState('Dashboard');

     
   return <Box
   height='100%'
   backgroundColor = {colors.primary[400]}

   sx={{
    "& .pro-sidebar-inner": {
      background: `${colors.primary[400]} !important`,
    },
    "& .pro-icon-wrapper": {
      backgroundColor: "transparent !important",
    },
    "& .pro-inner-item": {
      padding: "5px 35px 5px 20px !important",
    },
    "& .pro-inner-item:hover": {
      color: "#6870fa !important",
    },
    "& .pro-menu-item.active": {
      color: "#6870fa !important",
    },
    "& .css-1wvake5": {
      borderRight: "#6870fa !important",
    },
  }}>

    <Sidebar
    backgroundColor={colors.primary[400]}
     >
      

    <Menu>
    <MenuItem>
          {!collapsed ? (
               <Box
               display="flex"
               justifyContent="space-between"
               alignItems="center"
               ml="15px"
             >
               <Typography variant="h3" color={colors.grey[100]}>
                 ADMINIS
               </Typography>
               <IconButton onClick={() => collapseSidebar()}>
                 <MenuOutlinedIcon />
               </IconButton>
             </Box>
          ):(<IconButton onClick={() => collapseSidebar()}>
          <MenuOutlinedIcon />
        </IconButton>)
          }
           
           </MenuItem>
    
           
      
      <MenuItem
        style={{
          margin: "10px 0 20px 0",
          color: colors.grey[100],
        }}
      >
      </MenuItem>
    
     

    {/* user */}
    {!collapsed && (<Box mb='25px'>
      <Box display = "flex" justifyContent='center' alignItems='center'>
        <img 
        alt ="profile-user"
        width = "100px"
        height="100px"
        src={`../../assets/user.png`}
        style = {{cursor:"pointer",borderRadius:"50%"}}/>
      </Box>
      <Box textAlign='center'>
        <Typography variant='h2'
         color={colors.grey[100]}
          fontWeight='bold'
          sx = {{m:'10px 0 0 0'}}>Ed Row</Typography>
        <Typography
        variant='h5'
        color={colors.greenAccent[500]}>VP fancy Admin</Typography>
      </Box>
    </Box>)}


    <Box>
    
    
    
    <Item
    title="Dashboard"
    to ='/'
    icon = {<HomeOutlinedIcon/>}
    selected = {selected}
    setSelected = {setSelected}
    />
    <Typography
    variant='h6'
    color={colors.grey[300]}
    sx = {{m:'15px 0 5px 20px'}}>
      Data
    </Typography>
    
    <Item
    title="Manage Team"
    to = 'team'
    icon = {<PeopleOutlinedIcon/>}
    selected = {selected}
    setSelected = {setSelected}
    />
    <Item
    title="Contacts"
    to = '/contacts'
    icon = {<ContactsOutlinedIcon/>}
    selected = {selected}
    setSelected = {setSelected}
    />
    <Item
    title="Invoices Balances"
    to = '/invoices'
    icon = {<ReceiptOutlinedIcon/>}
    selected = {selected}
    setSelected = {setSelected}
    />
    <Typography
    variant='h6'
    color={colors.grey[300]}
    sx = {{m:'15px 0 5px 20px'}}>
      Pages
    </Typography>
    <Item
    title="Profile Form"
    to = '/form'
    icon = {<PersonOutlinedIcon/>}
    selected = {selected}
    setSelected = {setSelected}
    />
    <Item
    title="Calendar"
    to = '/calendar'
    icon = {<CalendarTodayOutlinedIcon/>}
    selected = {selected}
    setSelected = {setSelected}
    />
    <Item
    title="FAQ Page"
    to = '/faq'
    icon = {<PeopleOutlinedIcon/>}
    selected = {selected}
    setSelected = {setSelected}
    />
    <Typography
    variant='h6'
    color={colors.grey[300]}
    sx = {{m:'15px 0 5px 20px'}}>
      Charts
    </Typography>
    <Item
    title="Bar Chart"
    to = '/bar'
    icon = {<BarChartOutlinedIcon/>}
    selected = {selected}
    setSelected = {setSelected}
    />
    <Item
    title="Pie Chart"
    to = '/pie'
    icon = {<PieChartOutlineOutlinedIcon/>}
    selected = {selected}
    setSelected = {setSelected}
    />
    <Item
    title="Line Chart"
    to = '/line'
    icon = {<TimelineOutlinedIcon/>}
    selected = {selected}
    setSelected = {setSelected}
    />
    <Item
    title="Geography Chart"
    to = '/geography'
    icon = {<MapOutlinedIcon/>}
    selected = {selected}
    setSelected = {setSelected}
    />
    
    

  </Box>

  </Menu>
  

    </Sidebar>
    </Box>
   

}
export default Sidebr;
