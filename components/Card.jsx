import CardIcon from "../assets/card-icon.png"

export default function Badge({ children, title = "Easy Deployment" }) {
    return (
        <div className="card">
            <img className="card-icon" src={CardIcon} alt={`${title} icon`} />
            <h3 className="card-title">{title}</h3>
            <div className="card-children">{children}</div>
        </div>
    )
}
