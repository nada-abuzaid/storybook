import React from "react";

import Cards from "./Cards";

export default {
  title: "Components/Card",
  component: Cards,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Cards {...args} />;

export const Card = Template.bind({});
Card.args = {
  image: "https://picsum.photos/id/1/200/300",
  title: "Card Title",
  description: "Card Description",
};
