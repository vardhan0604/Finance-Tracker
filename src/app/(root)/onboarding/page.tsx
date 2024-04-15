"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { getSession } from "@/app/utils/auth";
import { addUser } from "@/lib/actions/users.action";
import { useRouter } from 'next/navigation';


export default function Page() {
    const router = useRouter();

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const fetchAuth = async () => {
            const session = await getSession();
            console.log(session?.user?.email ?? "");
            setEmail(session?.user?.email ?? "");
        };
        fetchAuth();
        
    }, []);

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const user = await addUser({ data: { email: email, password: password } });

        if (user) {
            console.log(user);
            // redirect("/home")
            router.push("/");
        }
    }

    return (
        <div>
            <h1>{email}</h1>
            <form>
                <input type="email" value={email} readOnly />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                        console.log(e.target.value);
                        setPassword(e.target.value);
                    }}
                />

                <button onClick={(e)=>{
                    handleSubmit(e)
                }}> proceed to dashboard</button>
            </form>
        </div>
    );
}
