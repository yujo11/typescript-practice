import React from 'react';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div className="p-20 bg-gray-300">
      <h1 className="text-3xl p-10 font-bold text-center">🎱 행운의 로또</h1>
      <form className="flex flex-col">
        <label className="mb-2">구입할 금액을 입력해주세요.</label>
        <input className="p-2" />
        <button type="submit" className="p-5" />
      </form>
    </div>
  );
}

export default App;
