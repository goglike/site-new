import {Route, Routes} from 'react-router-dom'

interface Iuser {
    id: number;
    name: string;
    surname: string
}

const users:Iuser[] = [
    {id: 0, name: 'Boris', surname:'Shvets'},
    {id: 1, name: 'Aleksey', surname: 'Svyazun'},
    {id: 2, name: 'Harry', surname: 'Potter'}
]


const Home: React.FC = () => {
    return <div>
        <a>friends</a>
        {users.map( user => (
            <li>{user.id}: {user.name} {user.surname}</li>
            )
         )
        }


    </div>
}
export default Home
