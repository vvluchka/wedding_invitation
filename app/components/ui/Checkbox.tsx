type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Checkbox({ label, className = "", ...props }: CheckboxProps) {
  return (
    <label className="flex items-center gap-4 cursor-pointer group">
      <input
        type="checkbox"
        className={`w-6 h-6 accent-[#6b5a45] cursor-pointer ${className}`}
        {...props}
      />
      <span className="text-xl font-medium text-[#6b5a45]">{label}</span>
    </label>
  );
}