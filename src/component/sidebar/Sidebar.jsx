import './sidebar.scss'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TimelineIcon from '@mui/icons-material/Timeline';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-wrapper">
            <div className="sidebarmenu">
                <h3 className="sidebar-title">Admin</h3>
                    <ul className='sidebar-list'>
                        <li className="sidebar-item">
                            <LineStyleIcon/>
                            Home
                        </li>
                        <li className="sidebar-item">
                            <TimelineIcon/>
                            Analytics
                        </li>
                        <li className="sidebar-item">
                            <TrendingUpIcon/>
                            Sales
                        </li>
                    </ul>
            </div>
        </div>
    </div>
  )
}
