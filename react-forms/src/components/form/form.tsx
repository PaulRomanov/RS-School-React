import React, { useEffect, useState } from 'react';
import './form.scss';

type FormProps = {
  setFormValues:{
    user_name: string;
    user_surname: string;
    radioBtn: string;
    birthDate: string;
    jobPosition: string;
  };
  }
  
const Form = ({ setFormValues }: any) => {
  const [user_name, setUser_name] = useState('');
  const [user_surname, setUser_surname] = useState('');
  const [user_nameDirty, setUser_nameDirty] = useState(false);
  const [user_surnameDirty, setUser_surnameDirty] = useState(false);
  const [user_nameError, setUser_nameError] = useState('The field cannot be empty');
  const [user_surnameError, setUser_surnameError] = useState('The field cannot be empty');

  const [formValid, setFormValid] = useState(false);
  // useState<string | null | boolean | undefined>('');
  const [radioBtn, setRadioBtn] = useState<string | null>('');
  const [radioBtnDirty, setRadioBtnDirty] = useState(false);
  const [radioBtnError, setRadioBtnError] = useState('You need to choose a gender');

  const [agreeCheck, setAgreeCheck] = useState(false);
  const [agreeCheckDirty, setAgreeCheckDirty] = useState(false);
  const [agreeCheckError, setAgreeCheckError] = useState('Need to accept an agreement');

  const [birthDate, setBirthDate] = useState('');
  const [birthDateDirty, setBirthDateDirty] = useState(false);
  const [birthDateError, setBirthDateError] = useState('Need to accept an agreement');

  // useState<string | undefined>('');
  const [jobPosition, setJobPosition] = useState('');
  // const [jobPositionError, setjobPositionError] = useState('You need to choose a position');

  const handlerSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
      setFormValues((state: [])=>[...state, {user_name, user_surname, radioBtn, agreeCheck, birthDate, jobPosition}])
      reset();
  }

  const reset = () => {
    setAgreeCheck(false);
    setRadioBtn('');
    // setRadioBtn(false);
    setBirthDate('');
    setJobPosition('');
    setUser_name('');
    setUser_surname('');
    // setFormValid(false);
    // let radioInput = document.querySelector('input[name="radioBtn"]:checked') as HTMLInputElement;
    // radioInput.innerHTML = '';
    
  }

  // блокировка кнопки Submit
  useEffect(() => {
    if (user_nameError || user_surnameError || agreeCheckError  || birthDateError || radioBtnError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [user_nameError, user_surnameError, agreeCheckError,  birthDateError, radioBtnError ]);

  const user_nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser_name(e.target.value);
    const re = /^[a-zA-Z ]+$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setUser_nameError('Invalid name');
    } else {
      setUser_nameError('');
    }
  };

  const user_surnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser_surname(e.target.value);
    const re = /^[a-zA-Z ]+$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setUser_surnameError('Invalid surname');
    } else {
      setUser_surnameError('');
    }
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'user_name':
        setUser_nameDirty(true);
        break;
      case 'user_surname':
        setUser_surnameDirty(true);
        break;
      case 'agreeCheck':
        setAgreeCheckDirty(true);
    }
  };

  const birthDateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDate(e.target.value);
    if (!e.target.value) {
      setBirthDateError('Сhoose correct date');
    } else {
      setBirthDateError('');
    }
  };

  // для radioBtn

  const radioBtnHandler = (e: React.ChangeEvent<HTMLInputElement>) => {  
    setRadioBtn(e.target.value);
    // setRadioBtn(e.target.checked);
    if (!e.target.checked) {
      setRadioBtnError('You need to choose a gender');
      setRadioBtnDirty(true);
    } else {
      setRadioBtnError('');
    }
  };


  // для checkBox
  const agreeCheckHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreeCheck(e.target.checked);
    if (!e.target.checked) {
      setAgreeCheckError('Need to accept an agreement');
      setAgreeCheckDirty(true);
    } else {
      setAgreeCheckError('');
    }
  };


  //  // для списка
  //  const jobPositionHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setJobPosition(e);
  //   if (!e.target.value) {
  //     setjobPositionError('You need to choose a position');
  //     // setAgreeCheckDirty(true);
  //   } else {
  //     setjobPositionError('');
  //   }
  // };


  return (
    <div className="candidate-form">
 {/* onSubmit={handlerSubmit} */}
      <form className="decor" onSubmit={handlerSubmit}>     
        <div className="form-left-decoration" />
        <div className="form-right-decoration" />
        <div className="circle" />
        <div className="form-inner">
          <ul>
            <ol>
              {/* сообщение об ошибке */}
              {user_nameDirty && user_nameError && (
                <div style={{ color: 'red' }}>{user_nameError}</div>
              )}
              <label>Name:</label>
              <input
                onChange={(e) => user_nameHandler(e)}
                value={user_name}
                onBlur={(e) => blurHandler(e)}
                type="text"
                id="name"
                name="user_name"
              />
            </ol>
            <br />
            <ol>
              {/* сообщение об ошибке */}
              {user_surnameDirty && user_surnameError && (
                <div style={{ color: 'red' }}>{user_surnameError}</div>
              )}
              <label>Surname:</label>
              <input
                onChange={(e) => user_surnameHandler(e)}
                value={user_surname}
                onBlur={(e) => blurHandler(e)}
                type="text"
                id="surname"
                name="user_surname"
              />
            </ol>
            <br />
            <ol>
              {/* сообщение об ошибке */}
              {birthDateError && birthDateDirty && (
                <div style={{ color: 'red' }}>{birthDateError}</div>
              )}
              <label htmlFor="birthDate">
                Date of Birth:
                <input
                  type="date"
                  name="birthDate"
                  id="calendarForTasks"
                  value={birthDate}
                  min="1921-01-01"
                  max="2021-08-01"
                  // onChange={(e) => setBirthDate(e.target.value)}
                  onChange={(e) => birthDateHandler(e)}
                />
              </label>
            </ol>
            <br />
            {/* сообщение об ошибке */}
            {radioBtnError && radioBtnDirty && <div style={{ color: 'red' }}>{radioBtnError}</div>}
            <ol>
              <label>Gender: </label>
              <label>Male</label>
              <input type="radio" 
              name="radioBtn" 
              value="male" 
              id="maleRadio"
              onChange={(e) => radioBtnHandler(e)} 
              checked={radioBtn === 'male'}
              
              /> 
              <label>Female</label>
              <input
                type="radio"
                name="radioBtn"
                value="female"
                id="femaleRadio"
                onChange={(e) => radioBtnHandler(e)}
                checked={radioBtn === 'female'}
               
              />
            </ol>
            <ol>
              <p>
                <label>
                  select the position for which you apply:
                  <select
                    name="jobPosition"
                    value={jobPosition}
                    onChange={(e) => setJobPosition(e.target.value)}
                    // onChange={() => jobPositionHandler(e)}
                  >
                    <option value="1">select the position</option>
                    <option >Trainee</option>
                    <option>Junior Developer</option>
                    <option>Middle Developer</option>
                    <option>Senior Developer</option>
                    <option>Team Leader</option>
                    <option>Project Manager</option>
                  </select>
                </label>
              </p>
            </ol>
            <ol>
              {/* сообщение об ошибке */}
              {agreeCheckError && agreeCheckDirty && (
                <div style={{ color: 'red' }}>{agreeCheckError}</div>
              )}
              <p>I agree to the processing of data</p>
              <input checked={agreeCheck} type="checkbox" name="agreeCheck" id="checkId" onChange={(e) => agreeCheckHandler(e)} />
            </ol>
          </ul>
          <button disabled={!formValid} type="submit" id="btnSubmitId" >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
function setagreeCheckError(arg0: string) {
  throw new Error('Function not implemented.');
}

function e(e: any) {
  throw new Error('Function not implemented.');
}
