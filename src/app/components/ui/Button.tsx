type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  className?: string;
};

export const AuthButton: React.FC<ButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`${className} flex items-center justify-center gap-2 border border-gray-700 hover:bg-gray-800 transtion hover:border-gray-600 text-white py-2.5 rounded-lg text-sm cursor-pointer`}
    >
      {children}
    </button>
  );
};





type FormButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  type: string;
  children?: React.ReactNode;
  className?: string;
  text: string;
};

export const FormButton: React.FC<FormButtonProps> = ({
  text,
  children,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`${className} w-full bg-teal-500 hover:bg-teal-600 text-white font-medium  py-2.5 rounded-lg flex items-center justify-center transition disabled:opacity-70 cursor-pointer`}
    >
      {text ?? children}
    </button>
  );
};
