import projects from "~/data/projects"
import { BorderBeam } from "~/components/ui/border-beam"
import { InternetIcon } from "~/components/icons/internet"
import { GithubIcon } from "lucide-react"

export default function ProjectCards(){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      { projects.map((p, key) => {
        return (
          <div key={key} className="relative overflow-clip flex flex-col gap-2 rounded-xl border border-background-400">
            <img src={p.imageUrl} alt={p.name} className="w-full aspect-[4/3] object-cover" />
            <div className="flex flex-col justify-between h-full gap-6 p-3">
              <div className="flex flex-col gap-2">
                <h1>{p.name}</h1>
                <h2>{p.description}</h2>
              </div>
              <div className="flex items-center justify-end gap-3">
                <a href={p.liveUrl} className="flex items-center gap-3 px-2 py-1 cursor-pointer rounded-md bg-text-500 text-background-500 hover:bg-text-100 transition-colors duration-300">
                  <InternetIcon className="size-4" />
                  <span className="text-sm">Website</span>
                </a>
                <a href={p.githubUrl} className="flex items-center gap-3 px-2 py-1 cursor-pointer rounded-md bg-text-500 text-background-500 hover:bg-text-100 transition-colors duration-300">
                  <GithubIcon className="size-4" />
                  <span className="text-sm">Source</span>
                </a>
              </div>
            </div>
            <BorderBeam duration={8} size={100} />
          </div>
        )
      }) }
    </div>
  )
}