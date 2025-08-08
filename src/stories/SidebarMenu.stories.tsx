import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  BarChart,
  FileText,
  Home,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";

import SidebarMenu from "../components/SidebarMenu";

const basicMenuItems = [
  {
    id: "1",
    label: "Dashboard",
    icon: <Home className="h-4 w-4" />,
    onClick: () => console.log("Dashboard clicked"),
  },
  {
    id: "2",
    label: "Users",
    icon: <Users className="h-4 w-4" />,
    onClick: () => console.log("Users clicked"),
  },
  {
    id: "3",
    label: "Settings",
    icon: <Settings className="h-4 w-4" />,
    onClick: () => console.log("Settings clicked"),
  },
];

const nestedMenuItems = [
  {
    id: "1",
    label: "Dashboard",
    icon: <Home className="h-4 w-4" />,
    onClick: () => console.log("Dashboard clicked"),
  },
  {
    id: "2",
    label: "Products",
    icon: <ShoppingCart className="h-4 w-4" />,
    children: [
      {
        id: "2-1",
        label: "All Products",
        onClick: () => console.log("All Products clicked"),
      },
      {
        id: "2-2",
        label: "Categories",
        children: [
          {
            id: "2-2-1",
            label: "Electronics",
            onClick: () => console.log("Electronics clicked"),
          },
          {
            id: "2-2-2",
            label: "Clothing",
            onClick: () => console.log("Clothing clicked"),
          },
          {
            id: "2-2-3",
            label: "Books",
            onClick: () => console.log("Books clicked"),
          },
        ],
      },
    ],
  },
  {
    id: "3",
    label: "Orders",
    icon: <FileText className="h-4 w-4" />,
    badge: "5",
    children: [
      {
        id: "3-1",
        label: "Pending",
        badge: "3",
        onClick: () => console.log("Pending clicked"),
      },
      {
        id: "3-2",
        label: "Completed",
        badge: "2",
        onClick: () => console.log("Completed clicked"),
      },
    ],
  },
  {
    id: "4",
    label: "Analytics",
    icon: <BarChart className="h-4 w-4" />,
    onClick: () => console.log("Analytics clicked"),
  },
  {
    id: "5",
    label: "Settings",
    icon: <Settings className="h-4 w-4" />,
    onClick: () => console.log("Settings clicked"),
  },
];

const meta: Meta<typeof SidebarMenu> = {
  title: "Components/SidebarMenu",
  component: SidebarMenu,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    side: {
      control: { type: "select" },
      options: ["left", "right"],
    },
    showBackdrop: {
      control: { type: "boolean" },
    },
    title: {
      control: { type: "text" },
    },
    isOpen: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    isOpen: true,
    items: basicMenuItems,
    title: "Basic Menu",
  },
};

export const WithNestedItems: Story = {
  args: {
    isOpen: true,
    items: nestedMenuItems,
    title: "Navigation Menu",
  },
};

export const LeftSide: Story = {
  args: {
    isOpen: true,
    items: nestedMenuItems,
    title: "Left Sidebar",
    side: "left",
  },
};

export const Small: Story = {
  args: {
    isOpen: true,
    items: basicMenuItems,
    title: "Compact Menu",
    width: "sm",
  },
};

export const Large: Story = {
  args: {
    isOpen: true,
    items: nestedMenuItems,
    title: "Expanded Menu",
    width: "lg",
  },
};

export const NoBackdrop: Story = {
  args: {
    isOpen: true,
    items: nestedMenuItems,
    title: "No Backdrop",
    showBackdrop: false,
  },
};

export const WithBadges: Story = {
  args: {
    isOpen: true,
    items: [
      {
        id: "1",
        label: "Messages",
        icon: <FileText className="h-4 w-4" />,
        badge: "12",
        onClick: () => console.log("Messages clicked"),
      },
      {
        id: "2",
        label: "Notifications",
        icon: <BarChart className="h-4 w-4" />,
        badge: "New",
        onClick: () => console.log("Notifications clicked"),
      },
      {
        id: "3",
        label: "Tasks",
        icon: <FileText className="h-4 w-4" />,
        badge: "99+",
        children: [
          {
            id: "3-1",
            label: "Overdue",
            badge: "5",
            onClick: () => console.log("Overdue clicked"),
          },
          {
            id: "3-2",
            label: "Today",
            badge: "3",
            onClick: () => console.log("Today clicked"),
          },
        ],
      },
    ],
    title: "With Badges",
  },
};
