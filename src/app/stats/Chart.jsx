'use client'
import React, { useContext, useMemo } from 'react';
import { PieChart, Pie } from 'recharts';
import { FriendsContexts } from '../components/contexts/FriendsContext';

const Chart = () => {
    const { timeline } = useContext(FriendsContexts)
    
    const data = useMemo(() => {
        const actionCounts = {
            call: 0,
            text: 0,
            video: 0
        };

        timeline.forEach(item => {
            if (item.action in actionCounts) {
                actionCounts[item.action]++;
            }
        });

        return Object.entries(actionCounts)
            .filter(([, count]) => count > 0)
            .map(([action, count]) => ({
                name: action.charAt(0).toUpperCase() + action.slice(1),
                value: count,
                fill: 
                    action === 'call' ? '#ef4444' :
                    action === 'text' ? '#3b82f6' :
                    action === 'video' ? '#8b5cf6' : '#6b7280'
            }));
    }, [timeline]);

    return (
        <div className='border border-neutral-200 p-4 rounded-md'>
            <p className='text-2xl'>By Interaction Type</p>

            <div className='w-fit mx-auto'>
                <PieChart style={{ width: '50vh', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        cornerRadius="50%"
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                </PieChart>
            </div>

            <div className='flex justify-center gap-10 mt-10'>
                <div className='flex items-center gap-2'>
                    <div className='w-6 h-6 bg-[#ef4444]'>
                    </div>
                    <p>Call</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-6 h-6 bg-[#3b82f6]'>
                    </div>
                    <p>Text</p>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-6 h-6 bg-[#8b5cf6]'>
                    </div>
                    <p>Video</p>
                </div>
            </div>
        </div>
    );
};

export default Chart;