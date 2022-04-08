import React, { useRef, useState } from 'react'
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { useRecoilState } from 'recoil'
import data from '../data/data'
import PieMap from './PieMap'
import { modalState } from '../atoms/modalState'
function Header() {
  const dateRef = useRef(null)
  const [items, setItems] = useRecoilState(modalState)

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
    setItems(data_set_item_date)
  }
  const setOccur = (value) => {
    if (dataScheduleTimeOccur.get(value)) {
      dataScheduleTimeOccur.set(value, dataScheduleTimeOccur.get(value) + 1)
    } else {
      dataScheduleTimeOccur.set(value, 1)
    }
  }

  return (
    <div className="flex h-screen w-[500px] flex-col place-items-center space-y-5">
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
      </div>
      {dataItemsDate.length == 0 ? (
        <div>
          <img src="https://www.reinforcedesigns.com/onlinemin/default-img/empty1.png" />
        </div>
      ) : (
        dataScheduleTimeOccur.length != 0 && (
          <PieMap dataScheduleTimeOccur={dataScheduleTimeOccur} />
        )
      )}
    </div>
  )
}

export default Header
