import { useEffect, useState } from 'react';
import axios from '../utils/axios';

import './dashboard.css';

const TEST = () => {
  const [data, setData] = useState(1);

  useEffect(() => {
    axios.post('/api/test/', {testValue: 100})
      .then(res => {
        console.log(res)
        setData(res.data['testValue * 2'])
      })

    axios.get('/api/test/')
  }, [])

  return (
    <>
      <div class="sidebar">
        <div class="logo-details">
          <span class="user_name">name </span>
          <span class="user_name2">position</span>
        </div>
        <ul class="nav-links">
          <li>
            <a href="#" class= "active">
              <i class='bx bx-box' ></i>
              <span class="links_name">Dashboard</span>
            </a>
          </li>
            <li>
            <a href="#" class= "active2">
              <i class='bx bx-boxx' ></i>
                <span class="links_name">Messages</span>
            </a>
          </li>
          <li>
            <a href="#" class= "active3">
              <i class='bx bx-heart' ></i>
              <span class="links_name">Settings</span>
            </a>
          </li>
      
        <div class="buttons3">
          <div class="action_btn3">      
            <button name="enter" class="action_btn3 log out" type="submit" value="Log Out" onclick="Interaction">Log out</button>
            </ul>
      </div>
      <section class="home-section">
        <nav>
          <div class="search-box">
            <input type="text" placeholder="Search Dashboard..."/>
          </div>
          <div class = "dashboard">Dashboard</div>
        </nav>
        <div class="home-content">
          <div class="overview-boxes">
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Clients</div>
                <div class="number">2500</div>
              </div>
            </div>
            <i class='bx bx-cart-alt cart'></i>
          </div>
          <div class="sales-boxes">
            <div class="recent-activity box">
              <div class="title">Overview</div>
              <div>
              <div class="container">Recent Activity</div> 
              <div class ="rosa"> Rosa</div>
              <span class="contacts"></span>
               <img src ="Rosa.jpeg">
              <div class ="ashley">Ashley</div>                   <span class ="contacts2"></span>
              <img src="Ashley.jpeg">
              <div class ="bryan">Bryan</div>
              <span class ="contacts3"></span>
              <img src="Bryan.jpeg">
              <div class ="sarah">Sarah</div>                     <span class ="contacts4"></span> 
              <img src="Sarah.jpeg">
            
              </div>
          <div class="buttons">
            <div class="action_btn">
              <button name="enter" class="action_btn1 view clients" type="submit" value="View Clients" onclick="Interaction">View Clients</button>
              <button name="enter" class="action_btn2 access logs" type="submit" value="Access Logs" onclick="Interaction">Access Logs</button>
              <p id="saved"></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TEST;
