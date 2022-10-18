export interface IMenu {
    name: string;
    icon: JSX.Element;
    path: string;
}

export interface IContentMenu {
    name: string;
    icon?: JSX.Element;
    path?: string;
    children?: IMenu[];
}