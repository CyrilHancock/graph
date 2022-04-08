import React, { useRef, useState } from 'react'
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { useRecoilState } from 'recoil'
import data from '../data/data'
import PieMap from './PieMap'
import {modalState} from "../atoms/modalState"
function Header() {
  const dateRef = useRef(null)
  const [items,setItems]=useRecoilState(modalState)
  
  const [dataItemsDate, setDataItemsDate] = useState([])
  const dataScheduleTimeOccur = new Map()
  const [scheduleTimeOccurs, setScheduleTimeOccurs] = useState([])
  const check = (e) => {
    e.preventDefault()
    let data_set_item_date = data.filter(
      (d) => d.item_date == dateRef.current.value
    )
    setDataItemsDate(data_set_item_date)
    setScheduleTimeOccurs([])
  }
  const setOccur = (value) => {
    if (dataScheduleTimeOccur.get(value)) {
      dataScheduleTimeOccur.set(value, dataScheduleTimeOccur.get(value) + 1)
    } else {
      dataScheduleTimeOccur.set(value, 1)
    }
  }
  const get = (e) => {
    e.preventDefault()
    if (scheduleTimeOccurs.length == 0) {
      dataScheduleTimeOccur.forEach((k, v) =>
        setScheduleTimeOccurs((d) => [
          ...d,
          {
            date: v,
            timesSchedule: k,
          },
        ])
      )
      setItems(dataItemsDate)    
    }
    
  }

  return (
    <div className="h-screen w-[500px] flex flex-col place-items-center space-y-5">
      <form className="mt-10 w-fit bg-white p-5 shadow-2xl">
        <p className="pb-5">Enter Item Date</p>
        <div className="flex flex-col space-y-4">
          <input ref={dateRef} type="date" />
          <button onClick={check} className="bg-purple-500">
            Check
          </button>
        </div>
      </form>
      <div>
        {dataItemsDate.map((d) => (
          <div>{setOccur(d.schedule_time.substring(0, 10))}</div>
        ))}
        <button onClick={get} className="bg-purple-500 pl-5 pr-5">
          Get Bar Chart
        </button>
      </div>
         {dataItemsDate.length==0?
         <div><img src='https://www.reinforcedesigns.com/onlinemin/default-img/empty1.png'/></div>:scheduleTimeOccurs.length==0&&<p className='text-4xl'>Click on Get Bar Chart</p>}
         {
           scheduleTimeOccurs.length!=0&&
           <PieMap scheduleTimeOccurs={scheduleTimeOccurs} itemDate={dateRef.current.value}/>
         }   

    </div>
  )
}

export default Header
