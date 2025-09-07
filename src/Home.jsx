import React from "react";
import { Card, CardContent } from "./components/ui/Card";
import { Button } from "./components/ui/Button";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&mute=1&controls=0&loop=1&playlist=ScMzIvxBSi4"
            title="Background Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
          ></iframe>
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Lindestudios Gaming & Travel
          </h1>
          <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
            En plats för gaming, musik och resor tillsammans.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-6 py-3 rounded-2xl shadow-lg">
            Utforska mer
          </Button>
        </div>
      </section>

      {/* Gaming Section */}
      <section className="py-20 px-6 bg-zinc-900">
        <h2 className="text-3xl font-bold text-center mb-10">Gaming</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="bg-zinc-800 border-zinc-700">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Turneringar</h3>
              <p>Vi deltar i olika online- och LAN-event tillsammans.</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-800 border-zinc-700">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Streams</h3>
              <p>Följ våra gamingstreams och highlights på Twitch & YouTube.</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-800 border-zinc-700">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p>Bygg en stark gemenskap och dela spelupplevelser.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Travel Section */}
      <section className="py-20 px-6 bg-black">
        <h2 className="text-3xl font-bold text-center mb-10">Resor</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="bg-zinc-800 border-zinc-700">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Festivaler</h3>
              <p>Vi älskar att resa till musikfestivaler som drum & bass events.</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-800 border-zinc-700">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Äventyr</h3>
              <p>Upptäck nya platser, kulturer och minnen med vännerna.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-zinc-900 text-center">
        <h2 className="text-3xl font-bold mb-6">Om oss</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Vi är Lindestudios – en samling vänner som brinner för gaming, musik
          och resor. Tillsammans skapar vi minnen både online och runt om i
          världen.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-black text-center text-zinc-400 text-sm">
        © {new Date().getFullYear()} Lindestudios. Alla rättigheter reserverade.
      </footer>
    </div>
  );
}
