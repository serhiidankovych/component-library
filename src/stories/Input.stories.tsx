import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import Input, { InputProps } from "../components/Input";

const InteractiveInput = (args: InputProps) => {
  const [value, setValue] = useState(args.value || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    args.onChange?.(e);
  };

  const handleClear = () => {
    setValue("");
    args.onClear?.();
  };

  return (
    <Input
      {...args}
      value={value}
      onChange={handleChange}
      onClear={handleClear}
    />
  );
};

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  render: (args) => <InteractiveInput {...args} />,

  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "number", "email"],
    },
    clearable: { control: "boolean" },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },

    value: { table: { disable: true } },
    onChange: { table: { disable: true } },
    onClear: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password...",

    value: "initialPassword123",
  },
};

export const Clearable: Story = {
  args: {
    placeholder: "Type something to see clear button",
    clearable: true,
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter number...",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Enter email...",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
    value: "Cannot edit this",
  },

  render: (args) => <Input {...args} />,
};

export const PasswordWithClear: Story = {
  args: {
    type: "password",
    placeholder: "Password with clear",
    clearable: true,
    value: "secretpassword",
  },
};
