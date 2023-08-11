import { useRouter } from "next/router";

export default function SelectedClientProjectPage() {
  const router = useRouter();

  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
      {router.query.clientprojectid}
    </div>
  );
}
