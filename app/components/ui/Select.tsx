type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
};

export function Select({ label, className = "", children, ...props }: SelectProps) {
  return (
    <div>
      {label && (
        <label className="block text-sm text-[#6b5a45] mb-2 font-medium">
          {label}
        </label>
      )}
      <select
        className={`w-full text-[#6b5a45] px-5 py-3.5 rounded-2xl border border-[#d4b88a] 
                    text-lg focus:outline-none focus:border-[#3f2e1e] appearance-none
                    bg-white ${className}`}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}