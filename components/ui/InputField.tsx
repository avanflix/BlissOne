interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function InputField({
  label,
  ...props
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <input
        {...props}
        className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
    </div>
  );
}