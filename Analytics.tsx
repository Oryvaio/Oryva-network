export default function Analytics() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center">
        Protocol Analytics
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="border p-6 rounded-xl">
          Total Value Locked
        </div>

        <div className="border p-6 rounded-xl">
          Active Loans
        </div>

        <div className="border p-6 rounded-xl">
          Borrowed SOL
        </div>
      </div>
    </section>
  );
}
