export default function SearchResultsItems({ name, email}) {
    return (
                //ej de styled components, se agrega los estilos llamando sus propiedades con Camel Case alli ejemplicada en la sig linea
                    <div style={{
                        backgroundColor: "#E8E7E7",
                        marginTop: "1rem",
                        marginBottom:"1rem",
                        padding: 10,
                        width: "100%"
                    }}>
                        <p>{name}</p>
                        <p>{email}</p>
                    </div>
        
    )
}