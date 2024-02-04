import { set } from 'mongoose';
import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Input() {


    const [title, settitle] = useState('');
    const [maintask, setmaintask] = useState([]);

    const handle = (e) => {
        e.preventDefault()
        if(title==='')
        {
            alert("please add task ")
        }
        else{

            setmaintask([...maintask, { title }]);
        }
        settitle('')

        console.log(render);
    }
    const deletehandle = (i) => {

        const copy = [...maintask]
        copy.splice(i, 1);
        setmaintask(copy)
    }




let rendertask = <h2 className='flex justify-center items-center mt-6'>No Task</h2>

if (maintask.length > 0) {
    

    rendertask = maintask.map((t, i) => {
        return (

            <>
            

             <div className='w-screen flex justify-center items-center mt-6'>
                <div className='w-[50%] h-auto  flex justify-end items-center'>
                    <h2 className='mr-96'>{t.title}</h2>
                    <div className='cursor-pointer	flex gap-6'>
                        <MdDelete onClick={() => {
                            deletehandle(i);
                        }}></MdDelete>
                        {/* <Link to='/edit'><FaEdit></FaEdit></Link> */}
                    </div>
                </div>

            </div>
            
            </>
           
        )

    })
}

return (

    <>

        <form onSubmit={handle} className='flex justify-center items-center' >

            <input className='mt-4 border-2 border-solid border-black rounded-lg ml-1 px-8 py-2 flex justify-center items-center' type="text" placeholder='Enter task' value={title} onChange={(e) => {
                settitle(e.target.value)
            }} />

            <button className='border-2  border-solid border-black m-6 px-3 mt-9 py-1 bg-green-600 text-white '>Add Task</button>


        </form>

        <hr />

        <div>
           
       
            {rendertask}
          
       
        </div>


    </>

)}
       

export default Input