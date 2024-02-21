import {FunctionComponent} from "react";
import HomeButton from "./HomeButton/HomeButton";
import ContactButton from "./ContactButton/ContactButton";
import AboutButton from "./AboutButton/AboutButton";
import './Header.module.css'
/*
class User {
    public name: string;
    public surname: string;
    public id: number;

    constructor(name, surname, id ) {
        this.name= name ;
        this.surname = surname
        this.id = id;
    }
}
const first = new User('Max', 'Green', 0)
const second  = new User("Alice",'Mercy', 1)

const Array = [first, second]
*/


interface HeaderProps {

}

const Header:FunctionComponent<HeaderProps> = ({}) => {
    return  <header>
                <HomeButton/>
                <ContactButton/>
                <AboutButton/>
            </header>
}
export default Header