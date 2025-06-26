import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import userAvatarDefault from '../../assets/user.png'
import { Helmet } from 'react-helmet-async';

const DashboardOverview = () => {

    const { user } = useContext(AuthContext);

    const [totalProperties, setTotalProperties] = useState([]);
  const [myListings, setMyListings] = useState([]);
  const [uniqueUsers, setUniqueUsers] = useState(0);

  useEffect(() => {
    fetch("https://dwellmate-server.vercel.app/properties")
      .then(res => res.json())
      .then(data => {
        setTotalProperties(data);
        // Filter user's listings if user is logged in
        if (user?.email) {
          const userListings = data.filter(property => property.email === user.email);
          setMyListings(userListings);
        }

        const uniqueEmails = new Set(data.map(property => property.email));
        setUniqueUsers(uniqueEmails.size);
      })
      .catch(error => console.error(error));
  }, [user?.email]);

    return (
        <div className="space-y-6">
            <div>
                <h1 className='text-2xl text-black font-bold'>Overview</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="stat bg-base-200 rounded-xl shadow">
                    <div className="stat-title text-black font-bold">Total Properties</div>
                    <div className="stat-value text-primary">{totalProperties.length}</div>
                </div>
                <div className="stat bg-base-200 rounded-xl shadow">
                    <div className="stat-title text-black font-bold">My Listings</div>
                    <div className="stat-value text-secondary">{myListings.length}</div>
                </div>
                <div className="stat bg-base-200 rounded-xl shadow">
                    <div className="stat-title text-black font-bold">Total Users</div>
                    <div className="stat-value text-accent">{uniqueUsers}</div>
                </div>
            </div>

            <div className="p-6 bg-base-200 rounded-xl shadow flex flex-col sm:flex-row items-center gap-4">
                <div className="avatar">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                            src={user?.photoURL || userAvatarDefault}
                            alt="User"
                        />
                    </div>
                </div>
                <div className="text-center sm:text-left">
                    <h2 className="text-xl font-bold">
                        {user?.displayName || 'Guest User'}
                    </h2>
                    <p className="text-gray-600">
                        Email: {user?.email || 'Not Logged In'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;