import React from "react";
import Card from "../components/ui/Card/Index";

export default {
  title: "Components/Cards",
  component: Card,
  argTypes: {
    type: {
      options: ["row", "column"],
      control: { type: "select" },
    },
    date: {
      control: "date",
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card {...args} />;

export const Row = Template.bind({});
Row.args = {
  type: "row",
  image:
    "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80",
  title: "Storybook Integration",
  price: 12,
  date: new Date(),
};
export const Column = Template.bind({});
Column.args = {
  type: "column",
  image:
    "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80",
  title: "Storybook Integration",
  price: 12,
  date: new Date(),
};
