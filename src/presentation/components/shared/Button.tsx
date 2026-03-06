import clsx from "clsx";

const VARIANT_MAP = {
      blue: "bg-blue-accent text-text-opposite hover:bg-[var(--blue-accent-hover)] border-transparent",
      orange: "text-text-card bg-blue-btn  border border-border-card  hover:bg-orange-accent",
      "outline-blue": "bg-transparent text-blue-accent border-blue-accent hover:bg-blue-accent hover:text-white",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
      text: string;
      variant?: keyof typeof VARIANT_MAP;
      onClick?: () => void;
      type?: "button" | "submit";
}



const Button = ({ type = "button", text, variant = 'blue', onClick }: ButtonProps) => {
      return (
            <button type={type} className={clsx("w-full py-3.5 rounded-full text-sm font-bold transition-all duration-300",
                  VARIANT_MAP[variant],
            )}
                  onClick={onClick}>
                  {text}
            </button>
      )
}

export default Button

