import { PrismaClient } from "@repo/db/client"
const client = new PrismaClient();

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello turborepo</h1>
    </div>
  )
}
