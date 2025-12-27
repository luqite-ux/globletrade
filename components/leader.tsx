import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Leader() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">创始人寄语</h2>
        </div>

        <Card className="max-w-5xl mx-auto border-border overflow-hidden">
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-2 bg-muted/50 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <div className="text-5xl font-bold text-primary">R</div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Robert Lu</h3>
                <p className="text-sm text-muted-foreground">首席增长官 CGO</p>
              </div>
            </div>

            <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <blockquote className="text-lg text-foreground leading-relaxed mb-6 text-pretty">
                "坚信'技术应当服务于商业本质'。我们首创'联合运营'模式，不仅提供营销工具和流量，更与企业风险共担、利益共享。帮助中国制造建立全球增长能力，这是我们的使命。"
              </blockquote>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  15年出海经验
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  服务500+企业
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  累计订单$50M+
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
