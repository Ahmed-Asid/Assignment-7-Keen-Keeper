import { Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from '../../context/Interactions';
import { useContext } from 'react';


// #endregion
export default function PieChartWithPaddingAngle() {

    const { timeline } = useContext(FriendContext);

    const callTime = timeline.filter(t => t.type === 'call').length;
    const textTime = timeline.filter(t => t.type === 'text').length;
    const videoCallTime = timeline.filter(t => t.type === 'video_call').length;

    const data = [
        { name: 'Call', value: callTime, fill: '#0088FE' },
        { name: 'Text', value: textTime, fill: '#00C49F' },
        { name: 'Video', value: videoCallTime, fill: '#FFBB28' },
    ];

    return (
        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
            <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
            />
            <Tooltip />
        </PieChart>
    )
}