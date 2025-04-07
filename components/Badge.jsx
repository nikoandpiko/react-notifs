export default function Badge({ children, color = "white", shape = "square" }) {
    const COLORS = {
        gray: "gray",
        red: "red",
        yellow: "yellow",
        green: "green",
        blue: "blue",
        indigo: "indigo",
        purple: "purple",
        pink: "pink",
        white: "white"
    }

    const SHAPES = {
        square: "square",
        pill: "pill"
    }

    const badgeColor = COLORS[color] || COLORS.white
    const badgeShape = SHAPES[shape] || SHAPES.square

    return (
        <button className={`btn-${badgeColor} badge badge-${badgeShape}`}>
            {children}
        </button>
    )
}
