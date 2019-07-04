import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, ResponsiveContainer,
} from 'recharts';

function ScoreDetail(props) {
    return <div class="card-group">
        <div class="card card-default">
            <div class="card-header">MSSIDN: {props.data.phone}</div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Score bucket</th>
                            <th>Percentile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data && props.data.score && props.data.score.map(item => <tr>
                            <td>{item.name}</td>
                            <td>{item.score_bucket}</td>
                            <td>{item.percentile}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>

        <div class="card card-default">
            <div class="card-header">Score History</div>
            <div class="card-body">
                <ResponsiveContainer >
                    <BarChart
                        width={500}
                        height={300}
                        data={props.data.scoreHistory}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    </div>
}

export default ScoreDetail;