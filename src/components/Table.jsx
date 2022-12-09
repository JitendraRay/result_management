import React from 'react'

const Table = ({ data,handleEdit, handleDelete }) => {
    return (
        <>

            <h1 className='text-2xl mb-2  text-center font-black uppercase text-slate-700'>manage result</h1>
            <table className='w-full border'>
                <thead>
                    <tr className='bg-gray-50 border-gray-500 border'>
                        <th className='border-r p-1 '>Id</th>
                        <th className='border-r p-1'>Name</th>
                        <th className='border-r p-1'>Contact</th>
                        <th className='border-r p-1'>Class</th>
                        <th className='border-r p-1'>Maths</th>
                        <th className='border-r p-1'>Sci</th>
                        <th className='border-r p-1'>SST</th>
                        <th className='border-r p-1'>Hindi</th>
                        <th className='border-r p-1'>English</th>
                        <th className='border-r p-1'>Total Marks</th>
                        <th className='border-r p-1'>Percentage</th>
                        <th className='border-r p-1'>Division</th>
                        <th className='border-r p-1'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value, index) => {
                            let total = value.maths+value.hindi+value.eng+value.sci+value.sst;
                            let percentage
                            if(total>=150 && total<250){
                                percentage = "3rd Division"
                            }
                            else if(total>=250 && total<=299){
                                 percentage = "2nd Division"
                            }
                            else if(total>=300){
                                 percentage = "1st Division"
                            }
                           else{
                            percentage = "Padhai kar le beta"
                           }
                           return(
                            <tr key={index} className='bg-gray-50 border-gray-500 border text-center'>
                            <td className='border-r p-1'>{index+1}</td>
                            <td className='border-r p-1'>{value.name}</td>
                            <td className='border-r p-1'>{value.contact}</td>
                            <td className='border-r p-1'>{value.study}</td>
                            <td className='border-r p-1'>{value.maths}</td>
                            <td className='border-r p-1'>{value.sci}</td>
                            <td className='border-r p-1'>{value.sst}</td>
                            <td className='border-r p-1'>{value.hindi}</td>
                            <td className='border-r p-1'>{value.eng}</td>
                            <td className='border-r p-1'>{total}</td>
                            <td className='border-r p-1'>{total/5}{'%'}</td>
                            <td className='border-r p-1'>{percentage}</td>
                            <td className='border-r p-1'><button  className='bg-red-600 hover:bg-red-700 px-2 py-1 text-white rounded-md' onClick={()=> handleDelete(value.id)}>Delete</button></td>
                            <td className='border-r p-1'><button className='bg-fuchsia-600 hover:bg-fuchsia-900 px-2 py-1 text-white rounded-md' onClick={()=>handleEdit(value)}>Edit</button></td>
                        </tr>

                           )
                        })
                    }
                </tbody>

            </table>
        </>
    )
}

export default Table