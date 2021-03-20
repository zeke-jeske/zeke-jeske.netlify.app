const sizes = {
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1800,
}

const device = {
  xs: `(max-width: ${sizes.sm - 1}px)`,
  sm: `(min-width: ${sizes.sm}px)`,
  md: `(min-width: ${sizes.md}px)`,
  lg: `(min-width: ${sizes.lg}px)`,
  xl: `(min-width: ${sizes.xl}px)`,
}

export default device
