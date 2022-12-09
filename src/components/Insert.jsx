import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'

const Insert = ({ data, setData, edata, emode, setEmode, setEdata }) => {

    const [name, setName] = useState("")
    const [contact, setContact] = useState( "")
    const [study, setStudy] = useState("")
    const [maths, setMaths] = useState("")
    const [sci, setSci] = useState("")
    const [hindi, setHindi] = useState("")
    const [sst, setSst] = useState("")
    const [eng, setEng] = useState("")

    const handleClear = () => {
        setName("")
        setContact('')
        setStudy('')
        setMaths('')
        setSci('')
        setHindi('')
        setSst('')
        setEng('')
    }

   
    useEffect(() => {
        setName((edata?.name) ? edata.name : "")
        setContact((edata?.contact) ? edata.contact : "")
        setStudy((edata?.study) ? edata.study : "")
        setMaths((edata?.maths) ? edata.maths : "")
        setSci((edata?.sci) ? edata.sci : "")
        setHindi((edata?.hindi) ? edata.hindi : "")
        setSst((edata?.sst) ? edata.sst : "")
        setEng((edata?.eng) ? edata.eng : "")
    }, [edata])

    const handleSubmit = () => {
        if (emode) {
            setData(
                data.map((items) => {
                    if (items.id === edata.id) {
                        return { ...items, name: name, contact: contact, study: study, maths: maths, sci: sci, hindi: hindi, sst: sst, eng: eng }
                    }

                    return items;
                })
            )
            handleClear();
            setEdata({})
            setEmode(false);
            swal('BOOM GUYs', 'record is update successfully', 'success')
        }
        else {
            let unicId=Math.random()*101;
            const newObj = {
                id:unicId , name, contact, study, maths, sci, hindi,
                sst, eng
            }
            setData([...data, newObj])
            handleClear();
            swal('Boom Guys', 'record is inserted successfully', 'success')
        }
    }

    return (
        <div className='flex flex-col'>
            <div className="">
                <label htmlFor="name">Name</label><br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='px-3 py-1.5 border border-blue-400 rounded-lg w-full' />
            </div>
            <div className="">
                <label htmlFor="name">Contact</label><br />
                <input type="number" value={contact} onChange={(e) => setContact(e.target.value)} className='px-3 py-1.5 border border-blue-400 rounded-lg w-full' />
            </div>
            <div className="">
                <label htmlFor="name">Class</label><br />
                <input type="text" value={study} onChange={(e) => setStudy(e.target.value)} className='px-3 py-1.5 border border-blue-400 rounded-lg w-full' />
            </div>
            <div className="">
                <label htmlFor="name">Maths</label><br />
                <input type="text" value={maths} onChange={(e) => setMaths(+e.target.value)} className='px-3 py-1.5 border border-blue-400 rounded-lg w-full' />
            </div>
            <div className="">
                <label htmlFor="name">Sci</label><br />
                <input type="text" value={sci} onChange={(e) => setSci(+e.target.value)} className='px-3 py-1.5 border border-blue-400 rounded-lg w-full' />
            </div>
            <div className="">
                <label htmlFor="name">Hindi</label><br />
                <input type="text" value={hindi} onChange={(e) => setHindi(+e.target.value)} className='px-3 py-1.5 border border-blue-400 rounded-lg w-full' />
            </div>
            <div className="">
                <label htmlFor="name">SST</label><br />
                <input type="text" value={sst} onChange={(e) => setSst(+e.target.value)} className='px-3 py-1.5 border border-blue-400 rounded-lg w-full' />
            </div>
            <div className="">
                <label htmlFor="name">English</label><br />
                <input type="text" value={eng} onChange={(e) => setEng(+e.target.value)} className='px-3 py-1.5 border border-blue-400 rounded-lg w-full' />
            </div>
            {
                (emode) ? <button type='button' onClick={(handleSubmit)} className='bg-blue-600 hover:bg-green-600 w-full mt-3 h-10 text-white hover:text-blue-600 font-bold rounded-sm'>Update</button> :
                    <button type='button' onClick={(handleSubmit)} className='bg-blue-600 hover:bg-green-600 w-full mt-3 h-10 text-white hover:text-blue-600 font-bold rounded-sm'>Insert</button>
            }

        </div>
    )
}

export default Insert