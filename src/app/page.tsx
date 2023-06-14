import Link from "next/link";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center p-24 text-amber-500">
            <h1 className="text-3xl">welcome</h1>
            <Link href="/level1" className="hover:underline">Level One</Link>
        </div>
    );
}
