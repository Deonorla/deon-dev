import React from "react";

interface Prop {
  $click: boolean;
}

const Intro = ({ $click }: Prop) => {
  return <div>Introduction</div>;
};

export default Intro;
