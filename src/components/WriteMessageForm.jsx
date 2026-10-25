import { useState } from 'react'

export default function WriteMessageForm({ onSubmitMessage, isVisible = true }) {
  const [text, setText] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (!isVisible) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return

    if (onSubmitMessage) {
      onSubmitMessage(text.trim())
    }
    setText('')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div id="write" className="flex flex-col max-w-md mx-auto w-full my-4">
      <textarea
        name="Message"
        id="msg"
        cols="30"
        rows="5"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message into the bottle..."
        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <input
        type="button"
        value="Submit"
        onClick={handleSubmit}
        className="btn bg-blue-100 rounded shadow hover:bg-blue-200 cursor-pointer py-2 font-medium"
      />
      {submitted && (
        <p className="text-sm text-green-700 text-center mt-2">
          Your message has been cast into the sea!
        </p>
      )}
    </div>
  )
}
