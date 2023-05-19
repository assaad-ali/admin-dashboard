import './sidebar.scss'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TimelineIcon from '@mui/icons-material/Timeline';
import GroupIcon from '@mui/icons-material/Group';
import InventoryIcon from '@mui/icons-material/Inventory';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ReportIcon from '@mui/icons-material/Report';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RateReviewIcon from '@mui/icons-material/RateReview';
import MessageIcon from '@mui/icons-material/Message';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-wrapper">
            <div className="sidebar-menu">
                <h3 className="sidebar-title">Dashboard</h3>
                <ul className='sidebar-list'>
                    <Link to="/" className='link'>
                    <li className="sidebar-item">
                        <LineStyleIcon className='icon'/>
                        <span>Home</span>
                    </li>
                    </Link>
                    <li className="sidebar-item">
                        <TimelineIcon className='icon'/>
                        <span>Analytics</span>
                    </li>
                    <li className="sidebar-item">
                        <TrendingUpIcon className='icon'/>
                        <span>Sales</span>
                    </li>
                </ul>
            </div>
            <div className="sidebar-menu">
                <h3 className="sidebar-title">Quick Menu</h3>
                <ul className='sidebar-list'>
                    <Link to="/users" className='link'>
                    <li className="sidebar-item">
                        <GroupIcon className='icon'/>
                        <span>Users</span>
                    </li>
                    </Link>
                    <Link to="products" className='link'>
                    <li className="sidebar-item">
                        <InventoryIcon className='icon'/>
                        <span>Products</span>
                    </li>
                    </Link>
                    <li className="sidebar-item">
                        <PaidOutlinedIcon className='icon'/>
                        <span>Transactions</span>
                    </li>
                    <li className="sidebar-item">
                        <BarChartIcon className='icon'/>
                        <span>Reports</span>
                    </li>
                </ul>
            </div>
            <div className="sidebar-menu">
                <h3 className="sidebar-title">Notifications</h3>
                <ul className='sidebar-list'>
                    <li className="sidebar-item">
                        <MailOutlineIcon className='icon'/>
                        <span>Mail</span>
                    </li>
                    <li className="sidebar-item">
                        <RateReviewIcon className='icon'/>
                        <span>Feedbacks</span>
                    </li>
                    <li className="sidebar-item">
                        <MessageIcon className='icon'/>
                        <span>Messages</span>
                    </li>
                </ul>
            </div>
            <div className="sidebar-menu">
                <h3 className="sidebar-title">Systems</h3>
                <ul className='sidebar-list'>
                    <li className="sidebar-item">
                        <ManageAccountsIcon className='icon'/>
                        <span>Manage</span>
                    </li>
                    <li className="sidebar-item">
                        <TrendingUpIcon className='icon'/>
                        <span>Analytics</span>
                    </li>
                    <li className="sidebar-item">
                        <ReportIcon className='icon'/>
                        <span>Reports</span>
                    </li>
                </ul>
            </div>
            

        </div>
    </div>
  )
}
