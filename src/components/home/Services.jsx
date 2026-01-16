import { ShieldCheck, Truck, Cpu, Headphones } from "lucide-react";

const servicesItem = [
    {
        icon: ShieldCheck,
        title: "Secure Payments",
        desc: "Enterprise-grade security with encrypted transactions and trusted gateways."
    },
    {
        icon: Truck,
        title: "Fast Delivery",
        desc: "Optimized logistics to deliver your tech faster, safer, and on time."
    },
    {
        icon: Cpu,
        title: "Latest Technology",
        desc: "Carefully curated cutting-edge tech products from trusted brands."
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        desc: "Always-on expert support for a smooth and reliable shopping experience."
    }
];

const 
Services = () => {
    return (
        <section className="bg-white border-b border-zinc-100">
            <div className="container">

                {/* Section Header */}
                <div className="text-center mb-15 flex justify-between">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-text-primary font-display">
                        The <span className="text-blue-600">Rexify</span> <p className="text-5xl text-left mt-2">Standard</p> 
                    </h2>
                    <p className="mt-4 text-text-muted text-lg font-medium leading-relaxed max-w-lg text-right">
                        We don't just sell tech; we curate a premium experience. 
                        Built for speed, trust, and the future.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {servicesItem.map((item, index) => (
                        <div
                            key={index}
                            className="
                                group relative p-8 h-full
                                bg-white rounded-2xl
                                border border-zinc-200
                                hover:border-zinc-300
                                transition-all duration-300 ease-out
                                hover:-translate-y-1
                            "
                        >
                            {/* Hover Gradient Effect (Optional subtle touch) */}
                            <div className="absolute inset-0 bg-zinc-50 opacity-0 group-hover:opacity-50 rounded-2xl transition-opacity duration-300 -z-10" />

                            {/* Icon - Minimal & Clean */}
                            <div className=" flex items-center justify-center w-fit rounded-lg bg-zinc-50 border border-zinc-100 text-text-primary mb-6 text-2xl group-hover:scale-110 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                                <item.icon />
                            </div>

                            {/* Text */}
                            <h3 className="text-xl font-bold text-text-primary mb-3 tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Services;