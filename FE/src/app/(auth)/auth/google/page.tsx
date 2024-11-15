import accountApiRequest from "@/apiRequest/account";
import { auth, handlers } from "@/auth"
import { authenticateWithGoogle } from "@/lib/actions";


export default async function GoogleAuthPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const session = await auth();
  try {
    const accessToken = searchParams?.accessToken
    if (accessToken && typeof accessToken === 'string') {
      const res = await authenticateWithGoogle(accessToken);
      if (res?.error) {
        console.log(res.error);
      } else {
        window.location.href = '/'
      }
    }
  } catch (error) {
    console.log(error);
  }
  return (
    <div>page - {JSON.stringify(searchParams)}</div>
  )
}
