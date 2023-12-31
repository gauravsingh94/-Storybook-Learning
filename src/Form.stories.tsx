import type { Meta, StoryObj } from "@storybook/react";

import FormDemo from "./Form";

const meta: Meta<typeof FormDemo> = {
  component: FormDemo,
  title: "Form",
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};


