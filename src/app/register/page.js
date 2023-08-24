"use client"
import { auth } from '@/firebase/firebase'
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { Oswald } from "next/font/google";
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/firebase/auth'
import Loader from '@/components/Loader'


const oswald = Oswald({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
  })


export default function Home() {

  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const {authUser, isLoading, setAuthUser,} = useAuth()
  const router = useRouter()

  
  useEffect(()=>{
    if(!isLoading && authUser){
      router.push('/home')
    }
  },[authUser,isLoading])

  const signupHandle = async () => {
    if(!name || !email || !password) return
    try {
      const {user} = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser, {
        displayName: name
      })
      setAuthUser({
        uid: user.uid,
        email: user.email,
        name
      })
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  const provider = new GoogleAuthProvider();

  const googleLogin = async () => {
    try {
      const user = await signInWithPopup(auth,provider)
      console.log(user);
      router.push("/home")
    } catch (error) {
      console.log(error);
    }
  }
  return isLoading || (!isLoading && authUser) ? (
    <Loader />
  ): (
    <main className={`flex justify-center items-center min-h-screen `}>
        <div className='bg-darkColorLight p-10 text-center rounded-lg'>
          <h3 className={`font-bold text-3xl ${oswald.className}`}>Login</h3>
          <div className='p-4 mt-6'>
          <div className='bg-darkkColor rounded-full p-2 mb-8 flex justify-center' >
            <FcGoogle className='text-3xl '/> <span className='ms-3 text-xl text-center' onClick={googleLogin}>Signup With Google</span></div>
            <form className='p-3 mt-6 rounded-md shadow' onSubmit={(e)=>e.preventDefault()} >
            <div className='flex flex-col items-start p-2 mt-4'>
              <input type='text' placeholder='Name' autoComplete='off' className="p-2 text-blackColor rounded-lg outline-none md:w-full lg:w-full " required onChange={(e)=>setName(e.target.value)} /> 
              </div>
              <div className='flex flex-col items-start p-2 mt-2'>
              <input type='email' placeholder='Email' autoComplete='off' className="p-2 text-blackColor rounded-lg outline-none md:w-full lg:w-full " required onChange={(e)=>setEmail(e.target.value)} /> 
              </div>
              <div className='flex flex-col items-start p-2 mt-2'>
              <input type='password' placeholder='Password' autoComplete='off' className="p-2 text-blackColor rounded-lg outline-none md:w-full lg:w-full " required onChange={(e)=>setPassword(e.target.value)}  /> 
              </div>
  
              <button className='btn btn-primary' onClick={signupHandle}>Sign up</button>
              <Link className='text-secondaryColor text-xs ms-3' href='/register'>Already have Account?</Link>  
            </form>
          </div>
        </div>
       
      </main>
  )
}
