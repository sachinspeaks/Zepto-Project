import React from 'react'
import UserItem from './UserItem'

export default function UserList({ list }) {
    return list.length > 0 ? (
        <div className='max-h-80 my-4 bg-slate-200 rounded-md p-2 text-base shadow-lg overflow-y-scroll absolute' >
            {
                list.map((item) => {
                    return <UserItem key={item.id} id={item.id} name={item.username} email={item.email} color={item.color} />
                })
            }
        </div>
    ) : null
}
