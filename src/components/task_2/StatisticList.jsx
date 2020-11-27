import PropTypes from 'prop-types';

function StatisticList({items}) {
    return (
        <ul className="stat-list">
            
            {items.map(item => (

            <li className="item" key={item.id}>
                
                <span className="label">{item.label}</span>
                
                <span className="percentage">{item.percentage}</span>
                
            </li>
            ))
            }
            
        </ul>
    )
}

StatisticList.protoType = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
}

export default StatisticList;