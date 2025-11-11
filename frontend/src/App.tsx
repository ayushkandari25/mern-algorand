import SendTransactionForm from "./components/SendTransactionForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        MERN + Algorand App
      </h1>
      <SendTransactionForm />
    </div>
  );
}

export default App;
