import type { Meta, StoryObj } from "@storybook/react";

import Light from "./Light";

const meta: Meta<typeof Light> = {
  component: Light,
  title: "Light",
  tags:['autodocs'],
  argTypes: {
    varient: {
      control: { type: "radio" },
      options: ["green", "yellow", "red"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    varient: "red",
  },
};

/**  Red Traffic light*/ 
export const Red: Story = {
  args: {
    varient: "red",
  },
};

/** Yello  Traffic light*/ 
export const Yellow: Story = {
  args: {
    varient: "yellow",
  },
};

export const Green: Story = {
  args: {
    varient: "green",
  },
};

/**This will make the entire traffic light*/
export const Another: Story = {
  render: (arg) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        border: "2px solid black",
        width: "max-content",
        padding: 10,
      }}
    >
      <Light varient="red" />
      <Light varient="yellow" />
      <Light varient="green" />
    </div>
  ),
};
