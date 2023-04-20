import './widgetLg.scss'

export const WidgetLg = () => {
    
    const Button = ({type}) => {

        return  <button className={'widgetLg-button '+ type}>{type}</button>
    }

  return (
    <div className='widgetLg'>
        <h3 className="widgetLg-title">Latest Transactions</h3>
        <table className="widgetLg-table">
            <tr className="widgetLg-tr">
                <th className="widgetLg-th">Customer</th>
                <th className="widgetLg-th">Date</th>
                <th className="widgetLg-th">Amount</th>
                <th className="widgetLg-th">Status</th>
            </tr>
            <tr className="widgetLg-tr">
                <td className="widgetLg-user">Sabrina Tyson</td>
                <td className="widgetLg-date">19/5/2023</td>
                <td className="widgetLg-amount">15.00$</td>
                <td className="widgetLg-status"><Button type="Pending"/></td>
            </tr>
            <tr className="widgetLg-tr">
                <td className="widgetLg-user">May Hayek</td>
                <td className="widgetLg-date">19/5/2023</td>
                <td className="widgetLg-amount">15.00$</td>
                <td className="widgetLg-status"><Button type="Approved"/></td>
            </tr>
            <tr className="widgetLg-tr">
                <td className="widgetLg-user">Nancy Smeha</td>
                <td className="widgetLg-date">19/5/2023</td>
                <td className="widgetLg-amount">15.00$</td>
                <td className="widgetLg-status"><Button type="Declined"/></td>
            </tr>
            <tr className="widgetLg-tr">
                <td className="widgetLg-user">Carol Ajami</td>
                <td className="widgetLg-date">19/5/2023</td>
                <td className="widgetLg-amount">15.00$</td>
                <td className="widgetLg-status"><Button type="Pending"/></td>
            </tr>

        </table>
    </div>
  )
}
