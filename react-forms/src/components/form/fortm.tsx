import React, { useEffect, useState } from 'react';
import './form.scss';


const Form = () => {
  const [user_name, setUser_name] = useState('');
  const [user_surname, setUser_surname] = useState('');
  const [user_nameDirty, setUser_nameDirty] = useState(false);
  const [user_surnameDirty, setUser_surnameDirty] = useState(false);
  const [user_nameError, setUser_nameError] = useState('The field cannot be empty');
  const [user_surnameError, setUser_surnameError] = useState('The field cannot be empty');
  const [formValid, setFormValid] = useState(false)

  const [agreeCheck, setAgreeCheck] = useState(false);
  const [agreeCheckDirty, setAgreeCheckDirty] = useState(false);
  const [agreeCheckError, setAgreeCheckError] = useState('Ned to accept an agreement');

  const [radioBtn, setradioBtn] = useState(false);
  const [radioBtnDirty, setRadioBtnDirty] = useState(false);
  const [radioBtnError, setRadioBtnError] = useState('You need to choose a gender');
 

  // блокировка кнопки Submit
  useEffect(() => {
    if (user_nameError || user_surnameError || agreeCheckError || radioBtnError ) {
      setFormValid(false);
    } else {
      setFormValid(true);
      
     
    }
  }, [user_nameError, user_surnameError, agreeCheckError, radioBtnError]) 

  const user_nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser_name(e.target.value)
    const re = /^[a-zA-Z ]+$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setUser_nameError('Invalid name')
    } else {
      setUser_nameError('')
    }
  }

  const user_surnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser_surname(e.target.value)
    const re = /^[a-zA-Z ]+$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setUser_surnameError('Invalid surname')
    } else {
      setUser_surnameError('')
    }
  }

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name ) {
      case 'user_name':
        setUser_nameDirty(true);
        break
      case 'user_surname':
        setUser_surnameDirty(true);
        break
      case 'agreeCheck':
        setAgreeCheckDirty(true);
        

    }
  }
// для checkBox
  const agreeCheckHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreeCheck(e.target.checked);
    if (!e.target.checked) {
      setAgreeCheckError('Ned to accept an agreement');
      setAgreeCheckDirty(true);
    } else {
      setAgreeCheckError('');
    }
  };


// function handleData(e: { preventDefault: () => void; }){
//   e.preventDefault()
  
// }

  return (
    <div className="candidate-form">
      <form>
        <ul>
          <ol>
            {/* сообщение об ошибке */}
            {(user_nameDirty && user_nameError) && <div style={{ color: 'red' }}>{user_nameError}</div>}
            <label>Name:</label>
            <input onChange={e => user_nameHandler(e)} value={user_name} onBlur={e => blurHandler(e)} type="text" id="name" name="user_name"></input>
          </ol>
          <br/>
          <ol>
            {/* сообщение об ошибке */}
            {(user_surnameDirty && user_surnameError) && <div style={{ color: 'red' }}>{user_surnameError}</div>}
            <label>Surname:</label>
            <input onChange={e => user_surnameHandler(e)} value={user_surname} onBlur={e => blurHandler(e)} type="text" id="surname" name="user_surname"></input>
          </ol>
          <br/>
          <ol><input type="date" id="start" name="trip-start"
            value="2003-01-01"
            min="1921-01-01" max="2021-08-01"></input>
          </ol>
          <br/>
          <ol><label>Gender: </label>
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              value="male"
              // checked={false}
              // onChange={e => radioMaleHandler(e)}
            />
            <label>Female</label>
            <input
              type="radio"
              name="gender"
              value="female"
            />
          </ol>
          <ol>
            <p><select>
              <option value="1" selected>select the position for which you apply</option>
              <option >Trainee</option>
              <option >Junior Developer</option>
              <option >Middle Developer</option>
              <option >Senior Developer</option>
              <option >Team Leader</option>
              <option >Project Manager</option>
            </select></p>
          </ol>
          <ol>
          {/* сообщение об ошибке */}
          {( agreeCheckError && agreeCheckDirty) && <div style={{ color: 'red' }}>{agreeCheckError}</div>} 
       
            <p>I agree to the processing of data</p>
            <input type="checkbox" name= 'agreeCheck'  onChange={(e) => agreeCheckHandler(e)} />

          </ol>
        </ul>

      </form>


      <button disabled={!formValid} type="submit">Submit</button>
    </div>

  )
}

export default Form;
function setagreeCheckError(arg0: string) {
  throw new Error('Function not implemented.');
}

