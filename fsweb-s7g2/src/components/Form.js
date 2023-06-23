import {useState} from "react"

 const Form = (props) => {
      const[member,setMember]=useState({
      firstName:"",
      lastName:"",
      email:"",
      position:""

      });

    const submitHandler=(e)=>{
           e.preventDefault();    
           props.setUyeler([...props.uyeler,member])
           setMember({
            firstName:"",
            lastName:"",
            email:"",
            position:""})
                

    };
    const changeHandler=(e)=>{
     const{name,value}=e.target;

     setMember({...member, [name]:value});

    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Name=
                    <input type="text" name="firstName" placeholder="İsim giriniz" onChange={changeHandler} value={member.firstName} />
                </label>
                <label >FirstName=
                    <input type="text" name="lastName"  placeholder="SoyAd giriniz" onChange={changeHandler} value={member.lastName} />
                </label>
                <label >Email=
                    <input type="email" name="email"  placeholder="Email giriniz" onChange={changeHandler} value={member.email} />
                </label>
                <label >Position=
                    <input type="text" name="position"  placeholder="Pozisyon giriniz" onChange={changeHandler} value={member.position}/>
                </label>
                <button type="submit" >Gönder</button>


            </div>
        </form>



    );


};
export default Form;