const CustomTextarea = ({value, onChange, readOnly = false, placeholder = ''}) => (
  <textarea 
    readOnly={readOnly}
    className="w-full h-[200px] p-3 border" 
    value={value}
    onChange={onChange}
    placeholder={placeholder}
   />
);

export default CustomTextarea
