import Image from "next/image"


const getUser = async (params: any) => {
  const res = await fetch(`https://reqres.in/api/users/${params.users[0]}`)
  const users = await res.json()
  return users.data
}

const Page = async ({ params }: any) => {

  const user = await getUser(params)
  console.log(user)

  return (
    <div className=" container flex flex-col align-middle justify-center mt-10">
      <Image className="ml-auto mr-auto rounded" alt='Image' width={100} height={100} src={user.avatar} />
      <h1 className="font-white mt-2 text-center">This is {user.first_name}!</h1>
      <p className="text-center mt-10 p-5 border-purple-400 rounded border-2">{JSON.stringify(user)}</p>
    </div>
  )
}

export default Page
