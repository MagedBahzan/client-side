import React from "react";
import { useParams } from "react-router-dom";

function BenefitsDetailesPage() {
  const param = useParams();
  console.log(param.id);

  return (
    <div>
      <h1>{param.id}</h1>
      <br />
      <p>This page is under construction & will be available soon</p>
    </div>
  );
}

export default BenefitsDetailesPage;
