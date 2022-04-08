import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLine } from 'victory';
function Ex() {
  const data = [
    {
      no:1,      
      schedule_time: '2021-05-18 12:39:29',
      slot: 'L',
      item_date: '2021-05-19',
    },
    {
        no:2,
      schedule_time: '2021-05-18 12:47:53',
      slot: 'D',
      item_date: '2021-05-19',
    },
    {
        no:3,
      schedule_time: '2021-05-18 13:55:22',
      slot: 'D',
      item_date: '2021-05-19',
    },
  ];
  
  return (
    <div className="h-screen w-full">
   <VictoryLine
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={20}
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryBar
          data={data}
          x="schedule_time"
          y="no"
          
        />
      </VictoryLine>
    </div>
  )
}

export default Ex
