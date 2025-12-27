"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react"

export default function CaseStudies() {
  const [currentCase, setCurrentCase] = useState(0)

  const cases = [
    {
      title: "美国电子采购商",
      product: "降噪耳机",
      quantity: "12,000台",
      value: "$240,000",
      region: "美国",
      result: "首次合作即获大额订单，客户已成为长期合作伙伴",
    },
    {
      title: "澳大利亚矿业公司",
      product: "LED工矿灯",
      quantity: "5,000台",
      value: "$180,000",
      region: "澳大利亚",
      result: "通过LinkedIn精准营销，3个月内达成合作",
    },
    {
      title: "德国初创品牌",
      product: "瑜伽服定制",
      quantity: "8,000件",
      value: "$160,000",
      region: "德国",
      result: "从0到1建立品牌，成功打入欧洲市场",
    },
  ]

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length)
  }

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length)
  }

  return (
    <section id="cases" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">成功案例</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            真实订单，真实成果，见证中国制造的全球影响力
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{cases[currentCase].title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="px-2 py-1 rounded-md bg-primary/10 text-primary font-medium">
                      {cases[currentCase].region}
                    </span>
                    <span>•</span>
                    <span>{cases[currentCase].product}</span>
                  </div>
                </div>
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">订单数量</div>
                  <div className="text-2xl font-bold text-foreground">{cases[currentCase].quantity}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">订单金额</div>
                  <div className="text-2xl font-bold text-primary">{cases[currentCase].value}</div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <p className="text-sm text-foreground leading-relaxed">
                  <strong>成果：</strong> {cases[currentCase].result}
                </p>
              </div>

              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-2">
                  {cases.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCase(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentCase ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                      }`}
                      aria-label={`查看案例 ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={prevCase} aria-label="上一个案例">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={nextCase} aria-label="下一个案例">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
