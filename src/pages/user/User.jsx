import './user.scss'

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
                </div>
                <div className="user-display-bottom"></div>
            </div>
            <div className="user-update"></div>
        </div>
    </div>
  )
}
