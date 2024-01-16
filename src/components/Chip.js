import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useDispatch } from 'react-redux';

export default function Chip({ id, name, color }) {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch({ type: 'chip/addChip', payload: id })
    }

    return (
        <div className='w-fit h-fit bg-gray-400 rounded-full flex px-1 focus-within:border-l-gray-950'>
            <p className={`h-7 w-7 rounded-full ${color}  self-center`}></p>
            <p className='text-lg p-1'>{name}</p>
            <IoMdClose className='self-center text-2xl cursor-pointer' onClick={handleClick} />
        </div>
    )
}
