import clsx from "clsx";

const VARIANT_MAP = {
      blue: "bg-blue-accent text-text-opposite hover:bg-[var(--blue-accent-hover)] border-transparent",
      orange: "text-text-card bg-blue-btn  border border-border-card  hover:bg-orange-accent",
      "outline-blue": "bg-transparent text-blue-accent border-blue-accent hover:bg-blue-accent hover:text-white",
      buttonFilter: " w-max px-4 text-text-card bg-blue-btn  border border-border-card  hover:bg-orange-accent hover:text-text-opposite "
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
      text: string;
      variant?: keyof typeof VARIANT_MAP;
      icon?: React.ElementType;
      colorIcon?: string;
      onClick?: () => void;
      type?: "button" | "submit";
}



const Button = ({ icon: Icon, type = "button", text, variant = 'blue', colorIcon, onClick }: ButtonProps) => {
      return (
            <button type={type} className={clsx(" flex justify-center gap-3 w-full py-3 shadow-md/20 rounded-full text-sm font-bold transition-all duration-300",
                  VARIANT_MAP[variant],
            )}
            onClick={onClick}>
                  {Icon && <Icon size={20} color={colorIcon} />}
                  {text}
            </button>
      )
}

export default Button

