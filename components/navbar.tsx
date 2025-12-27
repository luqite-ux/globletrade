"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "首页", href: "#home" },
    { name: "联合运营模式", href: "#value" },
    { name: "成功案例", href: "#cases" },
    { name: "关于我们", href: "#about" },
    { name: "联系我们", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <Image src="/logo.webp" alt="环球出海" width={220} height={48} className="h-12 w-auto" priority />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              variant="outline"
              className="font-medium bg-transparent"
              onClick={() => window.open("https://www.globel-trade.com", "_blank")}
            >
              AI拓客系统登录
            </Button>
            <Button size="sm" className="font-medium">
              免费咨询
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              size="sm"
              variant="outline"
              className="w-full font-medium bg-transparent"
              onClick={() => window.open("https://www.globel-trade.com", "_blank")}
            >
              AI拓客系统登录
            </Button>
            <Button size="sm" className="w-full font-medium">
              免费咨询
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
