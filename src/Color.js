import React from 'react'

export default function Color({ colors = [] }) {
  if (!colors.length) return null
  return (
    <div className="container">
      {colors.map((color, i) => (
          <div
            key={i}
            className="color"
            style={{ background: color }}
          >{color}</div>
      ))}
    </div>
  )
}