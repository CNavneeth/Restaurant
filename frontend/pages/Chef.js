import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import '../Chef.css'
function Chef() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:8081/api/data')
    .then(res=>res.json())
    .then(data=> setData(data))
    .catch(err=>console.log(err));

  },[] )
  
  console.log(data);
  const [chef_id, setChefId] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [rating, setRating] = useState('');
  const [salary, setSalary] = useState('');
  const[id,setId]=useState('');

  function handleSubmit(event){
    axios.post('http://localhost:8081/api/insert',{chef_id,name,dob,gender,rating,salary})
    .then(res=>console.log(res))
    .catch(err=> console.log(err));
    
  }

  function deleteBut(event){
    
    axios.post('http://localhost:8081/api/delete',{id})
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    window.location.reload();
  }
  const [isVisiblei, setIsVisiblei] = useState(false);
  const [isVisibled, setIsVisibled] = useState(false);

  function insertion(){
    const div = document.getElementById('insert');
    if (div) {
        div.style.display = isVisiblei ? 'none' : 'flex';
        setIsVisiblei(prevState => !prevState);
    }
  }
  function deletion(){
    const div = document.getElementById('delete');
        if (div) {
            div.style.display = isVisibled ? 'none' : 'flex';
            setIsVisibled(prevState => !prevState);
        }
  }
  return (
    <div>
      <Navbar /> 
      <div className="pagetop">
        <div className='leftl'>
          <h1>
            Chef Details
          </h1>
          <table>
            <thead>
              <th style={{padding:"33px"}}>CHEF</th>
              <th style={{padding:"33px"}}>NAME</th>
              <th style={{padding:"33px"}}>DOB</th>
              <th style={{padding:"33px"}}>RATING</th>
              <th style={{padding:"33px"}}>SALARY</th>
            </thead>
            <tbody>
              {data.map((d,i)=>(
                <tr key={i}>
                  <td style={{padding:"30px"}}>{d.chef_id}</td>
                  <td style={{padding:"30px"}}>{d.name}</td>
                  <td style={{padding:"30px"}}>{d.dob}</td>
                  <td style={{padding:"30px"}}>{d.gender}</td>
                  <td style={{padding:"30px"}}>{d.rating}</td>
                  <td style={{padding:"30px"}}>{d.salary}</td>

                </tr>
              )
                
              )}
            </tbody>
          </table>
        </div>
        <div className='rightr'>
          <div className='rightcon'>
          <h1 className='rightup'> Edit Here</h1>
            <div className='butt'>
              
            <button className='button-55' onClick={insertion} >INSERTION</button>
            <button className='button-55' onClick={deletion} >DELETION</button>
            </div>
          <div className='insert' id='insert' style={{display: isVisiblei ? 'flex' : 'none'}}>
          <h1>Insert Data</h1>
          <form>
                
                <input placeholder='ID' type="text" value={chef_id} onChange={e => setChefId(e.target.value)} />
                <input placeholder='Name' type="text" value={name} onChange={e => setName(e.target.value)} />
                <input placeholder='DOB' type="text" value={dob} onChange={e => setDob(e.target.value)} />
                <input placeholder='Gender' type="text" value={gender} onChange={e => setGender(e.target.value)} />
                <input placeholder='Rating' type="text" value={rating} onChange={e => setRating(e.target.value)} />
                <input placeholder='Salary' type="text" value={salary} onChange={e => setSalary(e.target.value)} />
                <button className='button-57' type="submit" onClick={handleSubmit}><span class="text" style={{fontSize:'20px',color:'rgb(148, 50, 239)'}}>Done?</span><span style={{color:'white',fontSize:'20px'}}>INSERT</span></button>
            </form>
            </div>
             <div className='delete' id='delete' style={{display: isVisibled ? 'flex' : 'none',transition:'0.5'}}>
             <h1>Delete data</h1>
             <form>
             <input placeholder='Enter ID to delete' type='text' value={id} onChange={e=> setId(e.target.value)}/>
             <button type="submit" className='button-57' onClick={deleteBut}><span class="text" style={{fontSize:'20px',color:'rgb(148, 50, 239)'}}>Done?</span><span style={{color:'white',fontSize:'20px'}}>DELETE</span></button>
             </form>
             </div>
             
             </div>
        </div>  
      </div>
    </div>
  )
}

export default Chef