export const useBadgeStyles = (color, shape) => {
  const COLORS = {
    gray: 'gray',
    red: 'red',
    yellow: 'yellow',
    green: 'green',
    blue: 'blue',
    indigo: 'indigo',
    purple: 'purple',
    pink: 'pink',
    white: 'white',
  }

  const SHAPES = {
    square: 'square',
    pill: 'pill',
  }

  return {
    badgeColor: COLORS[color] || COLORS.white,
    badgeShape: SHAPES[shape] || SHAPES.square,
  }
}
