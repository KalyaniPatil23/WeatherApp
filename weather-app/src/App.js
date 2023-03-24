import './App.css';
import Card from './Components/Card';
import './background.jpg'
import { useEffect } from 'react';
function App() {

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords)
    })
  }, [])
  return (
    <div>
      <div className='back'>

        <div className='nav'>
          <ul id='navItem'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Cities</a></li>
            <li><a href='#'>News</a></li>
          </ul>
        </div>

        <div>
          <div className='main-card'>
            <h3>Weather Details</h3>
            <div style={{ marginTop: '15%'}}>
              <div style={{float: 'left', width: '70%'}}>Cloudy</div>
              <div style={{float: 'right', width: '30%'}}>10%</div>
            </div>
            <div style={{ paddingTop: '15%'}}>
              <div style={{float: 'left', width: '70%'}}>Humidity</div>
              <div style={{float: 'right', width: '30%'}}>62%</div>
            </div>
            <div style={{ marginTop: '15%'}}>
              <div style={{float: 'left', width: '70%'}}>Wind</div>
              <div style={{float: 'right', width: '30%'}}>8km/h</div>
            </div>

          </div>
        </div>
        <div style={{fontWeight: 'bold', textAlign:'left', bottom: 0, left: 0, width: '100%', padding: '5%'}}>
            <div style={{ height: '100%', color: 'white', fontSize: '100px', width: '20%', float: 'left'}}>32 &deg;</div>
            <div style={{width: '10%', float: 'left', paddingTop: '5%'}}>
              <div style={{width: '70%', color: 'white', fontSize: '32px'}}>City</div>
              <div style={{width: '70%', color: 'white', display: 'flex'}}>
                <div>time</div><div>day</div><div>date</div>
              </div>
            </div>
        </div>
      </div>
      <div>
        <h2 style={{textAlign: 'center', color: 'purple'}}>Cities</h2>
        <div style={{display: 'flex'}}>
          <Card title={'Thunder'} imageUrl={'https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg?auto=compress&cs=tinysrgb&w=860&h=200&dpr=2'}/>
          <Card title={'Thunder'} imageUrl={'https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg?auto=compress&cs=tinysrgb&w=860&h=200&dpr=2'}/>
          <Card title={'Thunder'} imageUrl={'https://images.pexels.com/photos/1102915/pexels-photo-1102915.jpeg?auto=compress&cs=tinysrgb&w=860&h=200&dpr=2'}/>

        </div>
      </div>
    </div>
  );
}

export default App;
