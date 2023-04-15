
import { Chart } from '../../component/chart/Chart.jsx'
import { Featured } from '../../component/featured/Featured.jsx'
import './home.scss'
import { userData } from '../../data/data.js'

export const Home = () => {
  return (
    <div className='home'>
        <Featured/>
        <Chart data={userData} title="Sales Analytics" dataKey="Active Users"/>
    </div>
  )
}
