import './dashboard.css';

const Dashboard = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo-details">
          <i className='bx bxl-c-plus-plus'></i>
          <span className="user_name">  name </span>
          <span className="user_name2">position</span>
        </div>
        <div className="profile-details">
          <i className='bx bx-chevron-down' ></i>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#" className="active">
              <i className='bx bx-grid-alt' ></i>
              <span className="links_name">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-box' ></i>
              <span className="links_name">Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-heart' ></i>
              <span className="links_name">Settings</span>
            </a>
          </li>
          <li className="log_out">
            <a href="#">
              <i className='bx bx-log-out'></i>
              <span className="links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <nav>
          <div className="search-box">
            <input type="text" placeholder="Search Dashboard..."/>
          </div>
        </nav>
        <div className="home-content">
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Clients</div>
                <div className="number">2500</div>
              </div>
            </div>
            <i className='bx bx-cart-alt cart'/>
          </div>

          <div className="sales-boxes">
            <div className="recent-activity box">
              <div className="title">Overview</div>
              <div>
                <div id="container">Recent Activity</div>
              </div>
              <div className="buttons">
                <div className="action_btn">
                  <a href='/clients'>
                    <button 
                      name="enter" 
                      className="action_btn view clients" 
                      type="submit" 
                      value="View Clients"
                    >
                      View Clients
                    </button>
                  </a>
                  <button name="enter" className="action_btn access logs" type="submit" value="Access Logs">Access Logs</button>

                  <p id="saved"></p>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;