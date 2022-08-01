import React from "react";

interface IProps {
  text: string;
}

function NoResults({ text }: IProps) {
  return <div>No Results!</div>;
}

export default NoResults;
