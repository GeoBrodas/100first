import { Fragment } from 'react';

function SocialLink({
  title,
  placeholder,
  labelData,
  value,
  setFormData,
  formData,
  field,
}) {
  return (
    <Fragment>
      <label className="font-medium text-white text-lg">{title}</label>
      <div className="flex items-center">
        <p className="bg-CustomDark p-2 text-sm md:text-base rounded-l-md text-white">
          {labelData}
        </p>
        <input
          value={value}
          placeholder={placeholder}
          onChange={(e) =>
            setFormData({ ...formData, [field]: e.target.value })
          }
          className="input-custom-social w-3/5 p-2 rounded-r-md my-2"
        />
      </div>
    </Fragment>
  );
}

export default SocialLink;
