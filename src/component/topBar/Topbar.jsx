import './topbar.scss'

export const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbar-wrapper">
            <div className="top-left">
                <span className="logo">Admin-Dashboard</span>
            </div>
            <div className="top-right">
                Right
            </div>
        </div>
    </div>
  )
}