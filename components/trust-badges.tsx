export default function TrustBadges() {
  const partners = [
    { name: "Google Partner", icon: "🔍" },
    { name: "TikTok TSP", icon: "🎵" },
    { name: "Microsoft AI", icon: "💻" },
    { name: "Huawei Cloud", icon: "☁️" },
    { name: "广东电商协会", icon: "🏆" },
  ]

  return (
    <section className="py-12 bg-muted/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8 font-medium">权威认证与合作伙伴</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
            >
              <div className="text-3xl">{partner.icon}</div>
              <span className="text-xs text-center font-medium text-muted-foreground">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
