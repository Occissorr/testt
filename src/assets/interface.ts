export interface HomeComponentProps extends Iprops {
  click: (props:Iprops)=>void;
};

export interface ButtonComponentProps {
  text: string;
  click: (param: string) =>void;
};

export interface Iprops{
  title: string;
  header: string;
  footer: string;
  body: string;
}