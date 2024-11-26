import { useState, useEffect } from 'react';

import TextSection from './components/TextSection'
import htmlTpl from './tpls/html'

function App() {

  const [fields, setFields] = useState('Name\nEmail\nAge');
  const [template, setTemplate] = useState(htmlTpl);
  const [output, setOutput] = useState('');

  useEffect(() => {

    const generatedOutput = () => {

      const filters = {
          upper: (text) => text.toUpperCase(),
          lower: (text) => text.toLowerCase(),
      };

      const fieldsList = fields.split('\n').filter(field => field.trim());

      const result = fieldsList.map(field => {
        let temp = template;
        let parsed = temp.replace(/{}\.(\w+)/g, (_, filter) => {
          return filters[filter] ? filters[filter](field) : field;
        }).replace(/{}/g, field);
        return parsed;
      }).join('\n');

      setOutput(result);
    };

    generatedOutput();

  
  }, [fields, template]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black">{`{place}`}</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
           <TextSection title="Fields" value={fields} onChange={setFields} />   
           <TextSection title="Template" value={template} onChange={setTemplate}  />   
        </div>

        <div className="mt-5">
          <TextSection title="Result" value={output} readOnly />   
        </div>

      </div>
      <footer className="text-center mt-10">{`{place}`} is a juque.cl project</footer>
    </div>
  )
}

export default App
