import './styles.scss';
import { useState } from 'react';
import Form from './components/form/form';
import Card, { Item2Props } from './components/card/card';

export const App = () => {
  const [formValues, setFormValues] = useState<Item2Props[]>([]);
  return (
    <div>
      <Form setFormValues={setFormValues} />
      <main>
        {formValues.map((item, index) => {
          return <Card itemI={item} key={index.toString()} />;
        })}
      </main>
    </div>
  );
};

export default App;
