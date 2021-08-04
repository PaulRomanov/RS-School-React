import React, { FC, useEffect, useState } from 'react';
import './form.scss';
import { Item2Props } from '../card/card';

interface FormProps {
  setFormValues: React.Dispatch<React.SetStateAction<Item2Props[]>>;
}

const Form: FC<FormProps> = ({ setFormValues }) => {
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [userSurnameDirty, setUserSurnameDirty] = useState(false);
  const [userNameError, setUserNameError] = useState('The field cannot be empty');
  const [userSurnameError, setUserSurnameError] = useState('The field cannot be empty');

  const [formValid, setFormValid] = useState(false);

  const [radioBtn, setRadioBtn] = useState<string | boolean>(false);
  const [radioBtnDirty, setRadioBtnDirty] = useState(false);
  const [radioBtnError, setRadioBtnError] = useState('You need to choose a gender');

  const [agreeCheck, setAgreeCheck] = useState(false);
  const [agreeCheckDirty, setAgreeCheckDirty] = useState(false);
  const [agreeCheckError, setAgreeCheckError] = useState('Need to accept an agreement');

  const [birthDate, setBirthDate] = useState('');
  const [birthDateError, setBirthDateError] = useState('Need to accept an agreement');

  const [jobPosition, setJobPosition] = useState<string | undefined>('');
  const [jobPositionError, setjobPositionError] = useState('You need to choose a position');

  const reset = () => {
    setAgreeCheck(false);
    setRadioBtn(false);
    setBirthDate('');
    setJobPosition('');
    setUserName('');
    setUserSurname('');
  };

  const handlerSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setFormValues((state) => [
      ...state,
      { userName, userSurname, radioBtn, agreeCheck, birthDate, jobPosition },
    ]);
    reset();
    alert('YOU SUCCESSFULLY SUBMIT YOUR APPLICATION');
  };

  // блокировка кнопки Submit
  useEffect(() => {
    if (
      agreeCheck === false ||
      radioBtn === false ||
      birthDateError ||
      userNameError ||
      userSurnameError ||
      jobPositionError ||
      agreeCheckError ||
      radioBtnError
    ) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [
    userNameError,
    userSurnameError,
    agreeCheckError,
    birthDateError,
    radioBtnError,
    jobPositionError,
    agreeCheck,
    radioBtn,
  ]);

  const userNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
    const re = /^[a-zA-Z ]+$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setUserNameError('Invalid name');
    } else {
      setUserNameError('');
    }
  };

  const userSurnameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserSurname(e.target.value);
    const re = /^[a-zA-Z ]+$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setUserSurnameError('Invalid surname');
    } else {
      setUserSurnameError('');
    }
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'userName':
        setUserNameDirty(true);
        break;
      case 'userSurname':
        setUserSurnameDirty(true);
        break;
      case 'agreeCheck':
        setAgreeCheckDirty(true);
        break;
      default:
      // unknown type! based on the language,
      // there should probably be some error-handling
      // here, maybe an exception
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

  // для списка
  const jobPositionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setJobPosition(e.target.value);
    if (e.target.value === '1') {
      setjobPositionError('Сhoose type of payment');
    } else {
      setjobPositionError('');
    }
  };

  return (
    <div className="candidate-form">
      <form className="decor" onSubmit={handlerSubmit}>
        <div className="form-left-decoration" />
        <div className="form-right-decoration" />
        <div className="circle" />
        <div className="form-inner">
          <h3>Candidate card.</h3>
          <p className="title-form">Fill in all the fields.</p>
          <ul>
            <ol>
              {/* сообщение об ошибке */}
              {userNameDirty && userNameError && (
                <div style={{ color: 'red' }}>{userNameError}</div>
              )}
              <label htmlFor="userName" className="label-name">
                Name:
              </label>
              <input
                onChange={(e) => userNameHandler(e)}
                value={userName}
                onBlur={(e) => blurHandler(e)}
                type="text"
                id="name"
                name="userName"
                required
              />
            </ol>
            <br />
            <ol>
              {/* сообщение об ошибке */}
              {userSurnameDirty && userSurnameError && (
                <div style={{ color: 'red' }}>{userSurnameError}</div>
              )}
              <label htmlFor="surname" className="label-suname">
                Surname:
              </label>
              <input
                onChange={(e) => userSurnameHandler(e)}
                value={userSurname}
                onBlur={(e) => blurHandler(e)}
                type="text"
                id="surname"
                name="userSurname"
                required
              />
            </ol>
            <br />
            <ol>
              <label htmlFor="birthDate" className="label-date">
                Date of Birth:
                <input
                  type="date"
                  name="birthDate"
                  id="calendarForTasks"
                  value={birthDate}
                  min="1921-01-01"
                  max="2003-08-01"
                  onChange={(e) => birthDateHandler(e)}
                  required
                />
              </label>
            </ol>
            <br />
            {/* сообщение об ошибке */}
            {radioBtnError && radioBtnDirty && <div style={{ color: 'red' }}>{radioBtnError}</div>}
            <ol>
              <label htmlFor="maleRadio">Gender: </label>
              <label htmlFor="maleRadio" className="label-male">
                Male
              </label>
              <input
                type="radio"
                name="radioBtn"
                value="male"
                id="maleRadio"
                onChange={(e) => radioBtnHandler(e)}
                checked={radioBtn === 'male'}
                required
              />
              <label htmlFor="radioBtn">Female</label>
              <input
                type="radio"
                name="radioBtn"
                value="female"
                id="femaleRadio"
                onChange={(e) => radioBtnHandler(e)}
                checked={radioBtn === 'female'}
                required
              />
            </ol>
            <ol>
              <p>
                <label htmlFor="jobPosition">
                  select the position for which you apply:
                  <select
                    name="jobPosition"
                    value={jobPosition}
                    onBlur={(e) => jobPositionHandler(e)}
                    onChange={(e) => jobPositionHandler(e)}
                    required
                    id="jobPosition"
                  >
                    <option value="">select the position</option>
                    <option>Trainee</option>
                    <option>Junior Developer</option>
                    <option>Middle Developer</option>
                    <option>Senior Developer</option>
                    <option>Team Leader</option>
                    <option>Project Manager</option>
                  </select>
                </label>
              </p>
            </ol>
            <ol className="checkbox-box">
              {/* сообщение об ошибке */}
              {agreeCheckError && agreeCheckDirty && (
                <div style={{ color: 'red' }}>{agreeCheckError}</div>
              )}
              <p>I agree to the processing of data</p>
              <input
                checked={agreeCheck}
                type="checkbox"
                name="agreeCheck"
                id="checkId"
                onChange={(e) => agreeCheckHandler(e)}
                required
              />
            </ol>
          </ul>
          <button disabled={!formValid} type="submit" id="btnSubmitId">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
