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
<body>
  <div class="sidebar">
    <div class="logo-details">
       <span class="user_name">name </span>
       <span class="user_name2">position</span>
       </i>
  </div>
  <div class="buttons3">
        <div class="action_btn3">      
          <button name="enter" class="action_btn3 dashboard" type="submit" value="Dashboard" onclick="Interaction">Dashboard</button>
          </a>
        </li>
   </div>
   <section class="home-section">
    <nav>
      <div class="search-box">
        <input type="text" placeholder="Search Clients...">
      </div>
       <div class="buttons">
          <div class="action_btn">
            <button name="enter" class="action_btn1 add clients" type="submit" value="Add Clients" onclick="Interaction">Add Clients</button></p>
          
      </div>
         <div class ="frame">
           <div class ="client">Client</div>
           <div class ="emy-jackson">Emy Jackson</div>
             <div class ="emy-jao-gmail-com">emy_jao@gmail.com</div>
            <div class ="contacts">Contacts</div> 
           <div class ="laura-madison">Laura Madison</div>
             <div class ="laura-mad-gmail-com">laura_mad@gmail.com</div>
            <div class ="contacts2">Contacts</div> 
           <div class ="keate-medona">Keate Medona</div>
             <div class ="keate-med-gmail-com">keate_med@gmail.com</div>
            <div class ="contacts3">Contacts</div> 
           <div class ="winslet-mays">Winslet Mays</div>
             <div class ="winslet-m-gmail-com">winslet_m@gmail.com</div>
            <div class ="contacts4">Contacts</div> 
             <div class ="merlyn-dona">Merlyn Dona</div>
             <div class ="dona-mer-gmail-com">dona_mer@gmail.com</div>
            <div class ="contacts5">Contacts</div> 
          
           <div class= "company">Company</div>
           <div class= "industry">Industry</div>
            <div class= "industry2">Industry</div>
            <div class= "industry3">Industry</div>
            <div class= "industry4">Industry</div>
            <div class= "industry5">Industry</div>
           
               <div class ="created">Created</div>
                 <div class ="_2022-03-11">2022-03-11</div>
                   <div class ="_2022-03-112">2022-03-11</div>
                     <div class ="_2022-03-113">2022-03-11</div>
                       <div class ="_2022-03-114">2022-03-11</div>
                         <div class ="_2022-03-115">2022-03-11</div>
                           <div class= "text">Rows per page 5 out of 400</div>
          <div class ="_1-2-3-15-16">1 2 3 ...15 16</div> 
           <div class ="edit">Edit</div>
           <div class ="edit2">Edit</div>
           <div class ="edit3">Edit</div>
           <div class ="edit4">Edit</div>
           <div class ="edit5">Edit</div>
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
