import React, { useState, useEffect} from 'react';
function PasswordGen(){
            const [password, setPassword]=useState('');
            const[isChar, setIsChar]=useState(false);
            const [isNum, setIsNum]=useState(false);
            const [len, setLen]=useState(8);

            function creatPass(){
                let string="ABCCDERFGHIJKLMONPQRSTUVWXYZabcdefghijusoafajskae";
                if(isChar)
                {
                     string+="@$%^&*?'&^%$";
                }
                if(isNum)
                {
                    string+="1234567890"
                }
                 let pass='';
                 for(let i=0; i<len; i++){
                    pass += string.charAt(Math.floor(Math.random() * string.length));
                 }
                setPassword(pass);


            }
            function changeHandler(e){
                if(e.target.type==='range')
                {
                  
                    setLen(e.target.value)
                }
                if(e.target.type==='checkbox')
                    {
                        if(e.target.name==="isChar")
                        {
                            setIsChar(e.target.checked)
                        }
                        if(e.target.name==="isNum")
                            {
                                setIsNum(e.target.checked)
                            }
                    }
                    
            }
            useEffect(()=>{
                  creatPass();
            },[len,isChar, isNum])
    return (
    <>

               <input type="text" value={password} />
         <div> 
         <label htmlFor=""> length: {len} : </label>
         <input type="range" min={8} max={22} onChange={changeHandler} />
         </div>
          
           <div>
            <label> SP char allowed</label>
            <input type="checkbox" name='isChar'  onChange={changeHandler} />
         </div>
         <div>
            <label>  Num allowed</label>
            <input type="checkbox" name="isNum" id="" onChange={changeHandler} />
         </div>
    </>
    )
};

export default PasswordGen;