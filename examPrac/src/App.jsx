import { use, useState,useEffect } from 'react'




function App() {

  //    const[id,setId]=useState('');
  // const[name,setName]=useState('');
  // const[age,setAge]=useState('');
  //  const[city,setCity]=useState('');
  //  const[occupation,setOccupation]=useState('');
   const sampleData = [
    { id: 1, name: 'John Doe', age: 25, city: 'New York', occupation: 'Engineer' },
    { id: 2, name: 'Jane Smith', age: 30, city: 'San Francisco', occupation: 'Designer' },
    {id: 3, name: 'Jane s', age: 30, city: 'dan Francisco', occupation: 'Designer' }
  ];
  
     const cities=sampleData.map((data)=>data.city);
     
     const occupations=sampleData.map((data)=>data.occupation);

         const[filters,setFilters]=useState({
          name:'',
          age:'',
          city:'',
          occupation:'',


         })
         function changeHandler(e){
          setFilters({...filters, [e.target.name]:e.target.value})
         }
        const filteredData=sampleData.filter((data)=>{
          return (
            data.name.toLowerCase().includes(filters.name.toLowerCase()) &&
            data.age.toString().includes(filters.age) &&
            data.city.toLowerCase().includes(filters.city.toLowerCase()) &&
            data.occupation.toLowerCase().includes(filters.occupation.toLowerCase())
          )
        })
      

  return (
    <>
     <h1> user's list</h1>
     <input type="text" name='name' onChange={changeHandler}/>
     <input type="text" name='age' onChange={changeHandler}/>
       <select name="city" id="" onChange={changeHandler}>
        <option value="">All cities</option>
        { cities.map(city=><option value={city}>{city}</option>)}
        
       </select>

       <select name="occupation" id="" onChange={changeHandler}>
        <option value="">All occupations</option>
        { occupations.map(ocp=><option value={ocp}>{ocp}</option>)}
        
       </select>
       
       

       <table>
        <tHead>
          <tr> 
            <td> ID</td>
            <td> Name</td>
            <td>city</td>
            <td> age</td>
            <td> occupation</td>
          </tr>
          <tbody>
  {filteredData.map(data => (
  

    <tr key={data.id}>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.city}</td>
      <td>{data.age}</td>
      <td>{data.occupation}</td>
    </tr>
  ))}
</tbody>
        </tHead>
       </table>
      <button onClick={()=>{
        setFilters({
          name:'',
          age:'',
          city:'',
          occupation:'',

        })
      }} > reset</button>
      
 
    </>
  )
}

export default App
