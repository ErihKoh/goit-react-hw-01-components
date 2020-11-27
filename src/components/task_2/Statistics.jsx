import PropTypes from 'prop-types';

function Statistics({title, children}) {
    return ( 
        <section className="statistics">

            <h2 className="title">{title}</h2> 

            {children}

        </section>
    )
}


Statistics.protoType = {
children: PropTypes.node,
}


export default Statistics;


