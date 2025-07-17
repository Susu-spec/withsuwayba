import type { Ref } from "react"
import Footer from "./Footer"
import Header from "./Header"

type LayoutProp = {
    children: React.ReactNode,
    ref: Ref<HTMLDivElement> | null
}
export default function Layout({ children, ref }: LayoutProp) {
    return (
       <div ref={ref} className="relative">
            <div className='absolute top-0'>
                <Header />
            </div>
            {children}
            <Footer />
       </div>
    )
}