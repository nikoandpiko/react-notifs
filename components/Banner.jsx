import SuccessIcon from "../assets/success.png"
import WarningIcon from "../assets/warning.png"
import ErrorIcon from "../assets/error.png"
import NeutralIcon from "../assets/neutral.png"

export default function Banner({ children, type = "neutral", line = "singleline" }) {
    const TYPES = {
        success: {
            icon: SuccessIcon,
            message: "Congratulations",
        },
        warning: {
            icon: WarningIcon,
            message: "Attention",
        },
        error: {
            icon: ErrorIcon,
            message: "There is a problem with your application",
        },
        neutral: {
            icon: NeutralIcon,
            message: "Update available",
        },
    }

    const { icon, message } = TYPES[type] || TYPES.neutral
    const bannerLines = line === "multiline" ? "multiline" : "singleline"

    return (
        <div className={`banner banner-${type}`}>
            <div className="banner-message-wrapper">
                <img className="banner-icon" src={icon} alt={type} />
                <h3 className="banner-message">{message}</h3>
            </div>
            {bannerLines === "multiline" && <div className="banner-children">{children}</div>}
        </div>
    )
}
