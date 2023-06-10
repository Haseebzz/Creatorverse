/*ubxPUOYuhtx417Sq
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jeclyakmtlwyxukbijgu.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
*/ 

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import { supabase } from './client';
import { useEffect, useState } from 'react';

function App() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    getCreators();
  }, []);

  async function getCreators() {
    try {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .limit(10);

      if (error) throw error;

      if (data != null) {
        setCreators(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <Router>
      <div className="h-[600px] w-full bg-cover bg-center border-b-2 border-gray-600 text-center pt-32 text-white" style={{ backgroundImage: `url('https://creatorverse-production.up.railway.app/static/media/banner.de5659898d3bfc5eb8ea.jpg')` }}>
  <h1 className="font-bold text-5xl md:text-7xl lg:text-9xl">CREATORVERSE</h1>

  <div className="flex flex-col sm:flex-row items-center justify-center border border-transparent rounded-md  font-poppins font-bold text-white text-20px tracking-wider h-12 uppercase mt-[80px]">
  <Link
  className="text-white hover:text-blue-200 p-4 m-5 w-[300px] text-2xl"
  to="/"
  style={{ backgroundColor: 'rgb(81, 133, 180)' }}
>
  View all Creators
</Link>
<Link
  className="text-white hover:text-blue-200 p-4 m-5 w-[300px] text-2xl"
  to="/add"
  style={{ backgroundColor: 'rgb(81, 133, 180)' }}
>
  Add a Creator
</Link>
</div>

</div>

        <Routes>
          <Route path="/add" element={<AddCreator />} />
          <Route path="/edit/:id" element={<EditCreator />} />
          <Route
            path="/"
            element={<ShowCreators creators={creators} />}
          />
          <Route path="/view/:id" element={<ViewCreator />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;