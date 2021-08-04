import './styles.scss';
import Form from './components/form/form';
import Card, { item2Props } from './components/card/card';
import { useState } from 'react';
import { itemProps } from './components/card/card';



export const App = () => {
  // const item: item2Props = {
  //   user_name: '',
  //   user_surname: '',
  //   radioBtn: '',
  //   birthDate: '',
  //   jobPosition: ''
  // };
  const [formValues, setFormValues] = useState<JSX.Element[]>([]);
  return (
    <div>
      <Form setFormValues={setFormValues} />
      <main>
        {formValues.map((item, index) => {
          return <Card itemI={item} key={index} />;
        })}
      </main>
    </div>
  );
};

export default App;
