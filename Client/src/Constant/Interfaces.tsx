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

export interface ITitleInput {
  title: string;
  setTitle: any;
  setStatus: any;
}
export interface ITextArea {
  content: string;
  setContent: any;
  setStatus: any;
}

export interface IToolBar {
  status: boolean;
  handleSave: any;
}
export interface ICard {
  key: number;
  data: any;
}
