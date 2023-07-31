interface Nav {
  link: string
  label: string
}

export const NAV_TIL: Nav = {
  link: "/til",
  label: "TIL",
}
export const NAV_PROJECTS: Nav = {
  link: "/projects",
  label: "Projects",
}
export const NAV_LIFE: Nav = {
  link: "/life",
  label: "Life",
}

export const navList: Nav[] = [NAV_TIL, NAV_PROJECTS, NAV_LIFE]
