import './topbar.scss'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';

export const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbar-wrapper">
            <div className="top-left">
                <span className="logo">Admin-Dashboard</span>
            </div>
            <div className="top-right">
                <div className="topbar-icon">
                    <NotificationsNoneIcon/>
                    <span className="icon-badge">2</span>
                </div>
                <div className="topbar-icon">
                    <LanguageIcon/>
                    <span className="icon-badge">2</span>
                </div>
                <div className="topbar-icon">
                    <SettingsIcon/>
                </div>
            </div>
        </div>
    </div>
  )
}