import React, { useState } from "react"

export default function GoogleTabs() {
  const [currentTab, setCurrentTab] = useState("all")

  return (
    <div>
      <h1>Current Tab: {currentTab}</h1>
      <hr />
      <ul className="section">
        <li onClick={() => setCurrentTab("all")}>All {currentTab === "all" && "(selected)"}</li>
        <li onClick={() => setCurrentTab("images")}>Images {currentTab === "images" && "(selected)"}</li>
        <li onClick={() => setCurrentTab("videos")}>Videos {currentTab === "videos" && "(selected)"}</li>
        <li onClick={() => setCurrentTab("news")}>News {currentTab === "news" && "(selected)"}</li>
      </ul>

      {currentTab === "all" && (
        <div>
          <h2>All Section</h2>
          <p>
            All Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestiae vel corporis sit rem quia animi excepturi corrupti qui perspiciatis,
            sequi reprehenderit consequuntur? Itaque et iste sed, odio praesentium dolor.
          </p>
          <h2>Images Section</h2>
          <p>
            Images Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestiae vel corporis sit rem quia animi excepturi corrupti qui perspiciatis,
            sequi reprehenderit consequuntur? Itaque et iste sed, odio praesentium dolor.
          </p>
          <h2>Videos Section</h2>
          <p>
            Videos Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestiae vel corporis sit rem quia animi excepturi corrupti qui perspiciatis,
            sequi reprehenderit consequuntur? Itaque et iste sed, odio praesentium dolor.
          </p>
          <h2>News Section</h2>
          <p>
            News Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestiae vel corporis sit rem quia animi excepturi corrupti qui perspiciatis,
            sequi reprehenderit consequuntur? Itaque et iste sed, odio praesentium dolor.
          </p>
        </div>
      )}
      {currentTab === "images" && (
        <div>
          <h2>Images Section</h2>
          <p>
            Images Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestiae vel corporis sit rem quia animi excepturi corrupti qui perspiciatis,
            sequi reprehenderit consequuntur? Itaque et iste sed, odio praesentium dolor.
          </p>
        </div>
      )}
      {currentTab === "videos" && (
        <div>
          <h2>Videos Section</h2>
          <p>
            Videos Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestiae vel corporis sit rem quia animi excepturi corrupti qui perspiciatis,
            sequi reprehenderit consequuntur? Itaque et iste sed, odio praesentium dolor.
          </p>
        </div>
      )}
      {currentTab === "news" && (
        <div>
          <h2>News Section</h2>
          <p>
            News Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestiae vel corporis sit rem quia animi excepturi corrupti qui perspiciatis,
            sequi reprehenderit consequuntur? Itaque et iste sed, odio praesentium dolor.
          </p>
        </div>
      )}
    </div>
  )
}
