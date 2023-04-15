import './chart.scss'
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "../../data/data.js"

export const Chart = ({data, title, dataKey}) => {

    

  return (
    <div className='chart'>
        <h3 className="title">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip/>
          <Legend/>
          <Line type="monotone" dataKey={dataKey} stroke="#008000"  activeDot={{ r: 8 }}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
