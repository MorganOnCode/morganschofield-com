"use client"

import { useState } from "react"
import EmotionWheel from "@/components/emotion-wheel"

export default function EmotionWheelContent() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null)

  const handleEmotionSelect = (emotion: string) => {
    setSelectedEmotion(emotion)
  }

  return (
    <div className="container px-4 py-12 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-5xl text-center">
        {/* 1. EmotionWheel component */}
        <div className="flex justify-center mb-8">
          <EmotionWheel onEmotionSelect={handleEmotionSelect} />
        </div>
        
        {/* 2. H1 "Wheel of Emotions" */}
        <h1 className="mb-4 text-4xl font-bold">Wheel of Emotions</h1>
        
        {/* 3. Description */}
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400 mx-auto max-w-3xl">
          This interactive wheel of emotions helps you identify and understand different emotions and their relationships.
          Click on any emotion to select it and explore the spectrum of human feelings.
        </p>
        
        {/* 4. H3 that updates on click */}
        {selectedEmotion && (
          <h3 className="text-2xl font-semibold mt-4 text-center">{selectedEmotion}</h3>
        )}
      </div>
    </div>
  )
} 