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
}
export interface ITextArea {
  content: string;
  setContent: any;
}

export interface IToolBar {
  handleSave: any;
  handleBack: any;
}
export interface ICard {
  data: any;
  handleNavigate: any;
}

export interface ICRUDNotes {
  notesId: string;
  newNotes: {
    title: string;
    content: string;
  };
  setNotesId: any;
  setNewNotes: any;
  handleNotes: any;
  setNotesModal: any;
  initialNotes: any;
}
