import { useEffect, useState } from "react";

export default function Memo({ memo, delele, updato }) {

    const [newname, setnewname] = useState('')
    const [ldname, setldname] = useState([])
    const [oldname, setoldname] = useState('')




    const handleChange = (e) => {

        setoldname(ldname[0])

        e.preventDefault();

        console.log(ldname)
        memo.name = "";
        setnewname(e.target.value);
    }

    useEffect(() => {
        setldname(array => [...array, memo.name]);


    }, [memo.name, oldname])



    return (
        <div className="notes">
            <textarea onChange={handleChange} className='note' value={memo.name === "" ? newname : memo.name}>
            </textarea>
            <div className="button-pack">
                <button className='button-53' onClick={() => { delele(memo.name) }} >delete</button>
                <button className='button-53' onClick={() => { updato(ldname[0], newname) }}>update</button>
            </div>
        </div>
    )

}
