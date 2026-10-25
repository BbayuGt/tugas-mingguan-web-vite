import AdminRow from './AdminRow'

export default function AdminTable({ items, onApprove, onReject }) {
  return (
    <table className="table rounded px-2 border-collapse">
      <thead>
        <tr className="table-row table-header-group">
          <th className="table-cell px-2 text-left">No</th>
          <th className="table-cell px-2 text-left">Source</th>
          <th className="table-cell px-2 text-left">Message</th>
          <th className="table-cell px-2 text-left">State</th>
          <th className="table-cell px-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <AdminRow
            key={item.id}
            item={item}
            onApprove={onApprove}
            onReject={onReject}
          />
        ))}
      </tbody>
    </table>
  )
}
