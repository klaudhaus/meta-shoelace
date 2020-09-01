import { html, ifDefined, up } from "lit-app"

const propUp = (update, data) => up(update, data, { propagate: true })

/**
 * Top menu using shoelace web components.
 * Each menu item should specify its label and an optional icon,
 * as well as EITHER the update function and data for that item, OR its sub-items.
 * @param icon The shoelace icon name (same as bootstrap-icons file names) for the trigger area.
 * @param items A list of { label, icon?, up?, data?, items? }
 * @returns {*}
 */
export function topMenu ({
  icon, items
}) {
  return html`
    <sl-dropdown class="kh-meta-shoelace-top-menu">
      <sl-icon name=${icon} slot="trigger" class="kh-trigger"></sl-icon>
      <sl-menu>
        ${items.map(menuItem)}
      </sl-menu>
    </sl-dropdown>`
}

function menuItem (item) {
  if (item.items) {
    return html`
      <sl-menu-divider></sl-menu-divider>
      <sl-details summary=${item.label} @click=${up(closeOthers, null, { propagate: true })}>
        ${item.items.map(menuItem)}
      </sl-details>`
  } else {
    return html`
      <sl-menu-item @click=${ifDefined(propUp(item.up, item.data))} ?disabled=${item.disabled}>
        ${item.label}
        ${item.icon && html`<sl-icon slot="prefix" name=${item.icon}></sl-icon>`}
      </sl-menu-item>`
  }
}

function closeOthers (_, event) {
  const details = document.querySelectorAll("sl-dropdown sl-details")
  for (const detail of details) {
    if (detail !== event.currentTarget) {
      detail.hide()
    }
  }
}
