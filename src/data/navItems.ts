interface NavItem {
  id: number;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { id: 1, label: 'About', path: '#' },
  { id: 2, label: 'Services', path: '#' },
  { id: 3, label: 'Projects', path: '#' },
  { id: 4, label: 'Contact', path: '#' },
];

export default navItems;
