export interface ButtonProps {
  type: "button" | "submit";
  onClick?: () => void;
  children: React.ReactNode;
}

export interface ContentProps {
  children: React.ReactNode;
}

export interface ButtonIconProps {
  onClick?: () => void;
  children: React.ReactNode;
  ariaLabel: string;
}
