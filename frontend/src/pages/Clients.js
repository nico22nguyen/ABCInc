import { useState, useEffect } from 'react';
import axios from '../utils/axios'
import './clients.css'

const Clients = () => {
  const [clients, setClients] = useState([])

  useEffect(() => {
    axios.get('/api/clients/').then(res => {
      setClients([...res.data.clients])
    })
  }, [])

  return (
    <>
      <div class="sidebar" style={{zIndex: 9999}}>
        <div class="logo-details">
          <span class="user_name">name </span>
          <span class="user_name2">position</span>
        </div>
        <div class="buttons3">
          <div class="client-action_btn3" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
            <button name="enter" type="submit" value="Dashboard" style={{backgroundColor: '#1899FF', border: 'none', color: 'white'}}>
              Dashboard
            </button>
          </div>
        </div>
      </div>
      <section class="home-section">
        <nav>
          <div class="search-box">
            <input type="text" placeholder="Search Clients..."/>
          </div>
        </nav>
        <div class="buttons">
          <div class="client-action_btn">
            <button name="enter" class="client-action_btn1 add clients" type="submit" value="Add Clients" onclick="Interaction">
              Add Clients
            </button>
          </div>
        </div>
        <div class ="frame">
          <div class ="client">Client</div>
          <div class ="emy-jackson">Emy Jackson</div>
          <div class ="emy-jao-gmail-com">emy_jao@gmail.com</div>
          <div class ="client-contacts">Contacts</div> 
          <div class ="laura-madison">Laura Madison</div>
          <div class ="laura-mad-gmail-com">laura_mad@gmail.com</div>
          <div class ="client-contacts2">Contacts</div> 
          <div class ="keate-medona">Keate Medona</div>
          <div class ="keate-med-gmail-com">keate_med@gmail.com</div>
          <div class ="client-contacts3">Contacts</div> 
          <div class ="winslet-mays">Winslet Mays</div>
          <div class ="winslet-m-gmail-com">winslet_m@gmail.com</div>
          <div class ="client-contacts4">Contacts</div> 
          <div class ="merlyn-dona">Merlyn Dona</div>
          <div class ="dona-mer-gmail-com">dona_mer@gmail.com</div>
          <div class ="client-contacts5">Contacts</div> 
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
        </div>
      </section>
    </>
  );
}

export default Clients;
