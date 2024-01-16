import React from 'react'
import { useDispatch } from 'react-redux'

export default function UserItem({ id, name, email, color }) {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch({ type: 'chip/removeChip', payload: id })
    }
    return (
        <div onClick={handleClick} className='w-full h-fit p-1 flex justify-start rounded-sm cursor-pointer hover:bg-slate-400'>
            <p className={`h-8 w-8 rounded-full ${color}  self-center`}></p>
            <p className='self-center mx-1 px-1 font-semibold'>{name}</p>
            <p className='self-center mx-1 px-1'>{email}</p>
        </div>
    )
}
