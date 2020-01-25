import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Axios from 'axios'

const Chart = () => {
    const [player, setPlayer] = useState({data: {}});

    useEffect(() => {
        Axios
        .get(`http://localhost:5000/api/players`)
        .then(res => {
            const soccer = res.data;
            let name = [];
            let search = []
            soccer.forEach(el => {
                name.push(el.name);
                search.push(el.searches);
            });
            setPlayer({
                data: {
                    labels: name,
                    datasets:[
                       {
                          label:'Top Searched Players',
                          data: search ,
                          backgroundColor:[
                           'rgba(255,105,145,0.6)',
                           'rgba(155,100,210,0.6)',
                           'rgba(90,178,255,0.6)',
                           'rgba(240,134,67,0.6)',
                           'rgba(120,120,120,0.6)',
                           'rgba(250,55,197,0.6)'
                        ]
                       }
                    ]
                 }
            })
        })
        .catch(err => {
            console.log('the data is not found', err)
        });
    }, [player]);
    
    return(
        <div>
            <Bar 
            data={player.data}
            options={{maintainAspectRatio: true}}
            />
        </div>
    )
}

export default Chart;