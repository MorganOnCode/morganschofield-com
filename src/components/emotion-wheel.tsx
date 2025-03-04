"use client"

import { useState } from "react"
import { PRIMARY_EMOTIONS } from "@/types/emotions"
import { createArcPath, getTextPosition } from "@/utils/wheel-utils"

const DIMENSIONS = {
  CENTER: 400,
  CORE_RADIUS: 40.5,
  LAYER1_RADIUS: 120,
  LAYER2_RADIUS: 240,
  LAYER3_RADIUS: 350,
}

interface EmotionWheelProps {
  onEmotionSelect?: (emotion: string) => void;
}

export default function EmotionWheel({ onEmotionSelect }: EmotionWheelProps) {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null)

  // Function to handle emotion click
  const handleEmotionClick = (emotion: string) => {
    setSelectedEmotion(emotion)
    if (onEmotionSelect) {
      onEmotionSelect(emotion)
    }
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full max-w-[800px] overflow-auto mx-auto">
        <svg width="800" height="800" className="mx-auto" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid meet">
          <defs>
            {PRIMARY_EMOTIONS.map((emotion) => {
              const angle = emotion.rotation
              const isBottomHalf = angle > 90 && angle < 270

              return (
                <linearGradient
                  key={`gradient-${emotion.name}`}
                  id={`gradient-${emotion.name}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                  gradientTransform={`
                    rotate(${angle + (isBottomHalf ? 180 : 0)}, 0.5, 0.5)
                    translate(${isBottomHalf ? -1 : 0}, 0)
                  `}
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0%" stopColor={emotion.startColor} />
                  <stop offset="100%" stopColor={emotion.endColor} />
                </linearGradient>
              )
            })}
          </defs>

          {/* Render all emotion segments */}
          {PRIMARY_EMOTIONS.map((emotion) => {
            const segmentAngle = 60
            const startAngle = emotion.rotation
            const endAngle = startAngle + segmentAngle
            const midAngle = startAngle + segmentAngle / 2

            return (
              <g key={emotion.name}>
                {/* Primary emotion segment */}
                <path
                  d={createArcPath(
                    startAngle,
                    endAngle,
                    DIMENSIONS.CORE_RADIUS,
                    DIMENSIONS.LAYER1_RADIUS,
                    DIMENSIONS.CENTER,
                    DIMENSIONS.CENTER,
                  )}
                  fill={`url(#gradient-${emotion.name})`}
                  className="transition-all duration-200 hover:opacity-90 cursor-pointer"
                  onClick={() => handleEmotionClick(emotion.name)}
                />

                {/* Layer 2: Secondary Emotions */}
                {emotion.children.map((child, index) => {
                  const childSegmentAngle = segmentAngle / emotion.children.length
                  const childStartAngle = startAngle + index * childSegmentAngle
                  const childMidAngle = childStartAngle + childSegmentAngle / 2

                  const textPos = getTextPosition(
                    DIMENSIONS.CENTER,
                    DIMENSIONS.CENTER,
                    (DIMENSIONS.LAYER1_RADIUS + DIMENSIONS.LAYER2_RADIUS) / 2,
                    childMidAngle,
                    2,
                  )

                  return (
                    <g key={child.name}>
                      {/* Layer 2 segment */}
                      <path
                        d={createArcPath(
                          childStartAngle,
                          childStartAngle + childSegmentAngle,
                          DIMENSIONS.LAYER1_RADIUS,
                          DIMENSIONS.LAYER2_RADIUS,
                          DIMENSIONS.CENTER,
                          DIMENSIONS.CENTER,
                        )}
                        fill={`url(#gradient-${emotion.name})`}
                        className="transition-all duration-200 hover:opacity-80 cursor-pointer"
                        onClick={() => handleEmotionClick(child.name)}
                      />

                      {/* Layer 2 text */}
                      <text
                        x={textPos.x}
                        y={textPos.y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        transform={`rotate(${textPos.rotation}, ${textPos.x}, ${textPos.y})`}
                        className="fill-white text-xs font-medium pointer-events-none select-none"
                      >
                        {child.name}
                      </text>

                      {/* Layer 3: Tertiary Emotions */}
                      {child.children.map((tertiaryEmotion, tertiaryIndex) => {
                        const tertiarySegmentAngle = childSegmentAngle / child.children.length
                        const tertiaryStartAngle = childStartAngle + tertiaryIndex * tertiarySegmentAngle
                        const tertiaryMidAngle = tertiaryStartAngle + tertiarySegmentAngle / 2

                        const tertiaryTextPos = getTextPosition(
                          DIMENSIONS.CENTER,
                          DIMENSIONS.CENTER,
                          (DIMENSIONS.LAYER2_RADIUS + DIMENSIONS.LAYER3_RADIUS) / 2,
                          tertiaryMidAngle,
                          3,
                        )

                        return (
                          <g key={tertiaryEmotion}>
                            {/* Layer 3 segment */}
                            <path
                              d={createArcPath(
                                tertiaryStartAngle,
                                tertiaryStartAngle + tertiarySegmentAngle,
                                DIMENSIONS.LAYER2_RADIUS,
                                DIMENSIONS.LAYER3_RADIUS,
                                DIMENSIONS.CENTER,
                                DIMENSIONS.CENTER,
                              )}
                              fill={`url(#gradient-${emotion.name})`}
                              className="transition-all duration-200 hover:opacity-70 cursor-pointer"
                              onClick={() => handleEmotionClick(tertiaryEmotion)}
                            />

                            {/* Layer 3 text */}
                            <text
                              x={tertiaryTextPos.x}
                              y={tertiaryTextPos.y}
                              textAnchor="middle"
                              dominantBaseline="middle"
                              transform={`rotate(${tertiaryTextPos.rotation}, ${tertiaryTextPos.x}, ${tertiaryTextPos.y})`}
                              className="fill-white text-[10px] font-medium pointer-events-none select-none"
                            >
                              {tertiaryEmotion}
                            </text>
                          </g>
                        )
                      })}
                    </g>
                  )
                })}

                {/* Primary emotion text */}
                {(() => {
                  const textPos = getTextPosition(
                    DIMENSIONS.CENTER,
                    DIMENSIONS.CENTER,
                    (DIMENSIONS.CORE_RADIUS + DIMENSIONS.LAYER1_RADIUS) / 2,
                    midAngle,
                    1,
                  )

                  return (
                    <text
                      x={textPos.x}
                      y={textPos.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      transform={`rotate(${textPos.rotation}, ${textPos.x}, ${textPos.y})`}
                      className="fill-white text-sm font-medium pointer-events-none select-none"
                    >
                      {emotion.name}
                    </text>
                  )
                })()}
              </g>
            )
          })}

          {/* Core circle */}
          <circle cx={DIMENSIONS.CENTER} cy={DIMENSIONS.CENTER} r={DIMENSIONS.CORE_RADIUS} fill="#EAE7DC" />
          <text
            x={DIMENSIONS.CENTER}
            y={DIMENSIONS.CENTER}
            textAnchor="middle"
            className="text-sm font-medium fill-gray-600 pointer-events-none select-none"
          >
            <tspan x={DIMENSIONS.CENTER} dy="-0.7em">
              I'm
            </tspan>
            <tspan x={DIMENSIONS.CENTER} dy="1.4em">
              Feeling
            </tspan>
          </text>
        </svg>
      </div>
    </div>
  )
} 