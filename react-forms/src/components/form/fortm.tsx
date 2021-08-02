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

  const [radioBtn, setRadioBtn] = useState(false);
  const [radioBtnDirty, setRadioBtnDirty] = useState(false);
  const [radioBtnError, setRadioBtnError] = useState('You need to choose a gender');

  const [agreeCheck, setAgreeCheck] = useState(false);
  const [agreeCheckDirty, setAgreeCheckDirty] = useState(false);
  const [agreeCheckError, setAgreeCheckError] = useState('Ned to accept an agreement');


  // блокировка кнопки Submit
  useEffect(() => {
    if (user_nameError || user_surnameError || agreeCheckError || radioBtnError) {
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
    switch (e.target.name) {
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

  // для radioBtn
  const radioBtnHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioBtn(e.target.checked);
    if (!e.target.checked) {
      setRadioBtnError('You need to choose a gender');
    } else {
      setRadioBtnError('');
    }
  };

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

  const [date, setDate] = useState('');

  return (
    <div className="candidate-form">   
      <form className="decor">
      <div className="form-left-decoration"></div>
      <div className="form-right-decoration"></div>
      <div className="circle"></div>
      <div className="form-inner">
        <ul>
          <ol>
            {/* сообщение об ошибке */}
            {(user_nameDirty && user_nameError) && <div style={{ color: 'red' }}>{user_nameError}</div>}
            <label>Name:</label>
            <input onChange={e => user_nameHandler(e)} value={user_name} onBlur={e => blurHandler(e)} type="text" id="name" name="user_name"></input>
          </ol>
          <br />
          <ol>
            {/* сообщение об ошибке */}
            {(user_surnameDirty && user_surnameError) && <div style={{ color: 'red' }}>{user_surnameError}</div>}
            <label>Surname:</label>
            <input onChange={e => user_surnameHandler(e)} value={user_surname} onBlur={e => blurHandler(e)} type="text" id="surname" name="user_surname"></input>
          </ol>
          <br />
          <ol>
            <label htmlFor="calendarForTasks" >Date of Birth:</label>
            <input
              type="date"
              id="calendarForTasks"
              value={date}
              min={"1921-01-01"}
              max={"2021-08-01"}
              onChange={(e) => showCurrentDate()}
            />
          </ol>
          <br />
          {/* сообщение об ошибке */}
          {(radioBtnError && radioBtnDirty) && <div style={{ color: 'red' }}>{radioBtnError}</div>}
          <ol><label>Gender: </label>
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={(e) => radioBtnHandler(e)}
            />
            <label>Female</label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={(e) => radioBtnHandler(e)}
            />
          </ol>
          <ol>
            <p><select>
              <option value="1" >select the position for which you apply</option>
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
            {(agreeCheckError && agreeCheckDirty) && <div style={{ color: 'red' }}>{agreeCheckError}</div>}
            <p>I agree to the processing of data</p>
            <input type="checkbox" name='agreeCheck' onChange={(e) => agreeCheckHandler(e)} />
          </ol>
        </ul>
        <button disabled={!formValid} type="submit">Submit</button>
         </div>
      </form>
     
    </div>

  )
}

// const  handleSubmit = (e: any): void =>{
//   e.preventDefault();
//   e.target.reset();
// }


function showCurrentDate() {

  // var d = new Date(),

  //   new_value = d.toISOString().slice(0, 10);
  //   console.log("new_value ДОООО", new_value);
  let htmlValueId = document.getElementById('calendarForTasks') as HTMLInputElement;
  htmlValueId.value = " ";

  // htmlValueId.value = new_value;



  console.log("htmlValueId", htmlValueId);
  console.log("htmlValueId.value", htmlValueId.value);
  // console.log("new_value", new_value);
  var dateControl = document.querySelector('input[type="date"]') as HTMLInputElement;
  dateControl.value = '2000-06-01';
  console.log("dateControl.value", dateControl.value);

}

// function showCurrentDate()
// {
//     var getCurrentDay = new Date();
//     var year = getCurrentDay.getFullYear();
//     var month: String = '';
//     var month1 = getCurrentDay.getMonth() + 1;
//      if(month1 < 10){
//         month = '0' + month1  ;
//     }else{
//         month = month1;
//     }
//     var day = '';
//     if(getCurrentDay.getDate() < 10){
//         day = '0' + getCurrentDay.getDate();
//     }
//     else{
//         day = getCurrentDay.getDate();
//     }
//     var value1 = year + "-" + month + "-" + day ;
//     value1.toString();
//     var valueOld = document.getElementById("calendarForTasks");
//     valueOld.setAttribute('value', value1);
// }






export default Form;
function setagreeCheckError(arg0: string) {
  throw new Error('Function not implemented.');
}

function e(e: any) {
  throw new Error('Function not implemented.');
}

