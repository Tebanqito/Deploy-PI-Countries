const FilterSeasonActivity = (props) => {
    const handleInputChange = (event) => {
        props.setFiltro(event.target.value);
    };


    return (
        <div>
            <label htmlFor="">Ingrese el nombre de la temporada para filtrar</label>
            <input value={props.filtro} type="text" onChange={handleInputChange} />
        </div>
    );
};

export default FilterSeasonActivity;