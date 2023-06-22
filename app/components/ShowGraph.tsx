import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';




interface Props {
    data: any[];
}

export const ShowGraph = ({data}: Props) => {
    
 
  return (
      <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="temp" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="date" />
    <YAxis />
    <Tooltip />
  </LineChart>
  )
}
