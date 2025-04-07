import React from 'react';
import './Profile.css';

const Profile = () => {
  const user = {
    name: 'Fajrul Rahmadana Aqsa',
    email: 'Fajrul.122140118@student.itera.co.id',
    address: 'Jl. Contoh No. 123, Jakarta',
    joined: 'Januari 2024'
  };

  return (
    <div className="profile-page">
      <h2>👤 Profil Pengguna</h2>
      <div className="profile-card">
<<<<<<< HEAD
        <img src="/images/profile.jpg" alt="User Profile" className="profile-image" />
        <div className="profile-info">
          <p><strong>Nama:</strong> Mychael Daniel N</p>
          <p><strong>Nim:</strong> 122140104 </p>
          <p><strong>Email:</strong> mychael.122140104@student.itera.ac.id</p>
          <p><strong>Total Tiket Dibeli:</strong> 3</p>
          <div className="profile-extra">
            <span className="coins"><FaCoins /> 120 Coin</span>
            <span className="premium"><FaCrown /> Premium Member</span>
          </div>
        </div>
=======
        <p><strong>Nama:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Alamat:</strong> {user.address}</p>
        <p><strong>Bergabung Sejak:</strong> {user.joined}</p>
>>>>>>> 49bf7a5 (Initial commit)
      </div>
    </div>
  );
};

export default Profile;
