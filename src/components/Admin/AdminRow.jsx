export default function AdminRow({ item, onApprove, onReject }) {
  const rowClass =
    item.state === 'Approved'
      ? 'bg-lime-100'
      : item.state === 'Rejected'
      ? 'bg-rose-100'
      : ''

  return (
    <tr className={rowClass}>
      <td className="px-2">{item.id}</td>
      <td className="px-2">{item.source}</td>
      <td className="px-2 text-wrap">{item.message}</td>
      <td className="px-2">{item.state}</td>
      <td className="p-2 space-x-1">
        <button
          onClick={() => onApprove(item.id)}
          className="rounded-full bg-lime-200 hover:bg-lime-300 shadow p-2 cursor-pointer transition-colors"
        >
          Approve
        </button>
        <button
          onClick={() => onReject(item.id)}
          className="rounded-full bg-rose-200 hover:bg-rose-300 shadow p-2 cursor-pointer transition-colors"
        >
          Reject
        </button>
      </td>
    </tr>
  )
}
