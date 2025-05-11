import { Gamepad2 } from "lucide-react";

function App() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-blue-200">
      <div className="w-full max-w-md rounded-2xl bg-blue-100 p-8 text-center">
        <div className="mb-8 flex items-center justify-center gap-2">
          <Gamepad2 className="text-pink h-8 w-8" />
          <h1 className="text-4xl font-bold text-white">Tic Tac Toe</h1>
        </div>
      </div>
    </main>
  );
}

export default App;
