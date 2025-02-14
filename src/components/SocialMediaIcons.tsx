import { MailIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

import BlueskyIcon from "~/components/icons/bluesky";

export default function SocialMediaIcons(){
  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <a href={"mailto:vanir1812@gmail.com"} aria-label={"Email"} className="size-9 rounded-sm border border-gray-700 hover:border-neutral-200 group inline-flex items-center justify-center transition-colors duration-300">
              <MailIcon className="size-4 text-gray-700 group-hover:text-neutral-200 transition-colors duration-300" />
            </a>
          </TooltipTrigger>
          <TooltipContent className="px-2 py-1 text-xs">{"E-Mail"}</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a href={"https://github.com/vanirvan/"} aria-label={"Github"} className="size-9 rounded-sm border border-gray-700 hover:border-neutral-200 group inline-flex items-center justify-center transition-colors duration-300">
              <GithubIcon className="size-4 text-gray-700 group-hover:text-neutral-200 transition-colors duration-300" />
            </a>
          </TooltipTrigger>
          <TooltipContent className="px-2 py-1 text-xs">{"Github"}</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a href={"https://www.linkedin.com/in/irvan-maulana-1bb470196/"} aria-label={"LinkedIn"} className="size-9 rounded-sm border border-gray-700 hover:border-neutral-200 group inline-flex items-center justify-center transition-colors duration-300">
              <LinkedinIcon className="size-4 text-gray-700 group-hover:text-neutral-200 transition-colors duration-300" />
            </a>
          </TooltipTrigger>
          <TooltipContent className="px-2 py-1 text-xs">{"LinkedIn"}</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a href={"https://x.com/van_irvan678"} aria-label={"Twitter"} className="size-9 rounded-sm border border-gray-700 hover:border-neutral-200 group inline-flex items-center justify-center transition-colors duration-300">
              <TwitterIcon className="size-4 text-gray-700 group-hover:text-neutral-200 transition-colors duration-300" />
            </a>
          </TooltipTrigger>
          <TooltipContent className="px-2 py-1 text-xs">{"Twitter"}</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a href={"https://bsky.app/profile/vanirvan.bsky.social"} aria-label={"Bluesky"} className="size-9 rounded-sm border border-gray-700 hover:border-neutral-200 group inline-flex items-center justify-center transition-colors duration-300">
              <BlueskyIcon className="size-4 text-gray-700 group-hover:text-neutral-200 fill-current transition-colors duration-300" />
            </a>
          </TooltipTrigger>
          <TooltipContent className="px-2 py-1 text-xs">{"Bluesky"}</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}