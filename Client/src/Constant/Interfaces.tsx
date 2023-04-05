export interface IButton {
  label: string;
  btnClass: string;
  btnAction: any;
}

export interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  setAlert: any;
  closeAlert: any;
  setValue: any;
}

export interface IAlert {
  type: string;
  message: string;
}
