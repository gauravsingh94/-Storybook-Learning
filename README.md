# How to setup the storybook in our project.

**Step1** : Creating the react project

```bash
npm create vite@latest
```

**step2**: run the command to install the storybook.

```bash
npx storybook@latest init
```



---
# Creating our own story from scratch.


### Here we are going to create storybook for simple traffic light color.

**Setp 1** : We create a component name `Light.tsx` and we will simply make it round by applying some styling to it.

```tsx
type Props = {
  varient: "green" | "yellow" | "red";
};

const Light = ({ varient = "green" }: Props) => {
  return (
    <div
      style={{
        backgroundColor: varient,
        borderRadius: "50%",
        width: "50px",
        height: "50px",
      }}
    ></div>
  );
};

export default Light;
```

Step2: Create a `Light.stories.tsx` than write these code


Basic import statement
```ts
import type { Meta, StoryObj } from "@storybook/react";

import Light from "./Light";

```

Declaring meta type
```ts
const meta: Meta<typeof Light> = {
  component: Light,
  title: "Light",
};

export default meta;
```

Now here we started to creating the story 
```ts
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    varient: "red",
  },
};

export const Red: Story = {
  args: {
    varient: "red",
  },
};

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

```



Clicking on each story will give the different output.

![[Pasted image 20231117014802.png]]


we can also do like this
```ts
export const Another: Story = {
  args: {
    varient: "red",
  },
  render: (args) => <Light {...args} />,
};
```

### Code for making the `TrafficLight`

```ts
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
```

![[Pasted image 20231117020315.png]]



# we ca add the feature of selecting feature

By adding this code

```ts
const meta: Meta<typeof Light> = {
  component: Light,
  title: "Light",
  argTypes: {
    varient: {
      control: { type: "select" },
      options: ["green", "yellow", "red"],
    },
  },
};
```

![[Pasted image 20231117021725.png]]

#### By changing the control type to radio 
```ts
const meta: Meta<typeof Light> = {
  component: Light,
  title: "Light",
  argTypes: {
    varient: {
      control: { type: "radio" },
      options: ["green", "yellow", "red"],
    },
  },
};
```

#### This will make it radio button
![[Pasted image 20231117021816.png]]

