import foods from '../foods.json';

export default function List() {
    return (
        <>
            <h2> Food List </h2>
            <hr />
            {
                foods.map((elt, index) => {
                    return(
                        <div key={index}>

                            <p> {elt.name} </p>
                            <img src={elt.image} width={250} alt="" />

                        </div>
                    )
                })
            }
        </>
    )
}
