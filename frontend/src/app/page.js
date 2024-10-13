// app/page.jsx
import Chatbox from '@/components/Chatbox';

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-200 mt-20">
      <Chatbox />
    </main>
  );
}
