"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/firebase/auth";
import Loader from "@/components/Loader";

export default function home () {

    const { authUser, isLoading, signOut } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !authUser) {
          router.push("/login");
        }
        
    }, [authUser, isLoading]);

    return !authUser ? (
        <Loader />
    ):(
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-darkkColor text-whiteColor">
            Home Page
            <button onClick={signOut} className="btn btn-primary mt-2">Logout</button>
        </div>
    )
}