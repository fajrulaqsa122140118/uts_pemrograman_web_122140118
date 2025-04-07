import React from 'react';

const Users = () => {
  const userList = ['Alice', 'Bob', 'Charlie'];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Daftar Pengguna</h2>
      <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
        {userList.map((user, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px 20px',
            backgroundColor: '#fafafa',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            <p>{user}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
