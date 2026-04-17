import { BsCircleFill } from 'react-icons/bs';
import PieChartWithPaddingAngle from '../../components/chart/PieChart';

const Analytics = () => {

    return (
        <div className='space-y-6 w-[90%] md:[80%] mx-auto my-20'>
            <h1 className='text-5xl font-bold'>Friendship Analytics</h1>

            <div className='bg-white rounded-lg shadow-sm p-8 space-y-6'>
                <p className='text-xl font-medium'>By Interaction Type</p>
                <div className='flex justify-center'>
                    <PieChartWithPaddingAngle></PieChartWithPaddingAngle>
                </div>
                <div className='flex items-center gap-2 text-sm text-gray-500 justify-center'>
                    <p className='flex items-center gap-1'><BsCircleFill color='#0088FE'></BsCircleFill> Call</p>
                    <p className='flex items-center gap-1'><BsCircleFill color='#00C49F'></BsCircleFill> Text</p>
                    <p className='flex items-center gap-1'><BsCircleFill color='#FFBB28'></BsCircleFill> Video</p>
                </div>
            </div>
        </div>
    );
};

export default Analytics;