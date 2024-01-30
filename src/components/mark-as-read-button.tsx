"use client"

import { BookCheckIcon } from "lucide-react"
import { useTransition } from "react"

import { markAsRead } from "@/app/_actions"
import { useToast } from "@/components/ui/use-toast"
import { Book } from "@/db/schema"

export const MarkAsReadButton = ({ book }: { book: Book }) => {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const triggerToastSuccess = () => {
    toast({
      title: "Success!",
      description: `You've marked ${book.title} as read.`,
    })
  }

  const triggerToastError = () => {
    toast({
      title: "Error!",
      description: `Couldn't mark ${book.title} as read. Please try again.`,
    })
  }

  return (
    <button
      onClick={() =>
        startTransition(async () => {
          try {
            await markAsRead(book.id)
            await triggerToastSuccess()
          } catch (error) {
            await triggerToastError()
          }
        })
      }
      className="flex items-center gap-x-1.5"
    >
      <BookCheckIcon className="size-4" />

      <span>{`Mark as read`}</span>
    </button>
  )
}
