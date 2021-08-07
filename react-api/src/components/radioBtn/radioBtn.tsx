import React from 'react'

export const RadioBtn = () => {
  return (
    <div>
       <label htmlFor="maleRadio">Gender: </label>
                <label htmlFor="maleRadio" className="label-male"> Male </label>
                <input
                  type="radio"
                  name="radioBtn"
                  value="male"
                  id="maleRadio"
                  // onChange={(e) => radioBtnHandler(e)}
                  // checked={radioBtn === 'male'}
                  required
                />
                <label htmlFor="radioBtn">Female</label>
                <input
                  type="radio"
                  name="radioBtn"
                  value="female"
                  id="femaleRadio"
                  // onChange={(e) => radioBtnHandler(e)}
                  // checked={radioBtn === 'female'}
                  required
                />
                <label htmlFor="radioBtn">Other</label>
                <input
                  type="radio"
                  name="radioBtn"
                  value="other"
                  id="otherRadio"
                  // onChange={(e) => radioBtnHandler(e)}
                  // checked={radioBtn === 'other'}
                  required
                />
    </div>
  )
}
