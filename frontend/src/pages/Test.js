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
     <html lang = "en">
<head>
  <meta charset= "UTF-8">
  <meta name= "viewport" content="width=device-width   intial-scale= 1.0">
  <link rel="stylesheet" href="dashboard.css">
  <script defer src="dashboard.js"></script>

</head>
<body>
  <div class="sidebar">
    <div class="logo-details">
       <span class="user_name">name </span>
       <span class="user_name2">position</span>
       </i>
  </div>
      <ul class="nav-links">
        <li>
          <a href="#" class= "active">
             <i class='bx bx-box' ></i>
            <span class="links_name">Dashboard</span>
          </a>
        </li>
        <li>
          <ul class="nav-links2">
          <a href="#" class= "active2">
            <i class='bx bx-box' ></i>
            <span class="links_name">Messages</span>
          </a>
        </li>
        <li>
          <ul class="nav-links3">
          <a href="#" class= "active3">
       <a href="#">
       <i class='bx bx-heart' ></i>
            <span class="links_name">Settings</span>
          </a>
        </li>
       <li>
     <div class="buttons3">
        <div class="action_btn3">      
          <button name="enter" class="action_btn3 log out" type="submit" value="Log Out" onclick="Interaction">Log out</button>
          </a>
        </li>
      </ul>
  </div>
  <section class="home-section">
    <nav>
      <div class="search-box">
        <input type="text" placeholder="Search Dashboard...">
      </div>
      <div class = "dashboard">Dashboard</div>
      <div class="profile-details"> 
      </div>
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
          </ul>
         <div>
           <div class= "container">Recent Activity</div>
           <span class ="contacts"</span>
           <div class ="rosa"> Rosa</div>
            <div class ="ashley">Ashley</div>
               <img src="Ashley.jpeg">
             <span class ="contacts2"</span>
            <div class ="bryan">Bryan</div>
               <img src="Bryan.jpeg">
             <span class ="contacts3"</span>
            <div class ="sarah">Sarah</div>
               <img src="Sarah.jpeg">
             <span class ="contacts4"</span> 
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
  <script>
   let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function() {
  sidebar.classList.toggle("active");
  if(sidebar.classList.contains("active")){
  sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
}else
  sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}
 </script>

</body>
</html>
    </>
  );
}

export default TEST;
