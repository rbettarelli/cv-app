export default function InputField({
  name,
  placeholder,
  value,
  type,
  onChange
  
}) {


  console.log()
  return (
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      type={type}
      className="form-control"
      onChange={onChange}

    />
  );
}
