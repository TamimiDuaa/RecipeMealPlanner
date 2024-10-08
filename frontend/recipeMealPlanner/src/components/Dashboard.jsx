import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../auth/authSlice';

function Dashboard() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const {logout} = useContext(AuthContext)
    console.log(user);
  
 useEffect(() => {

    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const Logout=async ()=>{
    logout();
    navigate('/');

  }
  return (
    <>
      <section className='heading'>
        <h1>Welcome {user.name}</h1>
        <p>Goals Dashboard</p>
      </section>

        <button onClick={Logout}>Logout</button>

      <section className='content'>
        {/* Render goals here */}
      </section>
    </>
  );
}

export default Dashboard;
