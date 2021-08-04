import './styles.scss';
import Form from './components/form/form';
import Card, { item2Props } from './components/card/card';
import { useState } from 'react';

export const App = () => {
  const [formValues, setFormValues] = useState<item2Props[]>([]);
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