import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  label?: string;
  buttonSet?: string;
  icon?: any;
  iconString?: string;
  iconStringSet?: string;
  iconSet?: string;
}

export const ButtonTrans: FC<ButtonProps> = ({
  id,
  label,
  buttonSet,
  icon,
  iconSet,
  iconString,
  iconStringSet,
  ...props
}) => {
  return (
    <button
      id={id}
      className={`btn rounded-md text-sm  font-semibold normal-case bg-white border-none ${buttonSet}`}
      {...props}
    >
      <a href="" className={`text-lg ${iconStringSet}`}>
        {iconString}
      </a>
      <img src={icon} alt="" className={`${iconSet}`} />
      {label}
    </button>
  );
};

export const ButtonAction: FC<ButtonProps> = ({
  id,
  label,
  buttonSet,
  icon,
  iconSet,
  ...props
}) => {
  return (
    <button
      id={id}
      className={`rounded-md text-sm font-semibold normal-case bg-[#FAFAFA] border-none text-[#110D17] flex gap-2 py-2 px-5 text-center justify-center items-center content-center hover:bg-slate-600 ${buttonSet}`}
      {...props}
    >
      <img src={icon} alt="" className={` ${iconSet}`} />
      <p>{label}</p>
    </button>
  );
};
