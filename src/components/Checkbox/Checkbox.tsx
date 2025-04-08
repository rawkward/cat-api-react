type TCheckboxProps = {
  name: string;
  checked: boolean;
  onChange?: () => void;
  disabled: boolean;
};

const Checkbox = ({ name, disabled, checked, onChange }: TCheckboxProps) => {
  return (
    <label>
      <input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      {name}
    </label>
  );
};

export default Checkbox;
