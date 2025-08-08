import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Toast from "../components/Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["success", "error", "warning", "info"],
    },
    position: {
      control: { type: "select" },
      options: ["top-right", "top-left", "bottom-right", "bottom-left"],
    },
    duration: {
      control: { type: "number" },
    },
    showCloseButton: {
      control: { type: "boolean" },
    },
    showIcon: {
      control: { type: "boolean" },
    },
    message: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: "success",
    message: "Operation completed successfully!",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    message: "An error occurred while processing your request.",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    message: "Please check your input before continuing.",
  },
};

export const Info: Story = {
  args: {
    type: "info",
    message: "Here is some helpful information.",
  },
};

export const WithCloseButton: Story = {
  args: {
    type: "success",
    message: "This toast has a close button",
    showCloseButton: true,
    duration: 0,
  },
};

export const LongDuration: Story = {
  args: {
    type: "info",
    message: "This toast will stay for 10 seconds",
    duration: 10000,
  },
};

export const TopLeft: Story = {
  args: {
    type: "warning",
    message: "Toast positioned at top-left",
    position: "top-left",
  },
};

export const WithoutIcon: Story = {
  args: {
    type: "info",
    message: "This toast has no icon",
    showIcon: false,
  },
};

export const LongMessage: Story = {
  args: {
    type: "error",
    message:
      "This is a very long error message that demonstrates how the toast component handles longer text content gracefully.",
  },
};
