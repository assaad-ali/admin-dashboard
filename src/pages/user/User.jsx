import './user.scss'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import UploadIcon from '@mui/icons-material/Upload';


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
                        <PermIdentityIcon className='info-icon'/>
                        <span className="info-text">daliadal11</span>
                    </div>
                    <div className="user-info">
                        <CalendarTodayIcon className='info-icon'/>
                        <span className="info-text">20/04/1989</span>
                    </div>
                    <span className="account-details">Contact Details</span>
                    <div className="user-info">
                        <PhoneIphoneIcon className='info-icon'/>
                        <span className="info-text">+351-821-4247</span>
                    </div>
                    <div className="user-info">
                        <EmailIcon className='info-icon'/>
                        <span className="info-text">daliadal1989@gmail.com</span>
                    </div>
                    <div className="user-info">
                        <GpsFixedIcon className='info-icon'/>
                        <span className="info-text">Lisbon | Portugal</span>
                    </div>
                    
                </div>
            </div>
            <div className="user-update">
                <span className="update-title">Update</span>
                <form className="update-form">
                    <div className="update-left">
                        <div className="update-item">
                            <label>Username</label>
                            <input type="text" placeholder='anna11' className='update-iput' />
                        </div>
                        <div className="update-item">
                            <label>Full Name</label>
                            <input type="text" placeholder='Dalia Dalpart' className='update-iput' />
                        </div>
                        <div className="update-item">
                            <label>Phone</label>
                            <input type="text" placeholder='+351-821-4247' className='update-iput' />
                        </div>
                        <div className="update-item">
                            <label>Email</label>
                            <input
                                type="text"
                                placeholder='daliadal1989@gmail.com'
                                className='update-iput'
                            />
                        </div>
                        <div className="update-item">
                            <label>Address</label>
                            <input type="text" placeholder='Lisbon | Portugal' className='update-iput' />
                        </div>
                    </div>
                    <div className="update-right">
                        <div className="update-upload">
                            <img 
                                src="https://cdn-ajggd.nitrocdn.com/kMoOFpDlsOVtlYJLrnSRNCQXaUFHZPTY/assets/images/optimized/rev-1829ae0/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape.jpeg"
                                alt=""
                                className='update-img'
                            />
                            <label htmlFor="file"><UploadIcon/></label>
                            <input type="file" id="file" style={{display: 'none'}}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
