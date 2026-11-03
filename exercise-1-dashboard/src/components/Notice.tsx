import Icon from './Icon'

function Notice({
  message,
  onDismiss,
}: {
  message: string
  onDismiss: () => void
}) {
  return (
    <div
      aria-live="polite"
      className="fixed bottom-4 right-4 z-40 flex max-w-[calc(100%-2rem)] items-center gap-3 rounded-md bg-ink px-4 py-3 text-sm text-white shadow-lg"
      role="status"
    >
      <span>{message}</span>
      <button
        aria-label="Dismiss message"
        className="rounded p-1 text-white/80 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
        onClick={onDismiss}
        type="button"
      >
        <Icon name="close" className="size-4" />
      </button>
    </div>
  )
}

export default Notice
