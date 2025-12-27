import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Share2, Database, Video } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "多语种营销网站建设",
      description: "专业的多语言网站开发，SEO优化，提升全球搜索排名",
      features: ["多语言支持", "SEO优化", "响应式设计"],
    },
    {
      icon: Share2,
      title: "社交平台营销",
      description: "Facebook、TikTok、LinkedIn等主流平台精准获客",
      features: ["精准投放", "数据分析", "内容运营"],
    },
    {
      icon: Database,
      title: "海关数据与商业情报",
      description: "利用大数据挖掘潜在客户，精准定位目标市场",
      features: ["数据挖掘", "客户分析", "市场洞察"],
    },
    {
      icon: Video,
      title: "AI视频内容制作",
      description: "运用AI技术快速生成高质量营销视频内容",
      features: ["AI生成", "快速交付", "多场景应用"],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">我们的服务</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            全方位数字营销解决方案，助力企业快速出海
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
