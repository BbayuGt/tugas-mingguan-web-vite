export default function MainContent({ message, onNextMessage }) {
  return (
    <div
      id="main-content"
      onClick={onNextMessage}
      className="cursor-pointer select-none"
      title="Click to view another bottle"
    >
      <p>{message || 'A bottle wash on the shore near you...'}</p>
    </div>
  )
}
