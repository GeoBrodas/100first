import { Fragment } from 'react';

function NormalInput({
  title,
  placeholder,
  field,
  value,
  setFormData,
  formData,
}) {
  return (
    <Fragment>
      <label className="font-medium text-white text-base md:text-lg">
        {title}
      </label>
      <input
        placeholder={placeholder}
        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
        className="w-4/5 p-2 rounded-md my-2"
        value={value}
      />
    </Fragment>
  );
}

export default NormalInput;
