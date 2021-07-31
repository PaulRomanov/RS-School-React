import React from 'react';
import './form.scss';

const Form = () => {
  return (
    <div className="candidate-form">
      <form>
        <ul>
          <ol><label>Name:</label>
            <input type="text" id="name" name="user_name"></input>
          </ol>
          <ol> <label>Surname:</label>
            <input type="text" id="surname" name="user_surname"></input>
          </ol>
          <ol><input type="date" id="start" name="trip-start"
            value="2003-01-01"
            min="1921-01-01" max="2021-08-01"></input>
          </ol>
          <ol><label>Gender: </label>
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              value="male"
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
            <p>I agree to the processing of data</p>
          <input type="checkbox" />
           
          </ol>
        </ul>

      </form>


      <button type="submit">Submit</button>
    </div>

  )
}

export default Form;
