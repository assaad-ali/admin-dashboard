import './featured.scss'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export const Featured = () => {
  return (
    <div className='featured'>
        <div className="featured-item">
          <span className="title">Revenue</span>
          <div className="money-container">
            <span className="money">275000.00</span>
            <span className="rate">+43000 <ArrowUpwardIcon className='icon'/></span>
          </div>
          <span className="item-sub">
            compared to last month
          </span>
        </div>
        <div className="featured-item">
          <span className="title">Sales</span>
          <div className="money-container">
            <span className="money">275000.00</span>
            <span className="rate">+43000 <ArrowUpwardIcon className='icon'/></span>
          </div>
          <span className="item-sub">
            compared to last month
          </span>
        </div>
        <div className="featured-item">
          <span className="title">Cost</span>
          <div className="money-container">
            <span className="money">75000.00</span>
            <span className="rate">-40000 <ArrowDownwardIcon className='icon negative'/></span>
          </div>
          <span className="item-sub">
            compared to last month
          </span>
        </div>
    </div>
  )
}
