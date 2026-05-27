export default function Home() {
  const faqs = [
    {
      q: "How does the Slack integration work?",
      a: "Install the app to your Slack workspace, then use slash commands like /incident to trigger playbooks. The app handles channel creation, notifications, and team coordination automatically."
    },
    {
      q: "Can I customize the response playbooks?",
      a: "Yes. The dashboard lets you define custom playbooks with steps, escalation paths, and notification rules tailored to your team's incident response process."
    },
    {
      q: "Is there a free trial?",
      a: "Yes, you get a 14-day free trial with full access. No credit card required to start."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For DevOps Teams & SREs
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Incident Response<br />
          <span className="text-[#58a6ff]">Triggered from Slack</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          One slash command spins up a war room, pages the right people, and runs your playbook — automatically. Stop scrambling, start resolving.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors"
          >
            See How It Works
          </a>
        </div>
        <div id="how-it-works" className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⚡", title: "Slash Command", desc: "Type /incident sev1 database-down in any channel to kick off the response flow instantly." },
            { icon: "🏠", title: "War Room Created", desc: "A dedicated incident channel is created, relevant team members are invited, and the on-call is paged." },
            { icon: "📋", title: "Playbook Runs", desc: "Predefined steps are posted as a checklist. Status updates go to stakeholders automatically." }
          ].map((step) => (
            <div key={step.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{step.icon}</div>
              <h3 className="text-white font-semibold mb-2">{step.title}</h3>
              <p className="text-[#8b949e] text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$49</div>
          <div className="text-[#8b949e] mb-6">/month per workspace</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited incident playbooks",
              "Automatic war room creation",
              "On-call paging integration",
              "Stakeholder status updates",
              "Custom escalation paths",
              "14-day free trial"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
          <p className="text-[#8b949e] text-xs mt-3">No credit card required</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Incident Response Slack Commander. All rights reserved.
      </footer>
    </main>
  );
}
