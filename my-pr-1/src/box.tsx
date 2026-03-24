export default function Box(props: any) {

    const openCity = () => {

        props.setMessage({
            text: props.text,
            img: props.img,
            country: props.country,
            river: props.river,
            population: props.population
        })

    }

    return (

        <div className="city-btn" onClick={openCity}>
            {props.text}
        </div>

    )

}