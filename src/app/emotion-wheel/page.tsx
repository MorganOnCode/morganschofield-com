import { Metadata } from "next"
import EmotionWheelContent from "@/components/emotion-wheel-content"

export const metadata: Metadata = {
  title: "Wheel of Emotions | Morgan Schofield",
  description: "An interactive wheel of emotions to explore different feelings and their relationships.",
}

export default function EmotionWheelPage() {
  return <EmotionWheelContent />
} 