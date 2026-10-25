export default function MessageControl({ isFormOpen, onToggleForm }) {
  return (
    <div id="control">
      <p>Tap the screen to view.</p>
      <a
        id="write"
        href="#write"
        onClick={(e) => {
          e.preventDefault()
          onToggleForm()
        }}
        className="underline hover:text-blue-600"
      >
        {isFormOpen ? 'Close message composer.' : 'Write your own message.'}
      </a>
    </div>
  )
}
