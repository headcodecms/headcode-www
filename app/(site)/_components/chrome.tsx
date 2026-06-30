'use client'

import { Menu, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import * as React from 'react'

import { Button, buttonVariants } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import type { FooterData, HeaderData } from '@/headcode/sections'
import { cn } from '@/lib/utils'
import { Container } from './container'

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.07.78 2.15 0 1.56-.01 2.81-.01 3.19 0 .31.21.67.8.56C20.71 21.37 24 17.08 24 12 24 5.73 18.77.5 12 .5z" />
  </svg>
)

const MarkdownIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 640 640"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M593.8 123.1L46.2 123.1C20.7 123.1 0 143.8 0 169.2L0 470.7C0 496.2 20.7 516.9 46.2 516.9L593.9 516.9C619.4 516.9 640.1 496.2 640 470.8L640 169.2C640 143.8 619.3 123.1 593.8 123.1zM338.5 424.6L277 424.6L277 304.6L215.5 381.5L154 304.6L154 424.6L92.3 424.6L92.3 215.4L153.8 215.4L215.3 292.3L276.8 215.4L338.3 215.4L338.3 424.6L338.5 424.6zM473.8 427.7L381.5 320L443 320L443 215.4L504.5 215.4L504.5 320L566 320L473.8 427.7z" />
  </svg>
)

const useMarkdownHref = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return React.useMemo(() => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('md')
    const query = params.toString()

    return `${pathname}${query ? `?${query}&md` : '?md'}`
  }, [pathname, searchParams])
}

export const SiteHeader = ({
  data,
  headcode,
}: {
  data: HeaderData
  headcode?: string
}) => {
  const [isDark, setIsDark] = React.useState(true)
  const markdownHref = useMarkdownHref()
  const navLinks = data.navigation
    .map((item) => item.navItem)
    .filter((link) => link.title && link.url)

  React.useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    document.documentElement.classList.toggle('dark', next)
    setIsDark(next)
  }

  return (
    <header
      className="bg-background/80 sticky top-0 z-40 border-b backdrop-blur"
      data-headcode={headcode}
    >
      <Container className="flex h-14 items-center justify-between">
        <Link
          href="/"
          className="focus-visible:ring-ring rounded-sm focus-visible:ring-2 focus-visible:outline-none"
        >
          <span className="font-heading text-base font-semibold tracking-tight">
            {data.brand.toUpperCase()}
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={`${link.title}-${link.url}`}
              href={link.url}
              target={link.openInNewWindow ? '_blank' : undefined}
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'sm' }),
                'text-muted-foreground hover:text-foreground',
              )}
            >
              {link.title}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {isDark ? <Sun /> : <Moon />}
          </Button>
          <Link
            href="https://github.com/headcodecms/headcodecms"
            target="_blank"
            aria-label="GitHub repository"
            className={buttonVariants({ variant: 'ghost', size: 'icon' })}
          >
            <GithubIcon className="size-4" />
          </Link>
          <Link
            href={markdownHref}
            aria-label="View current page as Markdown"
            className={buttonVariants({ variant: 'ghost', size: 'icon' })}
          >
            <MarkdownIcon className="size-5" />
          </Link>
        </nav>
        <div className="flex items-center gap-1 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {isDark ? <Sun /> : <Moon />}
          </Button>
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu />
                </Button>
              }
            />
            <SheetContent side="right" className="w-3/4 sm:max-w-sm">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigate the site.</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4 pb-4">
                {navLinks.map((link) => (
                  <SheetClose
                    key={`${link.title}-${link.url}`}
                    nativeButton={false}
                    render={
                      <Link
                        href={link.url}
                        className="hover:bg-muted focus-visible:ring-ring flex items-center rounded-md px-3 py-2.5 text-base font-medium focus-visible:ring-2 focus-visible:outline-none"
                      >
                        {link.title}
                      </Link>
                    }
                  />
                ))}
              </nav>
              <div className="mt-auto flex items-center justify-center gap-1 border-t p-4">
                <Link
                  href="https://github.com/headcodecms/headcodecms"
                  target="_blank"
                  aria-label="GitHub repository"
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'mx-auto',
                  )}
                >
                  <GithubIcon className="size-4" />
                </Link>
                <SheetClose
                  nativeButton={false}
                  render={
                    <Link
                      href={markdownHref}
                      aria-label="View current page as Markdown"
                      className={buttonVariants({
                        variant: 'ghost',
                        size: 'icon',
                      })}
                    >
                      <MarkdownIcon className="size-5" />
                    </Link>
                  }
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}

export const SiteFooter = ({
  data,
  headcode,
}: {
  data: FooterData
  headcode?: string
}) => {
  const markdownHref = useMarkdownHref()

  return (
    <footer className="border-t py-10" data-headcode={headcode}>
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <span className="text-muted-foreground text-sm">{data.copyright}</span>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
          {data.navigation.map(({ navItem }) => (
            <Link
              key={`${navItem.title}-${navItem.url}`}
              href={navItem.url}
              target={navItem.openInNewWindow ? '_blank' : undefined}
              className="text-muted-foreground hover:text-foreground"
            >
              {navItem.title}
            </Link>
          ))}
          <Link
            href={markdownHref}
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5"
          >
            <MarkdownIcon className="size-4" />
            View as Markdown
          </Link>
        </nav>
      </Container>
    </footer>
  )
}
