import { memberShipStatus } from '../data/tableData'

function MembershipTable() {
  return (
    <section className="w-full overflow-x-scroll my-10">
          <table className="table-auto overflow-scroll bg-gray-200 border-accent2 border-2 text-neutral-700">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4 bg-gray-200">GUARDIANSHIP OF A COW</th>
                <th className="p-4 bg-white">WHITE custom amount</th>
                <th className="p-4 bg-green-800">GREEN 1 month</th>
                <th className="p-4 bg-orange-600">BRONZE 3 months</th>
                <th className="p-4 bg-slate-400">SILVER 6 months</th>
                <th className="p-4 bg-yellow-600">GOLD 1 year*</th>
                <th className="p-4 bg-slate-400">PLATINUM 5 years*</th>
                <th className="p-4 bg-sky-400">DIAMOND for life*</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4">Donation amount, Rupee</td>
                <td className="p-4">from 1000</td>
                <td className="p-4">4 900.00</td>
                <td className="p-4">14 500.00</td>
                <td className="p-4">28 700.00</td>
                <td className="p-4">57 250.00</td>
                <td className="p-4">286 130.00</td>
                <td className="p-4">1 431 000.00</td>
              </tr>
              {memberShipStatus.map((data) => (
                <>
                  <tr className="">
                    <td className="p-4">{data.d1}</td>
                    <td className="p-4">{data.d2 ? "✔" : ""}</td>
                    <td className="p-4">{data.d3 ? "✔" : ""}</td>
                    <td className="p-4">{data.d4 ? "✔" : ""}</td>
                    <td className="p-4">{data.d5 ? "✔" : ""}</td>
                     <td className="p-4">{data.d6 ? "✔" : ""}</td>
                     <td className="p-4">{data.d7 ? "✔" : ""}</td>
                    <td className="p-4">{data.d8 ? "✔" : ""}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </section>
  )
}

export default MembershipTable