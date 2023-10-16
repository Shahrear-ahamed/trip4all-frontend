export type ISidebarItem = {
  label: React.ReactNode;
  icon: React.ReactNode;
  key: string;
  children?: ISidebarItem[];
};
