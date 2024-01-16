import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import UserList from './UserList'
import Chip from './Chip'

export default function Body() {
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
    }, [data, input])

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
                <div className="w-full h-fit flex flex-wrap">
                    {
                        chipList.map((item) => {
                            if (item.inlist === false) {
                                return <div key={item.id} className='m-2'>
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
                            className="w-full bg-inherit border-none focus: outline-none text-lg font-medium "
                            onChange={e => handleChange(e.target.value)} />
                        <UserList list={list} />
                    </div>
                </div>
            </div>
            < div className="w-4/6 border-b-4 flex self-center border-blue-800 sticky" />
        </div>
    )
}
