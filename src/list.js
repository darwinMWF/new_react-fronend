


import './list.css'


const Items = (props) => {
    const { name, ispacked } = props;

    // let ticklist = name

    const Ticklist = () => {
        if (ispacked) {
            return <li>{name} <i className="fa fa-check-square"></i></li>
        }
        return (
            <>
                <li>{name}</li>
            </>
        )

    }

  
    // return (
    //     <>
    //         <li>{name}</li>
    //     </>
    // )

    // return <>
    // <li>
    //     {ispacked?name + " tick":name}
    // </li>
    // </>

    // return <>
    // <li>{name} {ispacked && "tick"}</li>
    // </>

    return (
        <>
        <Ticklist/>
        </>
    )








}

export default Items;