import CustomTextarea from './CustomTextarea'

const TextSection = ({title, value, onChange, readOnly = false}) =>  (

  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="mb-4 font-semibold">{title}</div>
    <CustomTextarea 
      value={value} 
      onChange={readOnly ? undefined : (e) => onChange(e.target.value)}
      readOnly={readOnly}
     />
  </div>

);

export default TextSection;
