import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Music - Search",
    description: "Generated by create next app",
};

export default function SearchLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return <>{children}</>;
}
