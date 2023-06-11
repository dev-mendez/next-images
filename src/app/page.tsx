import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

const getUsers = async () => {
  const res = await fetch('https://reqres.in/api/users?page=2')
  const users = await res.json()
  return users.data
}

export default async function Home() {
  const users = await getUsers()
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ul className='grid grid-flow-col gap-4'>
          {users.map((user: any) => (
            <Link key={user.id} href={`${user.id}`}>
              <li className=' hover:cursor-pointer' key={user.id}>
                <Image alt='Image' width={100} height={100} src={user.avatar} />
                <h3>{user.first_name}</h3>
              </li>
            </Link>))}
        </ul>
      </main>
    </>
  )
}   