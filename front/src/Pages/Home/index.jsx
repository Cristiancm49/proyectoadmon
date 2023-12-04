import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import { useState, useEffect } from 'react'

function Home() {

  const [paquetes, setPaquetes] = useState();

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/paquete')
      .then(response => response.json())
      .then(data => setPaquetes(data))
    
  }, [])

  return (
    <Layout>
      <div className='h-full w-11/12 grid gap-4 grid-cols-3 '>
      {
       paquetes?.map(item => (
         <Card  key={item.id} data={item}/>
       ))
      }
      </div>

      
    </Layout>
  )
}

export default Home