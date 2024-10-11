import React from "react";
import { Layout } from "../../components/layout";
import PatentRoutes from "./routes/PatentRoutes";

function Patent() {
  return (
    <Layout>
      {/* Patent Routes will render the subroutes */}
      <PatentRoutes />
    </Layout>
  );
}

export default Patent;
