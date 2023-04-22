import './user.scss'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';


export const User = () => {
  return (
    <div className='user'>
        <div className="title-container">
            <h1 className="user-title">Edit User</h1>
            <button className="user-create-button">Create</button>
        </div>
        <div className="user-container">
            <div className="user-display">
                <div className="user-display-top">
                <img
                    src="https://cdn-ajggd.nitrocdn.com/kMoOFpDlsOVtlYJLrnSRNCQXaUFHZPTY/assets/images/optimized/rev-1829ae0/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape.jpeg"
                    alt=""
                    className='user-display-img'
                />
                <div className="top-title">
                    <span className="display-username">Dalia Dalpart</span>
                    <span className="display-title">Photographer</span>
                </div>
                </div>
                <div className="user-display-bottom">
                    <span className="account-details">Account Details</span>
                    <div className="user-info">
                        <PermIdentityIcon className='account-display-icon'/>
                        <span className="user-username">daliadal11</span>
                    </div>
                    <div className="user-info">
                        <CalendarTodayIcon className='account-display-icon'/>
                        <span className="user-username">20/04/1989</span>
                    </div>
                    <span className="account-details">Contact Details</span>
                    <div className="user-info">
                        <PhoneIphoneIcon className='account-display-icon'/>
                        <span className="user-username">+351-821-4247</span>
                    </div>
                    <div className="user-info">
                        <EmailIcon className='account-display-icon'/>
                        <span className="user-username">daliadal1989@gmail.com</span>
                    </div>
                    <div className="user-info">
                        <GpsFixedIcon className='account-display-icon'/>
                        <span className="user-username">Lisbon | Portugal</span>
                    </div>
                    
                </div>
            </div>
            <div className="user-update"></div>
        </div>
    </div>
  )
}
