
import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [cat, setCat] = useState("Food");
  const [filter, setFilter] = useState("All");
  const [list, setList] = useState([]);

  const data = filter === "All" ? list : list.filter(e => e.cat === filter);
  const total = data.reduce((s, e) => s + e.amount, 0);

  return (
    <div>
      <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={e=>setAmount(e.target.value)} />
      <select onChange={e=>setCat(e.target.value)}>
        <option>Food</option><option>Travel</option><option>Shopping</option>
      </select>
      <button onClick={()=>{
        setList([...list,{id:Date.now(),title,amount:+amount,cat}]);
        setTitle(""); setAmount("");
      }}>Add</button>

      <select onChange={e=>setFilter(e.target.value)}>
        <option>All</option><option>Food</option><option>Travel</option><option>Shopping</option>
      </select>

      {data.map(e=>(
        <p key={e.id}>{e.title} - ₹{e.amount}</p>
      ))}

      <h4>Total: ₹{total}</h4>
    </div>
  );
}
