import './chart.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const Chart = () => {

    const data = [
        {
          name: 'Jan',
          "Canceled Users": 3000,
          "Active Users": 2400,
          "New Users": 3000,
          "Trial Users": 1500,
        },
        {
          name: 'Mar',
          "Canceled Users": 2400,
          "Active Users": 4098,
          "New Users": 4500,
          "Trial Users": 1800,
        },
        {
          name: 'May',
          "Canceled Users": 2000,
          "Active Users": 9800,
          "New Users": 1800,
          "Trial Users": 2500,
        },
        {
          name: 'Jul',
          "Canceled Users": 1780,
          "Active Users": 8908,
          "New Users": 1000,
          "Trial Users": 5000,
        },
        {
          name: 'Sep',
          "Canceled Users": 890,
          "Active Users": 9800,
          "New Users": 5700,
          "Trial Users": 8500,
        },
        {
          name: 'Nov',
          "Canceled Users": 2390,
          "Active Users": 8900,
          "New Users": 6500,
          "Trial Users": 11200,
        },
        {
          name: 'Dec',
          "Canceled Users": 3490,
          "Active Users": 10300,
          "New Users": 8200,
          "Trial Users": 11000,

        },
      ];

  return (
    <div className='chart'>
        <h3 className="title">Sales Analytics</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip/>
          <Legend/>
          <Line type="monotone" dataKey="Active Users" stroke="#04ce04"  activeDot={{ r: 8 }}/>
          <Line type="monotone" dataKey="New Users" stroke="#0415ce" />
          <Line type="monotone" dataKey="Trial Users" stroke="#d34141" />
          <Line type="monotone" dataKey="Canceled Users" stroke="#5884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
