import { html } from "lit-app"
import { topMenu } from "../comp/top-menu"
import { app } from "lit-app/contexts/lit-html-client"

const model = {
  currentPage: "Home"
}

const nav = page => model.currentPage = page

const view = ({ model }) => html`
  <header>
    ${topMenu({
      icon: "list",
      items: [
        { label: "Home", up: nav, data: "Home", icon: "house" },
        { label: "Help", up: nav, data: "Help", items: [
          { label: "About", up: nav, data: "About", icon: "info" },
          { label: "Support", up: nav, data: "Support", icon: "headset" },
        ] }
      ]
    })}
    <span>My Application</span>
    ${topMenu({
      icon: "person",
      items: [
        { label: "Profile", up: nav, data: "Home", icon: "person-fill" },
        { label: "Activity", up: nav, data: "Home", icon: "alarm" },
        { label: "Logout", up: nav, data: "Home", icon: "box-arrow-right" }
      ]
    })}
  </header>
  <article>
    <h1>${model.currentPage}</h1>
  </article>
`

app({ model, view })
