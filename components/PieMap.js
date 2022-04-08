import React, { useEffect, useState } from 'react'

import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalState'
import {Bar as Bara} from 'react-chartjs-2';
import Chart from 'chart.js/auto'
function PieMap({ dataScheduleTimeOccur }) {
  var jsonString=""
  const slot = new Map()
  slot.set('9am to 12am', 0)
  slot.set('12am to 3pm', 0)
  slot.set('3pm to 6pm', 0)
  slot.set('6pm to 9pm', 0)
  const [items, setItems] = useRecoilState(modalState)
  const [scheduleSlot, setScheduleSlot] = useState([])

  const getScheduleSlot = (slotParam) => {
    if (slotParam >= 9 && slotParam < 12) {
      slot.set('9am to 12am', slot.get('9am to 12am') + 1)

    }
    if (slotParam >= 12 && slotParam < 15) {
      slot.set('12am to 3pm', slot.get('12am to 3pm') + 1)
    }
    if (slotParam >= 15 && slotParam < 18) {
      slot.set('3pm to 6pm', slot.get('3pm to 6pm') + 1)
    }
    if (slotParam >= 18 && slotParam <= 21) {
      slot.set('6pm to 9pm', slot.get('6pm to 9pm') + 1)
    }
  }

  
  
  return (
    <div className="flex  h-full w-screen ">
      <div className='w-1/2'>

      <Bara
          data={{
            labels:Array.from(dataScheduleTimeOccur.keys()) ,
            datasets: [
              {
                label: 'Scheduled Date',
                backgroundColor: 'purple',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: Array.from(dataScheduleTimeOccur.values())
              }
            ]
          }}
          options={{
            onClick(e,element){
          
              let data_set_item_date = items.filter(
                (d) => d.schedule_time.substring(0, 10) == Array.from(dataScheduleTimeOccur.keys()).at(element[0].index)
              )
              setScheduleSlot(data_set_item_date)
            },
            title:{
              display:true,
              text:'Food Scheduled',
              fontSize:20
            },
        
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      <div>
    
      </div>
        {scheduleSlot && (
          <div>
            {scheduleSlot.map((slot) => (
              <p>
                {getScheduleSlot(
                  new Date(slot.schedule_time).getHours(),
                  scheduleSlot.length
                )}
              </p>
            ))}
          </div>
        )}
        
      </div>
 
      <div className='w-1/2 h-full'>
        <Bara
          data={{
            labels:Array.from(slot.keys()) ,
            datasets: [
              {
                label: 'Scheduled Slot',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: Array.from(slot.values())
              }
            ]
          }}
          options={{
            
            title:{
              display:true,
              text:'Food Scheduled',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
  
  

    </div>
  )
}

export default PieMap
