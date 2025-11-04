import Sidebar from "./components/sidebar/Sidebar";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-0 lg:ml-64 p-6 bg-base-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      </main>
    </div>
  );
}
