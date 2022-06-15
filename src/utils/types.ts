export interface BtnProps {
  text: string;
}

export interface BoxIconProps {
  children: React.ReactNode;
  selected?: boolean;
  sizeBox?: '25px' | '30px' | '45px';
  sizeIcon?: '12.5px' | '15px' | '22.5px';
}

export interface CustomMenuItemProps {
  selected?: boolean;
  text: string;
  to: string;
  icon: React.ReactNode;
}

export interface StatsProps {
  title: string;
  text: string;
  revelantText: string;
  icon: React.ReactNode;
}
