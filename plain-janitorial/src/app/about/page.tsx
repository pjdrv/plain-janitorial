'use client'

import { motion } from 'framer-motion'
import { Target, Users, Zap, Shield } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'No Fluff',
      description: 'We cut out the jargon and focus on what matters: getting your facility clean.',
    },
    {
      icon: Zap,
      title: 'Smart Technology',
      description: 'Autonomous robots handle the routine so our team can focus on the details.',
    },
    {
      icon: Users,
      title: 'Human Oversight',
      description: 'Real people monitoring, verifying, and ensuring quality every step of the way.',
    },
    {
      icon: Shield,
      title: 'Proven Results',
      description: 'Photo documentation and sensor data prove the work got done right.',
    },
  ]

  return (
    <div className="min-h-screen bg-charcoal-50 pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-extrabold text-charcoal mb-6">
            ABOUT PLAIN JANITORIAL
          </h1>
          <p className="text-xl text-charcoal/60">
            We&apos;re on a mission to make commercial cleaning simpler, smarter, and more transparent.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-charcoal mb-6">Our Story</h2>
          <div className="space-y-4 text-charcoal/70">
            <p>
              Plain Janitorial was founded on a simple idea: cleaning services shouldn&apos;t be complicated. 
              We saw an industry filled with vague promises, hidden fees, and no way to verify the work 
              was actually getting done.
            </p>
            <p>
              So we built something different. We combined autonomous cleaning technology with human 
              expertise to deliver better results at lower cost. Our robots handle the large open areas 
              efficiently, while our team focuses on the details that matter—corners, restrooms, and 
              high-touch surfaces.
            </p>
            <p>
              Most importantly, we give you proof. Real-time dashboards show you exactly what got cleaned, 
              when, and by whom. No more wondering if the job was done right.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold text-charcoal text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-orange" />
              </div>
              <h3 className="font-bold text-charcoal mb-2">{value.title}</h3>
              <p className="text-sm text-charcoal/60">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-charcoal-900 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-extrabold text-orange mb-2">2019</div>
              <div className="text-white/60">Founded</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-orange mb-2">150+</div>
              <div className="text-white/60">Robots Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-orange mb-2">2.5M+</div>
              <div className="text-white/60">Sq Ft Daily</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-orange mb-2">98%</div>
              <div className="text-white/60">Client Retention</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
