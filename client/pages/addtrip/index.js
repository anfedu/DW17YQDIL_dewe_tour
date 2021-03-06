import React from "react";
import Layout from "../../components/layout";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { AuthContext } from "../../src/Provider";

const AddTrip = dynamic(() => import("../../components/addtrip"), {
  ssr: false,
});

export default function addtrip() {
  const context = React.useContext(AuthContext);
  const { user } = context;
  const router = useRouter();
  return (
    <Layout>
      <div style={{ minHeight: "81.9vh" }}>
        <AddTrip />
      </div>
    </Layout>
  );
}
