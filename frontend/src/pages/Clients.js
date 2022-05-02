import { useState, useEffect } from 'react';
import axios from '../utils/axios'

const Clients = () => {
  const [clients, setClients] = useState([])

  useEffect(() => {
    axios.get('/api/clients/').then(res => {
      setClients([...res.data.clients])
    })
  }, [])

  return (
    <>
      <h1>Clients Page</h1>
      <table>
        {clients.map(client => (
          <tr>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default Clients;