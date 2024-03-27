import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";

const person ={
    name : "nihal",
    address : {
        line1: 123,
        city : "Pune",
        country: "India"
    },
    profiles: ['linkedin', 'fb', 'insta']
}

export default function LearningComponent(){
    return(
        <>
        <FirstComponent/>
        <SecondComponent/>
        <div>{person.name}</div>
        <div>{person.address.city}</div>
        <div>{person.profiles[1]}</div>
        </>
    )
}