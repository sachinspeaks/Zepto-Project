import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserList from './UserList'
import Chip from './Chip'

export default function Body() {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const data = useSelector(state => state.chip.items)
    const [list, setList] = useState([])
    const [chipList, setChipList] = useState([])

    useEffect(() => {
        const res = data.filter((item) => {
            if (item.inlist) return item.username.toLowerCase().includes(input.toLowerCase())
            return false
        })
        const chipRes = data.filter((item) => { return item.inlist === false })
        setList(res)
        setChipList(chipRes)
        setInput('')
    }, [data])

    const handleChange = (value) => {
        setInput(value)
        const res = data.filter((item) => {
            if (item.inlist) return item.username.toLowerCase().includes(value.toLowerCase())
            return false
        })
        setList(res)
    }
    return (
        <div className="flex flex-col p-4 w-full">
            <h1 className="text-4xl font-semibold text-blue-800 self-center">Pick Users</h1>
            <div className="mt-20 self-center w-4/6">
                <div className="w-full h-fit flex flex-wrap items-end">
                    {
                        chipList.map((item, i) => {
                            if (item.inlist === false) {
                                return <div key={item.id} className='m-2' tabIndex={i + 1}>
                                    <Chip id={item.id} name={item.username} color={item.color} />
                                </div>
                            }
                            return null
                        })
                    }
                    <div className='w-fit relative'>
                        <input value={input}
                            type="text"
                            placeholder="Add new user..."
                            className="w-full bg-inherit mb-3.5 focus: outline-none "
                            onChange={e => handleChange(e.target.value)}
                            onKeyDown={e => {
                                if (chipList.length && e.target.value === "" && e.key === 'Backspace') {
                                    dispatch({ type: 'chip/addChip', payload: chipList[chipList.length - 1].id })
                                }
                            }} />
                        <UserList list={list} />
                    </div>
                </div>
            </div>
            < div className="w-4/6 border-b-4 flex self-center border-blue-800 sticky" />
        </div>
    )
}
