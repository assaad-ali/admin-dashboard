import './widgetSm.scss'
import VisibilityIcon from '@mui/icons-material/Visibility';

export const WidgetSm = () => {
  return (
    <div className='widgetSm'>
        <span className="widgetSm-title">New Members</span>
        <ul className='widgetSm-list'>
            <li className="widgetSm-list-item">
                <img
                    src="https://cdn-ajggd.nitrocdn.com/kMoOFpDlsOVtlYJLrnSRNCQXaUFHZPTY/assets/images/optimized/rev-1829ae0/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape.jpeg"
                    alt=""
                    className='widgetSm-img'
                />
                <div className="widgetSm-user-info">
                    <span className="widgetSm-username">Dalila Dalprat</span>
                    <span className="widgetSm-job">Photographer</span>
                </div>
                <button className='visibility-button'>
                    <VisibilityIcon/>
                    Display Info
                </button>
            </li>
            <li className="widgetSm-list-item">
                <img
                    src="https://cdn-ajggd.nitrocdn.com/kMoOFpDlsOVtlYJLrnSRNCQXaUFHZPTY/assets/images/optimized/rev-1829ae0/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape.jpeg"
                    alt=""
                    className='widgetSm-img'
                />
                <div className="widgetSm-user-info">
                    <span className="widgetSm-username">Dalila Dalprat</span>
                    <span className="widgetSm-job">Photographer</span>
                </div>
                <button className='visibility-button'>
                    <VisibilityIcon/>
                    Display Info
                </button>
            </li>
            <li className="widgetSm-list-item">
                <img
                    src="https://cdn-ajggd.nitrocdn.com/kMoOFpDlsOVtlYJLrnSRNCQXaUFHZPTY/assets/images/optimized/rev-1829ae0/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape.jpeg"
                    alt=""
                    className='widgetSm-img'
                />
                <div className="widgetSm-user-info">
                    <span className="widgetSm-username">Dalila Dalprat</span>
                    <span className="widgetSm-job">Photographer</span>
                </div>
                <button className='visibility-button'>
                    <VisibilityIcon/>
                    Display Info
                </button>
            </li>
            <li className="widgetSm-list-item">
                <img
                    src="https://cdn-ajggd.nitrocdn.com/kMoOFpDlsOVtlYJLrnSRNCQXaUFHZPTY/assets/images/optimized/rev-1829ae0/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape.jpeg"
                    alt=""
                    className='widgetSm-img'
                />
                <div className="widgetSm-user-info">
                    <span className="widgetSm-username">Dalila Dalprat</span>
                    <span className="widgetSm-job">Photographer</span>
                </div>
                <button className='visibility-button'>
                    <VisibilityIcon/>
                    Display Info
                </button>
            </li>   
        </ul>
    </div>
  )
}
