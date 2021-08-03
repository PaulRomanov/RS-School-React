import './styles.scss';
import Form from './components/form/form';
import Card from './components/card/card';
import { useState } from 'react';

export const App = () => {
  const [formValues, setFormValues] = useState([]);
  return (
    <div>
      <Form setFormValues={setFormValues} />
      <main>
        {formValues.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </main>
    </div>
  );
};

export default App;
