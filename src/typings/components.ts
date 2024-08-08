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

export interface ContainerProps {
  children: React.ReactNode;
}

export interface InputProps {
  type: string;
  name: string;
  pattern: string;
  title: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  label: string;
  autocomplete?: string;
}

export interface ContactProps {
  id: string;
  name: string;
  email?: string;
  phone: string;
  favorite?: boolean;
}

export interface RouteProps {
  component: React.ComponentType;
  redirectTo: string;
}
