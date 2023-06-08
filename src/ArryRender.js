

const Renderarray = ()=>{

    const arry = [1,45,78,"mukesh", 89];
    const arry1 = [<li>{"mukesh"}</li>,<li>{"mukesh"}</li>]
    const brr = [
        {
            name:"mukesh",
            age:25
        }
        ,
        {
            name:"sukesh",
            age:20
        }
    ]

    const drry = brr.map((obj)=>{
        return <li>{obj.name}</li>
    })

    const frry = brr.map((obj)=><p>{obj.age}</p>)

    return <>
    <ul>{drry}</ul>
    <div>
        {frry}
    </div>
    </>
}

export default Renderarray