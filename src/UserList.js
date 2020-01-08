import React from 'react'

function User({user}) {
    return(
        <div>
            <b>
                {user.username}
            </b>
            <span>
                ({user.email})
            </span>
        </div>
    )
}

function UserList({users}) {
    return(
        <div>
            {
                users.map((user, idx) => (
                    <User user={user} key={user.id}/>
                ))
            }
        </div>
    );
}

export default UserList;