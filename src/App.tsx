function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Never Miss a Customer Again
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Assist-Ding provides 24/7 AI chatbot for small businesses. 
            Automated customer engagement, order management, and website integration.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Get Started
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 AI Chatbot</h3>
              <p className="text-gray-600">
                Never miss a customer. Our AI responds instantly, day or night.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Order Management</h3>
              <p className="text-gray-600">
                Automated order tracking, confirmations, and delivery updates.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Website Widget</h3>
              <p className="text-gray-600">
                Easy integration into any website with a single line of code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Permanent</h3>
              <p className="text-gray-500 mb-4">One-time payment, you own it</p>
              <div className="text-4xl font-bold text-green-600 mb-6">$318</div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>✅ $199 Bot + $119 Setup</li>
                <li>✅ First 2-3 months maintenance FREE</li>
                <li>✅ Full ownership</li>
                <li>✅ Customizations billed per work</li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Choose Permanent
              </button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-green-600">
              <div className="text-sm font-semibold text-green-600 mb-2">⭐ RECOMMENDED</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Retainer</h3>
              <p className="text-gray-500 mb-4">Done-for-you service</p>
              <div className="text-4xl font-bold text-green-600 mb-6">$59<span className="text-lg">/mo</span></div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li>✅ $159 Setup + $59/month</li>
                <li>✅ Server hosting included</li>
                <li>✅ Backend maintenance</li>
                <li>✅ Continuous bot training</li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Choose Retainer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-gray-400 text-center">
        <p>&copy; 2026 Assist-Ding. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
