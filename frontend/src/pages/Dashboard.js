import './dashboard.css';

const Dashboard = () => {
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
        </ul>
        <div class="buttons3">
          <div class="action_btn3">      
            <button name="enter" class="action_btn3 log out" type="submit" value="Log Out" onclick="Interaction">Log out</button>
          </div>
        </div>
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
              <div class="container">Recent Activity</div>
              <span class="contacts"></span>
              <div class ="rosa"> Rosa</div>
              <div class ="ashley">Ashley</div>
              <img src="Ashley.jpeg"/>
              <span class ="contacts2"></span>
              <div class ="bryan">Bryan</div>
              <img src="Bryan.jpeg"/>
              <span class ="contacts3"></span>
              <div class ="sarah">Sarah</div>
              <img src="Sarah.jpeg"/>
              <span class ="contacts4"></span> 
            </div>
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

export default Dashboard;