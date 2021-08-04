import './styles.scss';
import { useState } from 'react';
import Form from './components/form/form';
import Card, { item2Props } from './components/card/card';

export const App = () => {
  const [formValues, setFormValues] = useState<item2Props[]>([]);
  return (
    <div>
      <Form setFormValues={setFormValues} />
      <main>
        {formValues.map((item) => {
          return <Card itemI={item}  />;
        })}
      </main>
    </div>
  );
};

export default App;
