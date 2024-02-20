import UsersCard from "./usersCard";
import { User } from "@/app/lib/definitions";


export default function UsersList({ users } : { users: User[]}) {

  return (

    <div className="w-full flex flex-wrap gap-6 items-center justify-center">

      {

        users.map( (user : User) => (

          <UsersCard

            key={user.id}

            id={user.id}

            name={user.name}

            pictures={user.pictures}

            description=""

            collection=""

          />

        ) )

      }

    </div>

  )

}