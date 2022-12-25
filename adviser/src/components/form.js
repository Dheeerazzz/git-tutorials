import {useState} from 'react';
//import './form.css';

const Form=(props)=>{


        const adduserhandler=(event)=>{
            event.preventDefault();
            props.onadduser(enteredusername);
            console.log(enteredusername)
           // console.log(event)
        };
    
        const [enteredusername,setenteredusername]=useState('')

        const changed=(event)=>{
            setenteredusername(event.target.value);
        }

    return(
        <>
        <form className="formal" onSubmit={adduserhandler}>
        <label htmlFor="username"></label>
            <input className='textal' placeholder='what do you wanna do?' type="text" id="username" onChange={changed}/>
            <button type="submit" className='submital'>ok</button>
        </form>
        </>
    );
}
export default Form;