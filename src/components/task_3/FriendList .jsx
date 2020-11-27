import PropTypes from 'prop-types';



function FriendList({friends}) {
    return (

        <ul className="friend-list"> 
            
            {
                friends.map(friend => (
                    
                    <li className="item" key={friend.id}>
                
                      <span className="status">{friend.isOnline ? "Online" : "Ofline"}</span>
                
                      <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
                
                      <p className="name">{friend.name}</p>
                
                    </li>
                )

                )
           }
        </ul>
        
    )
} 


FriendList.protoType = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        status: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),
  ),
}

export default FriendList;