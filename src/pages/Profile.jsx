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
        <p><strong>Nama:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Alamat:</strong> {user.address}</p>
        <p><strong>Bergabung Sejak:</strong> {user.joined}</p>
      </div>
    </div>
  );
};

export default Profile;
