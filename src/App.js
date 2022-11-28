import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Memo from './components/Memo'

function App() {

  const [names] = useState([])
  const [nam, setnam] = useState('')

  const [createdtime , setcreatedtime] = useState('')



  const updato = (ldname, newname) => {
    if (newname === '') {

    }
    else {
      //  console.log(newname)

      axios.post('http://localhost:3001/update', { oldname: ldname, newname: newname })
      console.log(ldname)
      console.log(newname)

    }
    window.location.reload()

  }



  const delele = async (name) => {


    console.log(name)

    await axios.post('http://localhost:3001/delete', { name: name })

    window.location.reload()


  }


  const notesubmit = () => {

    axios.post('http://localhost:3001/notes', { nam })

    window.location.reload()
    console.log(createdtime)
  }




  useEffect(() => {
    axios.post('http://localhost:3001/get')

      .then((res, err) => {
        if (err) {
          return err;
        }
        let contents = res.data;

        contents.forEach((element) => {
          names.push(element)


        })
        for (let i = 0; i <= names.length; i++) {
          setcreatedtime(i)
        }


      })



  }, [names])



  return (
    <div className='top-content'>
      <div className='title'>Notes</div>
      <div className='every'>
        <center className='new-note'>
          <input className='form-control' type='text' placeholder='enter new note' onChange={(e) => { setnam(e.target.value) }}></input>
          <button className='button-52' onClick={notesubmit}  >submit</button>
        </center>
        <div className='notescollection'>
          {names.map((memo) => (
            <Memo
              key={memo._id}
              memo={memo}
              updato={updato}
              delele={delele}

            />
          ))}



        </div>
      </div>

    </div>
  );
}

export default App;
