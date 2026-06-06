import { supabase } from "@/lib/supabase";
import AdminLogoutButton from "@/components/AdminLogoutButton";

export default async function AdminPage() {

  const { data: leads, error } =
    await supabase
      .from("leads")
      .select("*")
      .order("id", {
        ascending: false,
      });

  if (error) {
    return (
      <div className="p-10">
        Error loading leads
      </div>
    );
  }

  return (
    <main className="p-10">

      <div className="flex justify-between items-center mb-8">

  <h1 className="text-4xl font-bold">
    Admin Dashboard
  </h1>

  <AdminLogoutButton />

</div>

      <div className="overflow-x-auto">

        <table className="w-full border">

          <thead className="bg-gray-100">

            <tr>

              <th className="border p-4">
                Name
              </th>

              <th className="border p-4">
                Phone
              </th>

              <th className="border p-4">
                Email
              </th>

              <th className="border p-4">
                Message
              </th>

            </tr>

          </thead>

          <tbody>

            {leads?.map((lead) => (

              <tr key={lead.id}>

                <td className="border p-4">
                  {lead.name}
                </td>

                <td className="border p-4">
                  {lead.phone}
                </td>

                <td className="border p-4">
                  {lead.email}
                </td>

                <td className="border p-4">
                  {lead.message}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}