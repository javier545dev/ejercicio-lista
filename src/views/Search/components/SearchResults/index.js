import SearchResultsItems from "./SearchResultsItems"

export default function SearchResults ({results, isSearching}) {
    return (
        <div style={{
            width: "100%",
            padding: "0rem 2rem 0rem 2rem",

        }}>
            {!results.length && isSearching && <p style={{textAlign:"center"}}>no hay resultados</p>}
            {results?.map((value) => {
                return <SearchResultsItems key={value.id} {...value}/> //otro ejemplo es  name={value.name} email={value.email} entre otros
                                                            //key es la llamada del id en el db
            })}
        </div>
    )
}