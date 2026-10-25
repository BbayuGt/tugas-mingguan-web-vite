import { useState } from 'react'
import Header from '../components/Header'
import MainContent from '../components/MainContent'
import MessageControl from '../components/MessageControl'
import WriteMessageForm from '../components/WriteMessageForm'
import Footer from '../components/Footer'

const INITIAL_MESSAGES = [
  'A bottle wash on the shore near you...',
]

export default function HomePage({ onAddNewMessage }) {
  const [messages] = useState(INITIAL_MESSAGES)
  const [messageIndex, setMessageIndex] = useState(0)
  const [isFormOpen, setIsFormOpen] = useState(true)

  const handleNextMessage = () => {
    setMessageIndex((prev) => (prev + 1) % messages.length)
  }

  const handleToggleForm = () => {
    setIsFormOpen((prev) => !prev)
  }

  const handleSubmit = (text) => {
    if (onAddNewMessage) {
      onAddNewMessage(text)
    }
  }

  return (
    <div className="shore-app">
      <Header />
      <main>
        <MainContent
          message={messages[messageIndex]}
          onNextMessage={handleNextMessage}
        />
        <MessageControl
          isFormOpen={isFormOpen}
          onToggleForm={handleToggleForm}
        />
        <WriteMessageForm
          isVisible={isFormOpen}
          onSubmitMessage={handleSubmit}
        />
      </main>
      <Footer />
    </div>
  )
}
