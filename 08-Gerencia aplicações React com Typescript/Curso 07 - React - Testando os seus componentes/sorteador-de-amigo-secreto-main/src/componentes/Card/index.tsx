import React from "react"
import estilos from './Card.module.scss'

const Card: React.FC = ({ children }) => {
    return (
        <div className={estilos.card}>
            {children}
        </div>
    )
}

export default Card