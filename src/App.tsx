import { useState, useEffect } from 'react';
function App() {

  const [fields, setFields] = useState('John\nJane\nMike');
  const [template, setTemplate] = useState('Name: {}.upper, name used {}.lower');
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
          <h1 className="text-3xl font-black">Place</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-lg shadow-md p-6">
          
            <h3>Fields</h3>

            <textarea 
              className="w-full h-[200px] p-3 border border-gray-300 rounded-md"
              value={fields} 
              onChange={(e) => setFields(e.target.value) }
            />

          </div>

          <div className="bg-white rounded-lg shadow-md p-6">

            <h3>Template</h3>

            <textarea 
              className="w-full h-[200px] p-3 border border-gray-300 rounded-md"
              value={template} 
              onChange={(e) => setTemplate(e.target.value) }
            />
          
          </div>
        
        </div>

        <div className="mt-6 bg-white rounded-lg shadow-md p-6">

          <h3>Result</h3>

          <textarea 

          readOnly

          className="w-full h-[200px] p-3 bg-gray-50 border border-gray-300 rounded-md font-mono resize-none"

          value={output}
          
          />

        
        </div>


      </div>
    </div>
  )
}

export default App
