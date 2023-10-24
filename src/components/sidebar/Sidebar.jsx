import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
/*import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';*/
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Link} from "react-router-dom"
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
	const {dispatch} = useContext(DarkModeContext);
    return (
        <div className="sidebar">
        	<div className="top">
				<Link to="/" style={{textDecoration:"none"}}>
				
				<span className="logo">lamaadmin</span>
				</Link>
				</div>
        	<div className="center">
        		<ul>
        			<p className="title">MAIN</p>
        			<li>        			
        			<DashboardIcon className="icon" />
        				<span>Dashboard</span>
        			</li>

        			<p className="title">LISTS</p>
					<Link to="/users" style={{textDecoration:"none"}}>
						<li>        			
						<PersonIcon className="icon" />
							<span>Users</span>
						</li>
					</Link>

					<Link to="/products" style={{textDecoration:"none"}}>
						<li>
						<Inventory2RoundedIcon className="icon" />
							<span>Products</span>
						</li>
					</Link>

        			<li>
        			<LocalShippingOutlinedIcon className="icon" />
        				<span>Orders</span>
        			</li>

        			<li>
        			<EqualizerOutlinedIcon className="icon" />
        				<span>Delivery</span>
        			</li>

        			<p className="title">USEFUL</p>
        			<li>
        			<NotificationsActiveRoundedIcon className="icon" />
        				<span>Stats</span>
        			</li>

        			<li>
        			<DnsRoundedIcon className="icon" />
        				<span>Notifications</span>
        			</li>

        			<p className="title">SERVICE</p>
        			<li>
        			<SettingsSharpIcon className="icon" />
        				<span>System health</span>
        			</li>

        			<li>
        			<PsychologyOutlinedIcon className="icon" />
        				<span>Logs</span>
        			</li>

        			<li>
        			<SettingsSharpIcon className="icon" />
        				<span>Settings</span>
        			</li>

        			<p className="title">USER</p>
        			<li>
        			<PortraitOutlinedIcon className="icon" />
        				<span>Profile</span>
        			</li>

        			<li>
        			<ExitToAppIcon className="icon" />
        				<span>Logout</span>
        			</li>

        		</ul>
        	</div>
        	<div className="bottom">
        		<div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
        		<div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
        		
        	</div>
        </div>
    )
}
export default Sidebar;