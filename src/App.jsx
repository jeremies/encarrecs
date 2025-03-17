import PWABadge from "./PWABadge.jsx";
import "./App.css";
import encarrecs from "./encarrecs.json";
import { useState } from "react";

const nomsComplets = {
  X: "🐶 Xavi",
  Q: "💾 Quim",
  Je: "🌾 Jesús",
  M: "💉 Miqui",
  JP: "👨‍🌾 Joan Pau",
  O: "🚴‍♂️ Oriol",
  V: "🐝 Vicenç",
};

const nomEncarrecs = [
  "🚾 WC 0 + corredor",
  "🚾 WC 1 + corredor",
  "♻️ Basures",
  "💩 Excrements gos",
  "🌲 Terrassa + 🪜 escales",
  "🅿️ Pàrquing + 🖥️ ordinador",
  "🍗 Menjador + 🧥 reb. + 🪜 esc.",
];

function App() {
  const [count, setCount] = useState(0);
  const avui = new Date();
  avui.setDate(avui.getDate() + count * 7);
  const dia0 = new Date("2024-03-16");
  const diesTranscorreguts = Math.floor((avui - dia0) / (24 * 3600 * 1000));
  const numeroSemana = Math.floor(diesTranscorreguts / 7) % 60;
  console.log(numeroSemana);

  const dissabte = new Date(avui - (avui.getDay() + 1) * 24 * 3600 * 1000);

  return (
    <>
      <h2>✅ Encàrrecs</h2>

      <h3>
        📆 dissabte{" "}
        {dissabte.toLocaleDateString("ca-ES", {
          day: "numeric",
          month: "long",
        })}
      </h3>

      <ul>
        {nomEncarrecs.map((e, i) => (
          <li key={i} className="list-item">
            {e}:
            <ul>
              <li>{nomsComplets[encarrecs[i][numeroSemana]]}</li>
            </ul>
          </li>
        ))}
      </ul>

      <div>
        <button
          className="arrows"
          onClick={() => setCount((count) => count - 1)}
        >
          ⬅️
        </button>
        <button
          className="arrows"
          onClick={() => setCount((count) => count + 1)}
        >
          ➡️
        </button>
      </div>
      <PWABadge />
    </>
  );
}

export default App;
