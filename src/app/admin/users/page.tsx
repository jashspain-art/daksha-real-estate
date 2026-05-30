import { prisma } from "@/lib/prisma";

export default async function AdminUsersPage() {
  const users = process.env.DATABASE_URL
    ? await prisma.websiteUser.findMany({ include: { logins: true }, orderBy: { createdAt: "desc" } })
    : [];

  return (
    <section className="bg-[#F8FAFC] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-[#0B2A6F]">Website Accounts</h1>
        <p className="mt-2 text-sm text-slate-600">Customer registrations and successful website sign-ins.</p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-slate-50 text-slate-500"><tr><th className="p-4">Name</th><th>Email</th><th>Phone</th><th>Joined</th><th>Successful logins</th></tr></thead>
            <tbody className="divide-y divide-slate-100">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="p-4 font-semibold">{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.createdAt.toLocaleDateString("en-IN")}</td>
                  <td>{user.logins.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {!users.length && <p className="p-5 text-sm text-slate-600">No website accounts recorded yet.</p>}
        </div>
      </div>
    </section>
  );
}
