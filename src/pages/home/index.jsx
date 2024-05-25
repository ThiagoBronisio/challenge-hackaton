import ChartComponent from '../../components/PieChart';
import { useState } from 'react';
import PieChart from '../../components/PieChart';

function Home() {

    const [userData, setUserData] = useState({
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [100, 100, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    });

    return (
        <div className="px-6">
            <div className="grid grid-cols-6 gap-4 mb-6">
                <div className="w-100 bg-blue-100">01</div>
                <div className="w-100 bg-blue-100">02</div>
                <div className="w-100 bg-blue-100">

                </div>
                <div className="w-100 bg-blue-100">04</div>
                <div className="w-100 bg-blue-100">05</div>
                <div className="w-100 bg-blue-100">06</div>
            </div>


            <form className="row grid grid-cols-2 gap-3">
                <div className="">
                    <input type="text" className="border rounded-sm p-1 border-gray-300 hover:border-black focus:outline-blue-300" />
                    <input type="email" className="border border-gray-300 rounded-sm p-1 focus:border-blue-500" placeholder="Seu e-mail..." />
                    <input type="password" className="border border-gray-300 rounded-md p-1" placeholder="Sua senha..." />
                </div>

                <div className="grid gap-3 max-w-sm">

                    <input type="number" className="border border-gray-300 rounded-md p-1" placeholder="Número..." />
                    <input type="tel" className="border border-gray-300 rounded-md p-1" placeholder="Seu telefone..." />
                    <input type="date" className="border border-gray-300 rounded-md p-1" placeholder="Selecione uma data..." />
                    <input type="checkbox" className="form-checkbox border-2 border-gray-300 rounded-md" />
                    <input type="radio" className="form-radio border-2 border-gray-300 rounded-md" />
                    <input type="password" className="border border-gray-300 rounded-md p-1" placeholder="Sua senha..." />
                    <input type="password" className="border border-gray-300 rounded-md p-1" placeholder="Sua senha..." />
                    <input type="password" className="border border-gray-300 rounded-md p-1" placeholder="Sua senha..." />
                </div>
            </form>

            <div className='max-w-lg'>
                <PieChart chartData={userData} />
            </div>

        </div>
    )
}

export default Home;