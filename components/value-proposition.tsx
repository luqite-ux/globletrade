import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, Zap } from "lucide-react"

export default function ValueProposition() {
  const models = [
    {
      title: "自己干",
      icon: X,
      iconColor: "text-destructive",
      points: ["需要组建专业团队", "前期投入成本高", "试错周期长", "效果难以保证"],
      highlight: false,
    },
    {
      title: "找人干",
      icon: X,
      iconColor: "text-muted-foreground",
      points: ["服务商质量参差不齐", "只收费不负责结果", "沟通成本高", "效果难以衡量"],
      highlight: false,
    },
    {
      title: "联合干",
      icon: Zap,
      iconColor: "text-primary",
      points: ["风险共担，利益共享", "专业团队全程服务", "见效快，成本可控", "数据透明，结果导向"],
      highlight: true,
    },
  ]

  return (
    <section id="value" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">为什么选择联合运营模式？</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            对比传统模式，联合运营让您的出海之路更加稳健高效
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {models.map((model) => {
            const Icon = model.icon
            return (
              <Card
                key={model.title}
                className={`relative ${
                  model.highlight ? "border-primary shadow-lg shadow-primary/10 scale-105" : "border-border"
                }`}
              >
                {model.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    推荐方案
                  </div>
                )}
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg ${model.highlight ? "bg-primary" : "bg-muted"} flex items-center justify-center mb-3`}
                  >
                    <Icon className={`h-6 w-6 ${model.highlight ? "text-primary-foreground" : model.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl">{model.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {model.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        {model.highlight ? (
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={`text-sm ${model.highlight ? "text-foreground font-medium" : "text-muted-foreground"}`}
                        >
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
