import React from 'react'
import{ useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink , Link } from "react-router-dom"

export default function Home() {
    const [messages, setMessages] = useState([]);

    // Fetch data from the API when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://back-scheduler.onrender.com/message/data');
                setMessages(response.data.data); // Set the data to the state
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold text-center mb-6">Message List</h1>
            <NavLink to="/form">
            <span className=' bg-indigo-800 text-white px-5 py-3 rounded-md'>Add schedul</span>
            </NavLink>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-md">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Message</th>
                            <th className="py-2 px-4 border-b">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.map((message) => (
                            <tr key={message._id}>
                                <td className="py-2 px-4 border-b">{message.email}</td>
                                <td className="py-2 px-4 border-b">{message.message}</td>
                                <td className="py-2 px-4 border-b">
                                    {new Date(message.date).toLocaleDateString('en-GB')}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
