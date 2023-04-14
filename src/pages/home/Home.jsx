
import { Chart } from '../../component/chart/Chart.jsx'
import { Featured } from '../../component/featured/Featured.jsx'
import './home.scss'

export const Home = () => {
  return (
    <div className='home'>
        <Featured/>
        <Chart/>
    </div>
  )
}
