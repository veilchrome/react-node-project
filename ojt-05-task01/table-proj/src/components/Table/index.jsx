import { useState } from 'react';
import './table.css';


const Table = () => {
  // Contoh Data
  const baseData = [
    { id: 1, orderId: '998801', name: 'John Doe', nik: '909991230', email: 'jhondoe@gmail.com', datetransaction: '16-12-2023 14:45:35', step: 'Geotagging', status: 'Draft' },
    { id: 2, orderId: '998802', name: 'Jane Doe', nik: '909991231', email: 'janedoe@gmail.com', datetransaction: '17-12-2023 15:30:45', step: 'Payment', status: 'Published' },
    { id: 3, orderId: '998803', name: 'Bob Smith', nik: '909991232', email: 'bobsmith@gmail.com', datetransaction: '18-12-2023 12:20:15', step: 'Shipping', status: 'Cancelled' },
    { id: 4, orderId: '998801', name: 'John Doe', nik: '909991230', email: 'jhondoe@gmail.com', datetransaction: '16-12-2023 14:45:35', step: 'Geotagging', status: 'Draft' },
    { id: 5, orderId: '998802', name: 'Jane Doe', nik: '909991231', email: 'janedoe@gmail.com', datetransaction: '17-12-2023 15:30:45', step: 'Payment', status: 'Published' },
    { id: 6, orderId: '998803', name: 'Bob Smith', nik: '909991232', email: 'bobsmith@gmail.com', datetransaction: '18-12-2023 12:20:15', step: 'Shipping', status: 'Cancelled' },
  ];

  const statusOptions = ['Published', 'Draft', 'Cancelled'];
  const [data, setData] = useState(baseData);
  const [editingId, setEditingId] = useState(null);
  const handleEdit = (id) => {
    setEditingId(id);
  };

  // Referensi edit, delete https://www.youtube.com/watch?v=dYjdzpZv5yc //
  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const handleSave = (id, updatedData) => {
    const updatedList = data.map((item) =>
      item.id === id ? { ...item, ...updatedData } : item
    );
    setData(updatedList);
    setEditingId(null);
  };

  

  return (
    // Baris Kode Table
    <div className='table-data'>
      <table border="1">
        <thead>
          <tr>
            <th className="number">No.</th>
            <th>Order ID</th>
            <th>Nama</th>
            <th>NIK</th>
            <th>Email</th>
            <th>Tanggal Transaksi</th>
            <th>Step</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={item.orderId}
                    onChange={(e) =>
                      handleSave(item.id, { orderId: e.target.value })
                    }
                  />
                ) : (
                  item.orderId
                )}
              </td>
              <td>
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) =>
                      handleSave(item.id, { name: e.target.value })
                    }
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={item.nik}
                    onChange={(e) =>
                      handleSave(item.id, { nik: e.target.value })
                    }
                  />
                ) : (
                  item.nik
                )}
              </td>
              <td>
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={item.email}
                    onChange={(e) =>
                      handleSave(item.id, { email: e.target.value })
                    }
                  />
                ) : (
                  item.email
                )}
              </td>
              <td>
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={item.datetransaction}
                    onChange={(e) =>
                      handleSave(item.id, { datetransaction: e.target.value })
                    }
                  />
                ) : (
                  item.datetransaction
                )}
              </td>
              <td>
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={item.step}
                    onChange={(e) =>
                      handleSave(item.id, { step: e.target.value })
                    }
                  />
                ) : (
                  item.step
                )}
              </td>
              <td>
                {editingId === item.id ? (
                  <select
                    value={item.status}
                    onChange={(e) =>
                      handleSave(item.id, { status: e.target.value })
                    }
                  >
                    {statusOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  item.status
                )}
              </td>
              <td>
                {editingId === item.id ? (
                  <button onClick={() => handleSave(item.id, item)}><i className="fas fa-floppy-disk"></i></button>
                ) : (
                  <div>
                    <button onClick={() => handleEdit(item.id)}><i className="fas fa-edit"></i></button>
                    <button onClick={() => handleDelete(item.id)}><i className="fas fa-trash-alt"></i></button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
