import React, { useState } from "react"

export default function GoogleTabs() {
  const [section, setSection] = useState("AllSection")
  const allSection = () => {
    setSection("AllSection")
  }
  const images = () => {
    setSection("images")
  }
  const videos = () => {
    setSection("vidoes")
  }
  const news = () => {
    setSection("news")
  }
  return (
    <div>
      <h1>Section Selection</h1>
      <h2>Current Section: {section}</h2>

      <ul className="section">
        <li onClick={allSection}>All Section</li>
        <li onClick={images}>Images</li>
        <li onClick={videos}>Videos</li>
        <li onClick={news}>News</li>
      </ul>
      <div>
        <h2>All Section</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, facilis possimus. Earum temporibus laudantium ducimus officiis blanditiis harum
          delectus amet?
        </p>
      </div>
      <div>
        <h2>Images</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, facilis possimus. Earum temporibus laudantium ducimus officiis blanditiis harum
          delectus amet?
        </p>
      </div>
      <div>
        <h2>Videos</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, facilis possimus. Earum temporibus laudantium ducimus officiis blanditiis harum
          delectus amet?
        </p>
      </div>
      <div>
        <h2>News</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, facilis possimus. Earum temporibus laudantium ducimus officiis blanditiis harum
          delectus amet?
        </p>
      </div>
    </div>
  )
}
