interface Nav {
  link: string
  label: string
}

export const NAV_TIL: Nav = {
  link: "/til",
  label: "TIL",
}
export const NAV_ABOUT: Nav = {
  link: "/about",
  label: "About",
}

export const navList: Nav[] = [NAV_TIL, NAV_ABOUT]
