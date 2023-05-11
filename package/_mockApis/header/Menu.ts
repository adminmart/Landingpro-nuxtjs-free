
export interface menu {
    header?: string;
    title?: string;
    children?: menu[];
    to?: string;
}

const sidebarItem: menu[] = [
    {
        title: 'Custom Components',
        to: '/'
    },
    {
        title: 'Basic Components',
        to: '/basic-components'
    },
];

export default sidebarItem;
