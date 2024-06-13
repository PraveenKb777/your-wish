import React from 'react'

export default function RoobunLayout({children}  :Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>RoobunLayout{children}</div>
  )
}
