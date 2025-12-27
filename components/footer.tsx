import { MapPin, Phone, Mail, Building2 } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const branches = [
    {
      city: "常州",
      english: "Changzhou",
      address: "武进区延政中路3号财富广场武房大厦19楼",
    },
    {
      city: "南京",
      english: "Nanjing",
      address: "六合区欢乐港1号楼",
    },
    {
      city: "上海",
      english: "Shanghai",
      address: "青浦区E通世界华新园E栋",
    },
    {
      city: "济南",
      english: "Jinan",
      address: "历下区舜泰南路舜泰广场1号楼东座4楼",
    },
    {
      city: "芜湖",
      english: "Wuhu",
      address: "飞江区芜湖科技产业园4号楼",
    },
    {
      city: "苏州",
      english: "Suzhou",
      address: "区域运营中心",
    },
    {
      city: "汕头",
      english: "Shantou",
      address: "区域运营中心",
    },
  ]

  return (
    <footer id="contact" className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image src="/logo.webp" alt="环球出海" width={200} height={45} className="h-12 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground mb-4 max-w-md leading-relaxed">
              环球出海（深圳）数字科技有限公司专注于为中国制造企业提供专业的跨境营销解决方案，以联合运营模式助力企业快速出海。
            </p>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">网址：</strong>
              <a href="https://www.globel-trade.cn" className="text-primary hover:underline">
                www.globel-trade.cn
              </a>
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">联系我们</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div className="font-medium text-foreground">400-805-2996</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">contact@globel-trade.cn</div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">总部地址</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div className="font-medium text-foreground mb-1">深圳总部</div>
                  <div>Headquarters</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-foreground text-lg">分公司网络</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {branches.map((branch) => (
              <div
                key={branch.city}
                className="p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-foreground mb-0.5">
                      {branch.city} <span className="text-xs text-muted-foreground">{branch.english}</span>
                    </div>
                    <div className="text-xs text-muted-foreground leading-relaxed break-words">{branch.address}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 环球出海（深圳）数字科技有限公司. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                服务条款
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                粤ICP备xxxxxxxx号
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
