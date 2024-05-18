import React, { useState, useEffect } from 'react';

function Dashboard() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await fetch('http://localhost:3000/events/all');
            if (response.ok) {
                const data = await response.json();
                setEvents(data);
            } else {
                console.error('Failed to fetch events');
            }
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    return (
        <div className="flex">
            <div className="w-1/4 bg-purple-800 text-white p-4 rounded-md">
                <h2 className="text-lg font-semibold mb-4">Navigation</h2>
                <ul>
                    <li className="text-white">Department Events</li>
                    <li className="text-white">Club Events (Technical)</li>
                    <li  className="text-white">Club Events (Non-Technical)</li>
                    <li className="text-white">Notifications</li>
                </ul>
            </div>
            <div className="w-3/4 p-4">
                <h2 className="text-lg font-semibold text-purple-800 mb-4">Latest Events</h2>
                <div className="mt-4">
                    {events.map((event, index) => (
                        <div key={index} className="w-3/4 bg-white rounded-md p-4 shadow-md mx-auto mb-4">
                            <h3 className="text-lg font-semibold text-purple-800 mb-2">{event.club}</h3>
                            <p className="text-sm mb-2">Registration Date: {event.date}</p>
                            <p className="text-sm">Amount to be Paid: ${event.fee}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
